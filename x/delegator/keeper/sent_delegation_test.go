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

func createNSentDelegation(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SentDelegation {
	items := make([]types.SentDelegation, n)
	for i := range items {
		items[i].Id = keeper.AppendSentDelegation(ctx, items[i])
	}
	return items
}

func TestSentDelegationGet(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNSentDelegation(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetSentDelegation(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestSentDelegationRemove(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNSentDelegation(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSentDelegation(ctx, item.Id)
		_, found := keeper.GetSentDelegation(ctx, item.Id)
		require.False(t, found)
	}
}

func TestSentDelegationGetAll(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNSentDelegation(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllSentDelegation(ctx)),
	)
}

func TestSentDelegationCount(t *testing.T) {
	keeper, ctx := keepertest.DelegatorKeeper(t)
	items := createNSentDelegation(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetSentDelegationCount(ctx))
}
