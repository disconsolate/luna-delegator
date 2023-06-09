/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Delegation } from "./delegation";
import { NotSentDelegation } from "./not_sent_delegation";
import { Params } from "./params";
import { SentDelegation } from "./sent_delegation";

export const protobufPackage = "lunadelegator.delegator";

/** GenesisState defines the delegator module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  portId: string;
  sentDelegationList: SentDelegation[];
  sentDelegationCount: number;
  notSentDelegationList: NotSentDelegation[];
  notSentDelegationCount: number;
  delegationList: Delegation[];
  delegationCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    portId: "",
    sentDelegationList: [],
    sentDelegationCount: 0,
    notSentDelegationList: [],
    notSentDelegationCount: 0,
    delegationList: [],
    delegationCount: 0,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    for (const v of message.sentDelegationList) {
      SentDelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sentDelegationCount !== 0) {
      writer.uint32(32).uint64(message.sentDelegationCount);
    }
    for (const v of message.notSentDelegationList) {
      NotSentDelegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.notSentDelegationCount !== 0) {
      writer.uint32(48).uint64(message.notSentDelegationCount);
    }
    for (const v of message.delegationList) {
      Delegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.delegationCount !== 0) {
      writer.uint32(64).uint64(message.delegationCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.sentDelegationList.push(SentDelegation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sentDelegationCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.notSentDelegationList.push(NotSentDelegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.notSentDelegationCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.delegationList.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.delegationCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      portId: isSet(object.portId) ? String(object.portId) : "",
      sentDelegationList: Array.isArray(object?.sentDelegationList)
        ? object.sentDelegationList.map((e: any) => SentDelegation.fromJSON(e))
        : [],
      sentDelegationCount: isSet(object.sentDelegationCount) ? Number(object.sentDelegationCount) : 0,
      notSentDelegationList: Array.isArray(object?.notSentDelegationList)
        ? object.notSentDelegationList.map((e: any) => NotSentDelegation.fromJSON(e))
        : [],
      notSentDelegationCount: isSet(object.notSentDelegationCount) ? Number(object.notSentDelegationCount) : 0,
      delegationList: Array.isArray(object?.delegationList)
        ? object.delegationList.map((e: any) => Delegation.fromJSON(e))
        : [],
      delegationCount: isSet(object.delegationCount) ? Number(object.delegationCount) : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    if (message.sentDelegationList) {
      obj.sentDelegationList = message.sentDelegationList.map((e) => e ? SentDelegation.toJSON(e) : undefined);
    } else {
      obj.sentDelegationList = [];
    }
    message.sentDelegationCount !== undefined && (obj.sentDelegationCount = Math.round(message.sentDelegationCount));
    if (message.notSentDelegationList) {
      obj.notSentDelegationList = message.notSentDelegationList.map((e) => e ? NotSentDelegation.toJSON(e) : undefined);
    } else {
      obj.notSentDelegationList = [];
    }
    message.notSentDelegationCount !== undefined
      && (obj.notSentDelegationCount = Math.round(message.notSentDelegationCount));
    if (message.delegationList) {
      obj.delegationList = message.delegationList.map((e) => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegationList = [];
    }
    message.delegationCount !== undefined && (obj.delegationCount = Math.round(message.delegationCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.portId = object.portId ?? "";
    message.sentDelegationList = object.sentDelegationList?.map((e) => SentDelegation.fromPartial(e)) || [];
    message.sentDelegationCount = object.sentDelegationCount ?? 0;
    message.notSentDelegationList = object.notSentDelegationList?.map((e) => NotSentDelegation.fromPartial(e)) || [];
    message.notSentDelegationCount = object.notSentDelegationCount ?? 0;
    message.delegationList = object.delegationList?.map((e) => Delegation.fromPartial(e)) || [];
    message.delegationCount = object.delegationCount ?? 0;
    return message;
  },
};

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
