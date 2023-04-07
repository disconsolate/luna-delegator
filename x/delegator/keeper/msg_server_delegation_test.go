package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"luna-delegator/x/delegator/types"
)

func TestDelegationMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateDelegation(ctx, &types.MsgCreateDelegation{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestDelegationMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateDelegation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateDelegation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateDelegation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateDelegation(ctx, &types.MsgCreateDelegation{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateDelegation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestDelegationMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteDelegation
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteDelegation{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteDelegation{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteDelegation{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateDelegation(ctx, &types.MsgCreateDelegation{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteDelegation(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
