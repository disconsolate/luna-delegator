package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendIbcDelegation = "send_ibc_delegation"

var _ sdk.Msg = &MsgSendIbcDelegation{}

func NewMsgSendIbcDelegation(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	delegator string,
	amount sdk.Coin,
) *MsgSendIbcDelegation {
	return &MsgSendIbcDelegation{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Delegator:        delegator,
		Amount:           amount,
	}
}

func (msg *MsgSendIbcDelegation) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcDelegation) Type() string {
	return TypeMsgSendIbcDelegation
}

func (msg *MsgSendIbcDelegation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendIbcDelegation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcDelegation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
