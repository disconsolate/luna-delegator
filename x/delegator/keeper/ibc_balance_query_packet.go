package keeper

import (
	"errors"
	"fmt"
	"github.com/cosmos/cosmos-sdk/types/query"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	icqtypes "github.com/strangelove-ventures/async-icq/v6/types"
	abcitypes "github.com/tendermint/tendermint/abci/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v6/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v6/modules/core/24-host"
	"luna-delegator/x/delegator/types"
)

// TransmitIBCBalanceQueryPacketPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIBCBalanceQueryPacketPacket(
	ctx sdk.Context,
	packetData types.IBCBalanceQueryPacketPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) (uint64, error) {
	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return 0, sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return 0, sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return 0, sdkerrors.Wrapf(channeltypes.ErrSequenceSendNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	q := banktypes.QueryAllBalancesRequest{
		Address: packetData.GetAddress(),
		Pagination: &query.PageRequest{
			Offset: 0,
			Limit:  10,
		},
	}

	reqs := []abcitypes.RequestQuery{
		{
			Path: "/cosmos.bank.v1beta1.Query/AllBalances",
			Data: k.cdc.MustMarshal(&q),
		},
	}

	bz, err := icqtypes.SerializeCosmosQuery(reqs)
	if err != nil {
		return 0, err
	}
	icqPacketData := icqtypes.InterchainQueryPacketData{
		Data: bz,
	}

	packet := channeltypes.NewPacket(
		icqPacketData.GetBytes(),
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		clienttypes.ZeroHeight(),
		timeoutTimestamp,
	)

	packetBytes := packet.GetData()
	if err != nil {
		return 0, sdkerrors.Wrapf(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: %w", err)
	}

	return k.channelKeeper.SendPacket(ctx, channelCap, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp, packetBytes)
}

// OnRecvIBCBalanceQueryPacketPacket processes packet reception
func (k Keeper) OnRecvIBCBalanceQueryPacketPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IBCBalanceQueryPacketPacketData) (packetAck types.IBCBalanceQueryPacketPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	return packetAck, nil
}

// OnAcknowledgementIBCBalanceQueryPacketPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIBCBalanceQueryPacketPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IBCBalanceQueryPacketPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		var ackData icqtypes.InterchainQueryPacketAck
		if err := icqtypes.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &ackData); err != nil {
			return sdkerrors.Wrap(err, "failed to unmarshal interchain query packet ack")
		}

		resps, err := icqtypes.DeserializeCosmosResponse(ackData.Data)
		if err != nil {
			return sdkerrors.Wrap(err, "failed to unmarshal interchain query packet ack to cosmos response")
		}

		if len(resps) < 1 {
			return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "no responses in interchain query packet ack")
		}

		var r banktypes.QueryAllBalancesResponse
		if err := k.cdc.Unmarshal(resps[0].Value, &r); err != nil {
			return sdkerrors.Wrapf(err, "failed to unmarshal interchain query response to type %T", dispatchedAck)
		}

		//TODO: I don't know how to send this balance back to the message server!
		//TODO: tried to save it in the keeper but it wasn't the solution!
		balanceAmount := r.Balances.AmountOf("uluna")
		fmt.Print("ICA balance: ", balanceAmount)
		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("the counter-party module does not implement the correct acknowledgment format")
	}
}

// OnTimeoutIBCBalanceQueryPacketPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIBCBalanceQueryPacketPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IBCBalanceQueryPacketPacketData) error {

	// TODO: packet timeout logic

	return nil
}
