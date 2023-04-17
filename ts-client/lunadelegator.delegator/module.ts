// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgUpdateDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgDeleteDelegation } from "./types/lunadelegator/delegator/tx";
import { MsgIbcDelegateLunaMessage } from "./types/lunadelegator/delegator/tx";
import { MsgSendIBCBalanceQueryPacket } from "./types/lunadelegator/delegator/tx";

import { Delegation as typeDelegation} from "./types"
import { NotSentDelegation as typeNotSentDelegation} from "./types"
import { DelegatorPacketData as typeDelegatorPacketData} from "./types"
import { NoData as typeNoData} from "./types"
import { IbcDelegationPacketAck as typeIbcDelegationPacketAck} from "./types"
import { IBCBalanceQueryPacketPacketData as typeIBCBalanceQueryPacketPacketData} from "./types"
import { IBCBalanceQueryPacketPacketAck as typeIBCBalanceQueryPacketPacketAck} from "./types"
import { Params as typeParams} from "./types"
import { SentDelegation as typeSentDelegation} from "./types"

export { MsgCreateDelegation, MsgUpdateDelegation, MsgDeleteDelegation, MsgIbcDelegateLunaMessage, MsgSendIBCBalanceQueryPacket };

type sendMsgCreateDelegationParams = {
  value: MsgCreateDelegation,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateDelegationParams = {
  value: MsgUpdateDelegation,
  fee?: StdFee,
  memo?: string
};

type sendMsgDeleteDelegationParams = {
  value: MsgDeleteDelegation,
  fee?: StdFee,
  memo?: string
};

type sendMsgIbcDelegateLunaMessageParams = {
  value: MsgIbcDelegateLunaMessage,
  fee?: StdFee,
  memo?: string
};

type sendMsgSendIBCBalanceQueryPacketParams = {
  value: MsgSendIBCBalanceQueryPacket,
  fee?: StdFee,
  memo?: string
};


type msgCreateDelegationParams = {
  value: MsgCreateDelegation,
};

type msgUpdateDelegationParams = {
  value: MsgUpdateDelegation,
};

type msgDeleteDelegationParams = {
  value: MsgDeleteDelegation,
};

type msgIbcDelegateLunaMessageParams = {
  value: MsgIbcDelegateLunaMessage,
};

type msgSendIBCBalanceQueryPacketParams = {
  value: MsgSendIBCBalanceQueryPacket,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateDelegation({ value, fee, memo }: sendMsgCreateDelegationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateDelegation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateDelegation({ value: MsgCreateDelegation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateDelegation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateDelegation({ value, fee, memo }: sendMsgUpdateDelegationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateDelegation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateDelegation({ value: MsgUpdateDelegation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateDelegation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDeleteDelegation({ value, fee, memo }: sendMsgDeleteDelegationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDeleteDelegation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDeleteDelegation({ value: MsgDeleteDelegation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDeleteDelegation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgIbcDelegateLunaMessage({ value, fee, memo }: sendMsgIbcDelegateLunaMessageParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgIbcDelegateLunaMessage: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgIbcDelegateLunaMessage({ value: MsgIbcDelegateLunaMessage.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgIbcDelegateLunaMessage: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgSendIBCBalanceQueryPacket({ value, fee, memo }: sendMsgSendIBCBalanceQueryPacketParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgSendIBCBalanceQueryPacket: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgSendIBCBalanceQueryPacket({ value: MsgSendIBCBalanceQueryPacket.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgSendIBCBalanceQueryPacket: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateDelegation({ value }: msgCreateDelegationParams): EncodeObject {
			try {
				return { typeUrl: "/lunadelegator.delegator.MsgCreateDelegation", value: MsgCreateDelegation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateDelegation: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateDelegation({ value }: msgUpdateDelegationParams): EncodeObject {
			try {
				return { typeUrl: "/lunadelegator.delegator.MsgUpdateDelegation", value: MsgUpdateDelegation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateDelegation: Could not create message: ' + e.message)
			}
		},
		
		msgDeleteDelegation({ value }: msgDeleteDelegationParams): EncodeObject {
			try {
				return { typeUrl: "/lunadelegator.delegator.MsgDeleteDelegation", value: MsgDeleteDelegation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDeleteDelegation: Could not create message: ' + e.message)
			}
		},
		
		msgIbcDelegateLunaMessage({ value }: msgIbcDelegateLunaMessageParams): EncodeObject {
			try {
				return { typeUrl: "/lunadelegator.delegator.MsgIbcDelegateLunaMessage", value: MsgIbcDelegateLunaMessage.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgIbcDelegateLunaMessage: Could not create message: ' + e.message)
			}
		},
		
		msgSendIBCBalanceQueryPacket({ value }: msgSendIBCBalanceQueryPacketParams): EncodeObject {
			try {
				return { typeUrl: "/lunadelegator.delegator.MsgSendIBCBalanceQueryPacket", value: MsgSendIBCBalanceQueryPacket.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgSendIBCBalanceQueryPacket: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Delegation: getStructure(typeDelegation.fromPartial({})),
						NotSentDelegation: getStructure(typeNotSentDelegation.fromPartial({})),
						DelegatorPacketData: getStructure(typeDelegatorPacketData.fromPartial({})),
						NoData: getStructure(typeNoData.fromPartial({})),
						IbcDelegationPacketAck: getStructure(typeIbcDelegationPacketAck.fromPartial({})),
						IBCBalanceQueryPacketPacketData: getStructure(typeIBCBalanceQueryPacketPacketData.fromPartial({})),
						IBCBalanceQueryPacketPacketAck: getStructure(typeIBCBalanceQueryPacketPacketAck.fromPartial({})),
						Params: getStructure(typeParams.fromPartial({})),
						SentDelegation: getStructure(typeSentDelegation.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			LunadelegatorDelegator: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;