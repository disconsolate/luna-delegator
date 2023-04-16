package delegator

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"luna-delegator/testutil/sample"
	delegatorsimulation "luna-delegator/x/delegator/simulation"
	"luna-delegator/x/delegator/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = delegatorsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateDelegation = "op_weight_msg_delegation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateDelegation int = 100

	opWeightMsgUpdateDelegation = "op_weight_msg_delegation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateDelegation int = 100

	opWeightMsgDeleteDelegation = "op_weight_msg_delegation"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteDelegation int = 100

	opWeightMsgIbcDelegateLunaMessage = "op_weight_msg_ibc_delegate_luna_message"
	// TODO: Determine the simulation weight value
	defaultWeightMsgIbcDelegateLunaMessage int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	delegatorGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		DelegationList: []types.Delegation{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		DelegationCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&delegatorGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateDelegation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateDelegation, &weightMsgCreateDelegation, nil,
		func(_ *rand.Rand) {
			weightMsgCreateDelegation = defaultWeightMsgCreateDelegation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateDelegation,
		delegatorsimulation.SimulateMsgCreateDelegation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateDelegation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateDelegation, &weightMsgUpdateDelegation, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateDelegation = defaultWeightMsgUpdateDelegation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateDelegation,
		delegatorsimulation.SimulateMsgUpdateDelegation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteDelegation int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteDelegation, &weightMsgDeleteDelegation, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteDelegation = defaultWeightMsgDeleteDelegation
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteDelegation,
		delegatorsimulation.SimulateMsgDeleteDelegation(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgIbcDelegateLunaMessage int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgIbcDelegateLunaMessage, &weightMsgIbcDelegateLunaMessage, nil,
		func(_ *rand.Rand) {
			weightMsgIbcDelegateLunaMessage = defaultWeightMsgIbcDelegateLunaMessage
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgIbcDelegateLunaMessage,
		delegatorsimulation.SimulateMsgIbcDelegateLunaMessage(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
