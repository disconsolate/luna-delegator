package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v6/modules/core/24-host"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:                PortID,
		SentDelegationList:    []SentDelegation{},
		NotSentDelegationList: []NotSentDelegation{},
		DelegationList:        []Delegation{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in sentDelegation
	sentDelegationIdMap := make(map[uint64]bool)
	sentDelegationCount := gs.GetSentDelegationCount()
	for _, elem := range gs.SentDelegationList {
		if _, ok := sentDelegationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for sentDelegation")
		}
		if elem.Id >= sentDelegationCount {
			return fmt.Errorf("sentDelegation id should be lower or equal than the last id")
		}
		sentDelegationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in notSentDelegation
	notSentDelegationIdMap := make(map[uint64]bool)
	notSentDelegationCount := gs.GetNotSentDelegationCount()
	for _, elem := range gs.NotSentDelegationList {
		if _, ok := notSentDelegationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for notSentDelegation")
		}
		if elem.Id >= notSentDelegationCount {
			return fmt.Errorf("notSentDelegation id should be lower or equal than the last id")
		}
		notSentDelegationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in delegation
	delegationIdMap := make(map[uint64]bool)
	delegationCount := gs.GetDelegationCount()
	for _, elem := range gs.DelegationList {
		if _, ok := delegationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for delegation")
		}
		if elem.Id >= delegationCount {
			return fmt.Errorf("delegation id should be lower or equal than the last id")
		}
		delegationIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
