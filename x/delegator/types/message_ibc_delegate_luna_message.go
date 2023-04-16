package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgIbcDelegateLunaMessage = "ibc_delegate_luna_message"

var _ sdk.Msg = &MsgIbcDelegateLunaMessage{}

func NewMsgIbcDelegateLunaMessage(creator string, destinationChain string, destinationAccount string, amount sdk.Coin) *MsgIbcDelegateLunaMessage {
	return &MsgIbcDelegateLunaMessage{
		Creator:            creator,
		DestinationChain:   destinationChain,
		DestinationAccount: destinationAccount,
		Amount:             amount,
	}
}

func (msg *MsgIbcDelegateLunaMessage) Route() string {
	return RouterKey
}

func (msg *MsgIbcDelegateLunaMessage) Type() string {
	return TypeMsgIbcDelegateLunaMessage
}

func (msg *MsgIbcDelegateLunaMessage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgIbcDelegateLunaMessage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIbcDelegateLunaMessage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
