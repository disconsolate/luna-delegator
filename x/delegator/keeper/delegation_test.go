package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "luna-delegator/testutil/keeper"
	"luna-delegator/testutil/nullify"
	"luna-delegator/x/delegator/keeper"
	"luna-delegator/x/delegator/types"
)

func createNDelegation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Delegation {
	items := make([]types.Delegation, n)
	for i := range items {
		items[i].Id = keeper.AppendDelegation(ctx, items[i])
	}
	return items
}

func TestDelegationGet(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNDelegation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetDelegation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestDelegationRemove(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNDelegation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDelegation(ctx, item.Id)
		_, found := keeper.GetDelegation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestDelegationGetAll(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNDelegation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllDelegation(ctx)),
	)
}

func TestDelegationCount(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNDelegation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetDelegationCount(ctx))
}
