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

func createNNotSentDelegation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.NotSentDelegation {
	items := make([]types.NotSentDelegation, n)
	for i := range items {
		items[i].Id = keeper.AppendNotSentDelegation(ctx, items[i])
	}
	return items
}

func TestNotSentDelegationGet(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNNotSentDelegation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetNotSentDelegation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestNotSentDelegationRemove(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNNotSentDelegation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNotSentDelegation(ctx, item.Id)
		_, found := keeper.GetNotSentDelegation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestNotSentDelegationGetAll(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNNotSentDelegation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNotSentDelegation(ctx)),
	)
}

func TestNotSentDelegationCount(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNNotSentDelegation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetNotSentDelegationCount(ctx))
}
