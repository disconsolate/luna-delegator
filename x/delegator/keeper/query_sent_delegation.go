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

func (k Keeper) SentDelegationAll(goCtx context.Context, req *types.QueryAllSentDelegationRequest) (*types.QueryAllSentDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sentDelegations []types.SentDelegation
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	sentDelegationStore := prefix.NewStore(store, types.KeyPrefix(types.SentDelegationKey))

	pageRes, err := query.Paginate(sentDelegationStore, req.Pagination, func(key []byte, value []byte) error {
		var sentDelegation types.SentDelegation
		if err := k.cdc.Unmarshal(value, &sentDelegation); err != nil {
			return err
		}

		sentDelegations = append(sentDelegations, sentDelegation)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSentDelegationResponse{SentDelegation: sentDelegations, Pagination: pageRes}, nil
}

func (k Keeper) SentDelegation(goCtx context.Context, req *types.QueryGetSentDelegationRequest) (*types.QueryGetSentDelegationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	sentDelegation, found := k.GetSentDelegation(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetSentDelegationResponse{SentDelegation: sentDelegation}, nil
}
