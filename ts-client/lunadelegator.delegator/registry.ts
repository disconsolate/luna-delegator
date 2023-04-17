import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgUpdateDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgDeleteDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgIbcDelegateLunaMessage } from "./types/lunadelegator/delegator/tx";
import { MsgSendIBCBalanceQueryPacket } from "./types/lunadelegator/delegator/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/lunadelegator.delegator.MsgCreateDelegation", MsgCreateDelegation],
    ["/lunadelegator.delegator.MsgUpdateDelegation", MsgUpdateDelegation],
    ["/lunadelegator.delegator.MsgDeleteDelegation", MsgDeleteDelegation],
    ["/lunadelegator.delegator.MsgIbcDelegateLunaMessage", MsgIbcDelegateLunaMessage],
    ["/lunadelegator.delegator.MsgSendIBCBalanceQueryPacket", MsgSendIBCBalanceQueryPacket],
    
];

export { msgTypes }