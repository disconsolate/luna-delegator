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

func (k Keeper) NotSentDelegationAll(goCtx context.Context, req *types.QueryAllNotSentDelegationRequest) (*types.QueryAllNotSentDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var notSentDelegations []types.NotSentDelegation
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	notSentDelegationStore := prefix.NewStore(store, types.KeyPrefix(types.NotSentDelegationKey))

	pageRes, err := query.Paginate(notSentDelegationStore, req.Pagination, func(key []byte, value []byte) error {
		var notSentDelegation types.NotSentDelegation
		if err := k.cdc.Unmarshal(value, &notSentDelegation); err != nil {
			return err
		}

		notSentDelegations = append(notSentDelegations, notSentDelegation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNotSentDelegationResponse{NotSentDelegation: notSentDelegations, Pagination: pageRes}, nil
}

func (k Keeper) NotSentDelegation(goCtx context.Context, req *types.QueryGetNotSentDelegationRequest) (*types.QueryGetNotSentDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	notSentDelegation, found := k.GetNotSentDelegation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetNotSentDelegationResponse{NotSentDelegation: notSentDelegation}, nil
}
