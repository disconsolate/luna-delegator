/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "lunadelegator.delegator";

export interface DelegatorPacketData {
  noData: NoData | undefined;
  iBCBalanceQueryPacketPacket: IBCBalanceQueryPacketPacketData | undefined;
}

export interface NoData {
}

/** IbcDelegationPacketAck defines a struct for the packet acknowledgment */
export interface IbcDelegationPacketAck {
  validator: string;
}

/** IBCBalanceQueryPacketPacketData defines a struct for the packet payload */
export interface IBCBalanceQueryPacketPacketData {
  address: string;
}

/** IBCBalanceQueryPacketPacketAck defines a struct for the packet acknowledgment */
export interface IBCBalanceQueryPacketPacketAck {
}

function createBaseDelegatorPacketData(): DelegatorPacketData {
  return { noData: undefined, iBCBalanceQueryPacketPacket: undefined };
}

export const DelegatorPacketData = {
  encode(message: DelegatorPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.iBCBalanceQueryPacketPacket !== undefined) {
      IBCBalanceQueryPacketPacketData.encode(message.iBCBalanceQueryPacketPacket, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.iBCBalanceQueryPacketPacket = IBCBalanceQueryPacketPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorPacketData {
    return {
      noData: isSet(object.noData) ? NoData.fromJSON(object.noData) : undefined,
      iBCBalanceQueryPacketPacket: isSet(object.iBCBalanceQueryPacketPacket)
        ? IBCBalanceQueryPacketPacketData.fromJSON(object.iBCBalanceQueryPacketPacket)
        : undefined,
    };
  },

  toJSON(message: DelegatorPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined && (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.iBCBalanceQueryPacketPacket !== undefined
      && (obj.iBCBalanceQueryPacketPacket = message.iBCBalanceQueryPacketPacket
        ? IBCBalanceQueryPacketPacketData.toJSON(message.iBCBalanceQueryPacketPacket)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorPacketData>, I>>(object: I): DelegatorPacketData {
    const message = createBaseDelegatorPacketData();
    message.noData = (object.noData !== undefined && object.noData !== null)
      ? NoData.fromPartial(object.noData)
      : undefined;
    message.iBCBalanceQueryPacketPacket =
      (object.iBCBalanceQueryPacketPacket !== undefined && object.iBCBalanceQueryPacketPacket !== null)
        ? IBCBalanceQueryPacketPacketData.fromPartial(object.iBCBalanceQueryPacketPacket)
        : undefined;
    return message;
  },
};

function createBaseNoData(): NoData {
  return {};
}

export const NoData = {
  encode(_: NoData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoData();
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

  fromJSON(_: any): NoData {
    return {};
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NoData>, I>>(_: I): NoData {
    const message = createBaseNoData();
    return message;
  },
};

function createBaseIbcDelegationPacketAck(): IbcDelegationPacketAck {
  return { validator: "" };
}

export const IbcDelegationPacketAck = {
  encode(message: IbcDelegationPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IbcDelegationPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIbcDelegationPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcDelegationPacketAck {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: IbcDelegationPacketAck): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IbcDelegationPacketAck>, I>>(object: I): IbcDelegationPacketAck {
    const message = createBaseIbcDelegationPacketAck();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseIBCBalanceQueryPacketPacketData(): IBCBalanceQueryPacketPacketData {
  return { address: "" };
}

export const IBCBalanceQueryPacketPacketData = {
  encode(message: IBCBalanceQueryPacketPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCBalanceQueryPacketPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCBalanceQueryPacketPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IBCBalanceQueryPacketPacketData {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: IBCBalanceQueryPacketPacketData): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCBalanceQueryPacketPacketData>, I>>(
    object: I,
  ): IBCBalanceQueryPacketPacketData {
    const message = createBaseIBCBalanceQueryPacketPacketData();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseIBCBalanceQueryPacketPacketAck(): IBCBalanceQueryPacketPacketAck {
  return {};
}

export const IBCBalanceQueryPacketPacketAck = {
  encode(_: IBCBalanceQueryPacketPacketAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCBalanceQueryPacketPacketAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCBalanceQueryPacketPacketAck();
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

  fromJSON(_: any): IBCBalanceQueryPacketPacketAck {
    return {};
  },

  toJSON(_: IBCBalanceQueryPacketPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IBCBalanceQueryPacketPacketAck>, I>>(_: I): IBCBalanceQueryPacketPacketAck {
    const message = createBaseIBCBalanceQueryPacketPacketAck();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
