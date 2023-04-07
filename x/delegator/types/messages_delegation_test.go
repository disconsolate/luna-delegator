package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
	"luna-delegator/testutil/sample"
)

func TestMsgCreateDelegation_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateDelegation
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateDelegation{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateDelegation{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateDelegation_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateDelegation
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateDelegation{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateDelegation{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteDelegation_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteDelegation
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteDelegation{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteDelegation{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
