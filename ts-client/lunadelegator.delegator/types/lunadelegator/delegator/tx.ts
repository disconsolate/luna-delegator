/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "lunadelegator.delegator";

export interface MsgCreateDelegation {
  creator: string;
  delegator: string;
  amount: Coin | undefined;
}

export interface MsgCreateDelegationResponse {
  id: number;
}

export interface MsgUpdateDelegation {
  creator: string;
  id: number;
  delegator: string;
  amount: Coin | undefined;
}

export interface MsgUpdateDelegationResponse {
}

export interface MsgDeleteDelegation {
  creator: string;
  id: number;
}

export interface MsgDeleteDelegationResponse {
}

export interface MsgIbcDelegateLunaMessage {
  creator: string;
  destinationChain: string;
  destinationAccount: string;
  amount: Coin | undefined;
}

export interface MsgIbcDelegateLunaMessageResponse {
  id: number;
}

export interface MsgSendIBCBalanceQueryPacket {
  address: string;
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
}

export interface MsgSendIBCBalanceQueryPacketResponse {
}

function createBaseMsgCreateDelegation(): MsgCreateDelegation {
  return { creator: "", delegator: "", amount: undefined };
}

export const MsgCreateDelegation = {
  encode(message: MsgCreateDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.delegator !== "") {
      writer.uint32(18).string(message.delegator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.delegator = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgCreateDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDelegation>, I>>(object: I): MsgCreateDelegation {
    const message = createBaseMsgCreateDelegation();
    message.creator = object.creator ?? "";
    message.delegator = object.delegator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateDelegationResponse(): MsgCreateDelegationResponse {
  return { id: 0 };
}

export const MsgCreateDelegationResponse = {
  encode(message: MsgCreateDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDelegationResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateDelegationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDelegationResponse>, I>>(object: I): MsgCreateDelegationResponse {
    const message = createBaseMsgCreateDelegationResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateDelegation(): MsgUpdateDelegation {
  return { creator: "", id: 0, delegator: "", amount: undefined };
}

export const MsgUpdateDelegation = {
  encode(message: MsgUpdateDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegator = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDelegation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgUpdateDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDelegation>, I>>(object: I): MsgUpdateDelegation {
    const message = createBaseMsgUpdateDelegation();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.delegator = object.delegator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateDelegationResponse(): MsgUpdateDelegationResponse {
  return {};
}

export const MsgUpdateDelegationResponse = {
  encode(_: MsgUpdateDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateDelegationResponse {
    return {};
  },

  toJSON(_: MsgUpdateDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDelegationResponse>, I>>(_: I): MsgUpdateDelegationResponse {
    const message = createBaseMsgUpdateDelegationResponse();
    return message;
  },
};

function createBaseMsgDeleteDelegation(): MsgDeleteDelegation {
  return { creator: "", id: 0 };
}

export const MsgDeleteDelegation = {
  encode(message: MsgDeleteDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteDelegation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteDelegation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDelegation>, I>>(object: I): MsgDeleteDelegation {
    const message = createBaseMsgDeleteDelegation();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteDelegationResponse(): MsgDeleteDelegationResponse {
  return {};
}

export const MsgDeleteDelegationResponse = {
  encode(_: MsgDeleteDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteDelegationResponse {
    return {};
  },

  toJSON(_: MsgDeleteDelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteDelegationResponse>, I>>(_: I): MsgDeleteDelegationResponse {
    const message = createBaseMsgDeleteDelegationResponse();
    return message;
  },
};

function createBaseMsgIbcDelegateLunaMessage(): MsgIbcDelegateLunaMessage {
  return { creator: "", destinationChain: "", destinationAccount: "", amount: undefined };
}

export const MsgIbcDelegateLunaMessage = {
  encode(message: MsgIbcDelegateLunaMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destinationChain !== "") {
      writer.uint32(18).string(message.destinationChain);
    }
    if (message.destinationAccount !== "") {
      writer.uint32(26).string(message.destinationAccount);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIbcDelegateLunaMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIbcDelegateLunaMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destinationChain = reader.string();
          break;
        case 3:
          message.destinationAccount = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIbcDelegateLunaMessage {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
      destinationAccount: isSet(object.destinationAccount) ? String(object.destinationAccount) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgIbcDelegateLunaMessage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destinationChain !== undefined && (obj.destinationChain = message.destinationChain);
    message.destinationAccount !== undefined && (obj.destinationAccount = message.destinationAccount);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIbcDelegateLunaMessage>, I>>(object: I): MsgIbcDelegateLunaMessage {
    const message = createBaseMsgIbcDelegateLunaMessage();
    message.creator = object.creator ?? "";
    message.destinationChain = object.destinationChain ?? "";
    message.destinationAccount = object.destinationAccount ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgIbcDelegateLunaMessageResponse(): MsgIbcDelegateLunaMessageResponse {
  return { id: 0 };
}

export const MsgIbcDelegateLunaMessageResponse = {
  encode(message: MsgIbcDelegateLunaMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIbcDelegateLunaMessageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIbcDelegateLunaMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIbcDelegateLunaMessageResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgIbcDelegateLunaMessageResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIbcDelegateLunaMessageResponse>, I>>(
    object: I,
  ): MsgIbcDelegateLunaMessageResponse {
    const message = createBaseMsgIbcDelegateLunaMessageResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSendIBCBalanceQueryPacket(): MsgSendIBCBalanceQueryPacket {
  return { address: "", creator: "", port: "", channelID: "", timeoutTimestamp: 0 };
}

export const MsgSendIBCBalanceQueryPacket = {
  encode(message: MsgSendIBCBalanceQueryPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIBCBalanceQueryPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIBCBalanceQueryPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.address = reader.string();
          break;
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIBCBalanceQueryPacket {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      port: isSet(object.port) ? String(object.port) : "",
      channelID: isSet(object.channelID) ? String(object.channelID) : "",
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Number(object.timeoutTimestamp) : 0,
    };
  },

  toJSON(message: MsgSendIBCBalanceQueryPacket): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = Math.round(message.timeoutTimestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIBCBalanceQueryPacket>, I>>(object: I): MsgSendIBCBalanceQueryPacket {
    const message = createBaseMsgSendIBCBalanceQueryPacket();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.port = object.port ?? "";
    message.channelID = object.channelID ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp ?? 0;
    return message;
  },
};

function createBaseMsgSendIBCBalanceQueryPacketResponse(): MsgSendIBCBalanceQueryPacketResponse {
  return {};
}

export const MsgSendIBCBalanceQueryPacketResponse = {
  encode(_: MsgSendIBCBalanceQueryPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendIBCBalanceQueryPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendIBCBalanceQueryPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendIBCBalanceQueryPacketResponse {
    return {};
  },

  toJSON(_: MsgSendIBCBalanceQueryPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendIBCBalanceQueryPacketResponse>, I>>(
    _: I,
  ): MsgSendIBCBalanceQueryPacketResponse {
    const message = createBaseMsgSendIBCBalanceQueryPacketResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDelegation(request: MsgCreateDelegation): Promise<MsgCreateDelegationResponse>;
  UpdateDelegation(request: MsgUpdateDelegation): Promise<MsgUpdateDelegationResponse>;
  DeleteDelegation(request: MsgDeleteDelegation): Promise<MsgDeleteDelegationResponse>;
  IbcDelegateLunaMessage(request: MsgIbcDelegateLunaMessage): Promise<MsgIbcDelegateLunaMessageResponse>;
  SendIBCBalanceQueryPacket(request: MsgSendIBCBalanceQueryPacket): Promise<MsgSendIBCBalanceQueryPacketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDelegation = this.CreateDelegation.bind(this);
    this.UpdateDelegation = this.UpdateDelegation.bind(this);
    this.DeleteDelegation = this.DeleteDelegation.bind(this);
    this.IbcDelegateLunaMessage = this.IbcDelegateLunaMessage.bind(this);
    this.SendIBCBalanceQueryPacket = this.SendIBCBalanceQueryPacket.bind(this);
  }
  CreateDelegation(request: MsgCreateDelegation): Promise<MsgCreateDelegationResponse> {
    const data = MsgCreateDelegation.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Msg", "CreateDelegation", data);
    return promise.then((data) => MsgCreateDelegationResponse.decode(new _m0.Reader(data)));
  }

  UpdateDelegation(request: MsgUpdateDelegation): Promise<MsgUpdateDelegationResponse> {
    const data = MsgUpdateDelegation.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Msg", "UpdateDelegation", data);
    return promise.then((data) => MsgUpdateDelegationResponse.decode(new _m0.Reader(data)));
  }

  DeleteDelegation(request: MsgDeleteDelegation): Promise<MsgDeleteDelegationResponse> {
    const data = MsgDeleteDelegation.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Msg", "DeleteDelegation", data);
    return promise.then((data) => MsgDeleteDelegationResponse.decode(new _m0.Reader(data)));
  }

  IbcDelegateLunaMessage(request: MsgIbcDelegateLunaMessage): Promise<MsgIbcDelegateLunaMessageResponse> {
    const data = MsgIbcDelegateLunaMessage.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Msg", "IbcDelegateLunaMessage", data);
    return promise.then((data) => MsgIbcDelegateLunaMessageResponse.decode(new _m0.Reader(data)));
  }

  SendIBCBalanceQueryPacket(request: MsgSendIBCBalanceQueryPacket): Promise<MsgSendIBCBalanceQueryPacketResponse> {
    const data = MsgSendIBCBalanceQueryPacket.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Msg", "SendIBCBalanceQueryPacket", data);
    return promise.then((data) => MsgSendIBCBalanceQueryPacketResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
