package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"luna-delegator/x/delegator/types"
)

func (k msgServer) CreateDelegation(goCtx context.Context, msg *types.MsgCreateDelegation) (*types.MsgCreateDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegation = types.Delegation{
		Creator:   msg.Creator,
		Delegator: msg.Delegator,
		Amount:    msg.Amount,
	}

	id := k.AppendDelegation(
		ctx,
		delegation,
	)

	return &types.MsgCreateDelegationResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateDelegation(goCtx context.Context, msg *types.MsgUpdateDelegation) (*types.MsgUpdateDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var delegation = types.Delegation{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Delegator: msg.Delegator,
		Amount:    msg.Amount,
	}

	// Checks that the element exists
	val, found := k.GetDelegation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetDelegation(ctx, delegation)

	return &types.MsgUpdateDelegationResponse{}, nil
}

func (k msgServer) DeleteDelegation(goCtx context.Context, msg *types.MsgDeleteDelegation) (*types.MsgDeleteDelegationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetDelegation(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveDelegation(ctx, msg.Id)

	return &types.MsgDeleteDelegationResponse{}, nil
}
