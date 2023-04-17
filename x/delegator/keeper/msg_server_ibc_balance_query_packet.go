package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v6/modules/core/02-client/types"
	"luna-delegator/x/delegator/types"
)

func (k msgServer) SendIBCBalanceQueryPacket(goCtx context.Context, msg *types.MsgSendIBCBalanceQueryPacket) (*types.MsgSendIBCBalanceQueryPacketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IBCBalanceQueryPacketPacketData

	packet.Address = msg.Address

	// Transmit the packet
	_, err := k.TransmitIBCBalanceQueryPacketPacket(
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

	return &types.MsgSendIBCBalanceQueryPacketResponse{}, nil
}
