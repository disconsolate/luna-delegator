package keeper

import (
	"context"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"luna-delegator/x/delegator/types"
)

func (k msgServer) IbcDelegateLunaMessage(goCtx context.Context, msg *types.MsgIbcDelegateLunaMessage) (*types.MsgIbcDelegateLunaMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	const delegationPreRequirementAmount = 10000000
	const delegationPreRequirementDenom = "uluna"

	//region ICQ the ICA
	//TODO: we need the following data (is present on packet class methods - TransmitIbcDelegationPacket - but not here
	sourcePort := ""
	sourceChannel := ""
	timeoutTimestamp := 0

	balance, err := k.SendIBCBalanceQueryPacket(ctx, types.NewMsgSendIBCBalanceQueryPacket(
		msg.GetCreator(),
		sourcePort,
		sourceChannel,
		uint64(timeoutTimestamp),
		msg.GetDestinationAccount()))

	if err != nil {
		return nil, err
	}
	fmt.Println("balance: ", balance)
	//endregion

	//region check the delegated amount
	//TODO: here we should get the `amount` and `denom` from `balance` in the previous step
	amount := 999999999999
	denom := "uluna"
	if amount >= delegationPreRequirementAmount && delegationPreRequirementDenom == denom {
		//region send the delegation packet
		//endregion
	}
	//endregion

	_ = ctx
	return &types.MsgIbcDelegateLunaMessageResponse{}, nil
}
