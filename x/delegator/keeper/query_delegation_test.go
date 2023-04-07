package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "luna-delegator/testutil/keeper"
	"luna-delegator/testutil/nullify"
	"luna-delegator/x/delegator/types"
)

func TestDelegationQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDelegation(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetDelegationRequest
		response *types.QueryGetDelegationResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetDelegationRequest{Id: msgs[0].Id},
			response: &types.QueryGetDelegationResponse{Delegation: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetDelegationRequest{Id: msgs[1].Id},
			response: &types.QueryGetDelegationResponse{Delegation: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetDelegationRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Delegation(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestDelegationQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNDelegation(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllDelegationRequest {
		return &types.QueryAllDelegationRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.DelegationAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Delegation), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Delegation),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.DelegationAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Delegation), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Delegation),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.DelegationAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Delegation),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.DelegationAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
