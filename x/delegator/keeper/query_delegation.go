package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"luna-delegator/x/delegator/types"
)

func (k Keeper) DelegationAll(goCtx context.Context, req *types.QueryAllDelegationRequest) (*types.QueryAllDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var delegations []types.Delegation
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	delegationStore := prefix.NewStore(store, types.KeyPrefix(types.DelegationKey))

	pageRes, err := query.Paginate(delegationStore, req.Pagination, func(key []byte, value []byte) error {
		var delegation types.Delegation
		if err := k.cdc.Unmarshal(value, &delegation); err != nil {
			return err
		}

		delegations = append(delegations, delegation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDelegationResponse{Delegation: delegations, Pagination: pageRes}, nil
}

func (k Keeper) Delegation(goCtx context.Context, req *types.QueryGetDelegationRequest) (*types.QueryGetDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	delegation, found := k.GetDelegation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDelegationResponse{Delegation: delegation}, nil
}
