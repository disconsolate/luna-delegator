package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateDelegation = "create_delegation"
	TypeMsgUpdateDelegation = "update_delegation"
	TypeMsgDeleteDelegation = "delete_delegation"
)

var _ sdk.Msg = &MsgCreateDelegation{}

func NewMsgCreateDelegation(creator string, delegator string, amount sdk.Coin) *MsgCreateDelegation {
	return &MsgCreateDelegation{
		Creator:   creator,
		Delegator: delegator,
		Amount:    amount,
	}
}

func (msg *MsgCreateDelegation) Route() string {
	return RouterKey
}

func (msg *MsgCreateDelegation) Type() string {
	return TypeMsgCreateDelegation
}

func (msg *MsgCreateDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateDelegation{}

func NewMsgUpdateDelegation(creator string, id uint64, delegator string, amount sdk.Coin) *MsgUpdateDelegation {
	return &MsgUpdateDelegation{
		Id:        id,
		Creator:   creator,
		Delegator: delegator,
		Amount:    amount,
	}
}

func (msg *MsgUpdateDelegation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDelegation) Type() string {
	return TypeMsgUpdateDelegation
}

func (msg *MsgUpdateDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteDelegation{}

func NewMsgDeleteDelegation(creator string, id uint64) *MsgDeleteDelegation {
	return &MsgDeleteDelegation{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteDelegation) Route() string {
	return RouterKey
}

func (msg *MsgDeleteDelegation) Type() string {
	return TypeMsgDeleteDelegation
}

func (msg *MsgDeleteDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
