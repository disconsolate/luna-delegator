package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendIBCBalanceQueryPacket = "send_ibc_balance_query_packet"

var _ sdk.Msg = &MsgSendIBCBalanceQueryPacket{}

func NewMsgSendIBCBalanceQueryPacket(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	address string,
) *MsgSendIBCBalanceQueryPacket {
	return &MsgSendIBCBalanceQueryPacket{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Address:          address,
	}
}

func (msg *MsgSendIBCBalanceQueryPacket) Route() string {
	return RouterKey
}

func (msg *MsgSendIBCBalanceQueryPacket) Type() string {
	return TypeMsgSendIBCBalanceQueryPacket
}

func (msg *MsgSendIBCBalanceQueryPacket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendIBCBalanceQueryPacket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIBCBalanceQueryPacket) ValidateBasic() error {
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
