package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	"luna-delegator/x/delegator/types"
)

func (k msgServer) SendIbcDelegation(goCtx context.Context, msg *types.MsgSendIbcDelegation) (*types.MsgSendIbcDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcDelegationPacketData

	packet.Delegator = msg.Delegator
	packet.Amount = msg.Amount

	// Transmit the packet
	_, err := k.TransmitIbcDelegationPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcDelegationResponse{}, nil
}
