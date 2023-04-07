package keeper

import (
	"errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v6/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v6/modules/core/24-host"
	"luna-delegator/x/delegator/types"
)

// TransmitIbcDelegationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIbcDelegationPacket(
	ctx sdk.Context,
	packetData types.IbcDelegationPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) (uint64, error) {
	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return 0, sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return 0, sdkerrors.Wrapf(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: %w", err)
	}

	return k.channelKeeper.SendPacket(ctx, channelCap, sourcePort, sourceChannel, timeoutHeight, timeoutTimestamp, packetBytes)
}

// OnRecvIbcDelegationPacket processes packet reception
func (k Keeper) OnRecvIbcDelegationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcDelegationPacketData) (packetAck types.IbcDelegationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	return packetAck, nil
}

// OnAcknowledgementIbcDelegationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIbcDelegationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcDelegationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.IbcDelegationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		k.AppendSentDelegation(
			ctx,
			types.SentDelegation{
				Id:        0,
				Delegator: data.Delegator,
				Amount:    data.Amount,
				Validator: packetAck.Validator,
			},
		)

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("the counter-party module does not implement the correct acknowledgment format")
	}
}

// OnTimeoutIbcDelegationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIbcDelegationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcDelegationPacketData) error {

	// TODO: packet timeout logic
	k.AppendNotSentDelegation(
		ctx,
		types.NotSentDelegation{
			Id:        0,
			Delegator: data.Delegator,
			Amount:    data.Amount,
		},
	)

	return nil
}
