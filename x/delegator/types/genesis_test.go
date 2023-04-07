package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"luna-delegator/x/delegator/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				DelegationList: []types.Delegation{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				DelegationCount: 2,
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated sentDelegation",
			genState: &types.GenesisState{
				SentDelegationList: []types.SentDelegation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid sentDelegation count",
			genState: &types.GenesisState{
				SentDelegationList: []types.SentDelegation{
					{
						Id: 1,
					},
				},
				SentDelegationCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated notSentDelegation",
			genState: &types.GenesisState{
				NotSentDelegationList: []types.NotSentDelegation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid notSentDelegation count",
			genState: &types.GenesisState{
				NotSentDelegationList: []types.NotSentDelegation{
					{
						Id: 1,
					},
				},
				NotSentDelegationCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated delegation",
			genState: &types.GenesisState{
				DelegationList: []types.Delegation{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid delegation count",
			genState: &types.GenesisState{
				DelegationList: []types.Delegation{
					{
						Id: 1,
					},
				},
				DelegationCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
