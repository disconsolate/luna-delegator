package delegator_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "luna-delegator/testutil/keeper"
	"luna-delegator/testutil/nullify"
	"luna-delegator/x/delegator"
	"luna-delegator/x/delegator/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		SentDelegationList: []types.SentDelegation{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		SentDelegationCount: 2,
		NotSentDelegationList: []types.NotSentDelegation{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		NotSentDelegationCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DelegatorKeeper(t)
	delegator.InitGenesis(ctx, *k, genesisState)
	got := delegator.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.SentDelegationList, got.SentDelegationList)
	require.Equal(t, genesisState.SentDelegationCount, got.SentDelegationCount)
	require.ElementsMatch(t, genesisState.NotSentDelegationList, got.NotSentDelegationList)
	require.Equal(t, genesisState.NotSentDelegationCount, got.NotSentDelegationCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
