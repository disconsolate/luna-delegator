package delegator

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"luna-delegator/x/delegator/keeper"
	"luna-delegator/x/delegator/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the sentDelegation
	for _, elem := range genState.SentDelegationList {
		k.SetSentDelegation(ctx, elem)
	}

	// Set sentDelegation count
	k.SetSentDelegationCount(ctx, genState.SentDelegationCount)
	// Set all the notSentDelegation
	for _, elem := range genState.NotSentDelegationList {
		k.SetNotSentDelegation(ctx, elem)
	}

	// Set notSentDelegation count
	k.SetNotSentDelegationCount(ctx, genState.NotSentDelegationCount)
	// Set all the delegation
	for _, elem := range genState.DelegationList {
		k.SetDelegation(ctx, elem)
	}

	// Set delegation count
	k.SetDelegationCount(ctx, genState.DelegationCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.PortId = k.GetPort(ctx)
	genesis.SentDelegationList = k.GetAllSentDelegation(ctx)
	genesis.SentDelegationCount = k.GetSentDelegationCount(ctx)
	genesis.NotSentDelegationList = k.GetAllNotSentDelegation(ctx)
	genesis.NotSentDelegationCount = k.GetNotSentDelegationCount(ctx)
	genesis.DelegationList = k.GetAllDelegation(ctx)
	genesis.DelegationCount = k.GetDelegationCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
