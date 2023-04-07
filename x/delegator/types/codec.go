package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateDelegation{}, "delegator/CreateDelegation", nil)
	cdc.RegisterConcrete(&MsgUpdateDelegation{}, "delegator/UpdateDelegation", nil)
	cdc.RegisterConcrete(&MsgDeleteDelegation{}, "delegator/DeleteDelegation", nil)
	cdc.RegisterConcrete(&MsgSendIbcDelegation{}, "delegator/SendIbcDelegation", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDelegation{},
		&MsgUpdateDelegation{},
		&MsgDeleteDelegation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcDelegation{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
