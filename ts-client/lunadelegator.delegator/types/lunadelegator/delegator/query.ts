/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Delegation } from "./delegation";
import { NotSentDelegation } from "./not_sent_delegation";
import { Params } from "./params";
import { SentDelegation } from "./sent_delegation";

export const protobufPackage = "lunadelegator.delegator";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetSentDelegationRequest {
  id: number;
}

export interface QueryGetSentDelegationResponse {
  SentDelegation: SentDelegation | undefined;
}

export interface QueryAllSentDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSentDelegationResponse {
  SentDelegation: SentDelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNotSentDelegationRequest {
  id: number;
}

export interface QueryGetNotSentDelegationResponse {
  NotSentDelegation: NotSentDelegation | undefined;
}

export interface QueryAllNotSentDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNotSentDelegationResponse {
  NotSentDelegation: NotSentDelegation[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDelegationRequest {
  id: number;
}

export interface QueryGetDelegationResponse {
  Delegation: Delegation | undefined;
}

export interface QueryAllDelegationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDelegationResponse {
  Delegation: Delegation[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetSentDelegationRequest(): QueryGetSentDelegationRequest {
  return { id: 0 };
}

export const QueryGetSentDelegationRequest = {
  encode(message: QueryGetSentDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSentDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentDelegationRequest();
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

  fromJSON(object: any): QueryGetSentDelegationRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetSentDelegationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSentDelegationRequest>, I>>(
    object: I,
  ): QueryGetSentDelegationRequest {
    const message = createBaseQueryGetSentDelegationRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetSentDelegationResponse(): QueryGetSentDelegationResponse {
  return { SentDelegation: undefined };
}

export const QueryGetSentDelegationResponse = {
  encode(message: QueryGetSentDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SentDelegation !== undefined) {
      SentDelegation.encode(message.SentDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSentDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSentDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentDelegation = SentDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentDelegationResponse {
    return {
      SentDelegation: isSet(object.SentDelegation) ? SentDelegation.fromJSON(object.SentDelegation) : undefined,
    };
  },

  toJSON(message: QueryGetSentDelegationResponse): unknown {
    const obj: any = {};
    message.SentDelegation !== undefined
      && (obj.SentDelegation = message.SentDelegation ? SentDelegation.toJSON(message.SentDelegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSentDelegationResponse>, I>>(
    object: I,
  ): QueryGetSentDelegationResponse {
    const message = createBaseQueryGetSentDelegationResponse();
    message.SentDelegation = (object.SentDelegation !== undefined && object.SentDelegation !== null)
      ? SentDelegation.fromPartial(object.SentDelegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSentDelegationRequest(): QueryAllSentDelegationRequest {
  return { pagination: undefined };
}

export const QueryAllSentDelegationRequest = {
  encode(message: QueryAllSentDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSentDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentDelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllSentDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSentDelegationRequest>, I>>(
    object: I,
  ): QueryAllSentDelegationRequest {
    const message = createBaseQueryAllSentDelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllSentDelegationResponse(): QueryAllSentDelegationResponse {
  return { SentDelegation: [], pagination: undefined };
}

export const QueryAllSentDelegationResponse = {
  encode(message: QueryAllSentDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.SentDelegation) {
      SentDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSentDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSentDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentDelegation.push(SentDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentDelegationResponse {
    return {
      SentDelegation: Array.isArray(object?.SentDelegation)
        ? object.SentDelegation.map((e: any) => SentDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllSentDelegationResponse): unknown {
    const obj: any = {};
    if (message.SentDelegation) {
      obj.SentDelegation = message.SentDelegation.map((e) => e ? SentDelegation.toJSON(e) : undefined);
    } else {
      obj.SentDelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSentDelegationResponse>, I>>(
    object: I,
  ): QueryAllSentDelegationResponse {
    const message = createBaseQueryAllSentDelegationResponse();
    message.SentDelegation = object.SentDelegation?.map((e) => SentDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetNotSentDelegationRequest(): QueryGetNotSentDelegationRequest {
  return { id: 0 };
}

export const QueryGetNotSentDelegationRequest = {
  encode(message: QueryGetNotSentDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotSentDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotSentDelegationRequest();
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

  fromJSON(object: any): QueryGetNotSentDelegationRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetNotSentDelegationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNotSentDelegationRequest>, I>>(
    object: I,
  ): QueryGetNotSentDelegationRequest {
    const message = createBaseQueryGetNotSentDelegationRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetNotSentDelegationResponse(): QueryGetNotSentDelegationResponse {
  return { NotSentDelegation: undefined };
}

export const QueryGetNotSentDelegationResponse = {
  encode(message: QueryGetNotSentDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.NotSentDelegation !== undefined) {
      NotSentDelegation.encode(message.NotSentDelegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNotSentDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNotSentDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NotSentDelegation = NotSentDelegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNotSentDelegationResponse {
    return {
      NotSentDelegation: isSet(object.NotSentDelegation)
        ? NotSentDelegation.fromJSON(object.NotSentDelegation)
        : undefined,
    };
  },

  toJSON(message: QueryGetNotSentDelegationResponse): unknown {
    const obj: any = {};
    message.NotSentDelegation !== undefined && (obj.NotSentDelegation = message.NotSentDelegation
      ? NotSentDelegation.toJSON(message.NotSentDelegation)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNotSentDelegationResponse>, I>>(
    object: I,
  ): QueryGetNotSentDelegationResponse {
    const message = createBaseQueryGetNotSentDelegationResponse();
    message.NotSentDelegation = (object.NotSentDelegation !== undefined && object.NotSentDelegation !== null)
      ? NotSentDelegation.fromPartial(object.NotSentDelegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotSentDelegationRequest(): QueryAllNotSentDelegationRequest {
  return { pagination: undefined };
}

export const QueryAllNotSentDelegationRequest = {
  encode(message: QueryAllNotSentDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotSentDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotSentDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotSentDelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNotSentDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNotSentDelegationRequest>, I>>(
    object: I,
  ): QueryAllNotSentDelegationRequest {
    const message = createBaseQueryAllNotSentDelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNotSentDelegationResponse(): QueryAllNotSentDelegationResponse {
  return { NotSentDelegation: [], pagination: undefined };
}

export const QueryAllNotSentDelegationResponse = {
  encode(message: QueryAllNotSentDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.NotSentDelegation) {
      NotSentDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNotSentDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNotSentDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NotSentDelegation.push(NotSentDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNotSentDelegationResponse {
    return {
      NotSentDelegation: Array.isArray(object?.NotSentDelegation)
        ? object.NotSentDelegation.map((e: any) => NotSentDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNotSentDelegationResponse): unknown {
    const obj: any = {};
    if (message.NotSentDelegation) {
      obj.NotSentDelegation = message.NotSentDelegation.map((e) => e ? NotSentDelegation.toJSON(e) : undefined);
    } else {
      obj.NotSentDelegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNotSentDelegationResponse>, I>>(
    object: I,
  ): QueryAllNotSentDelegationResponse {
    const message = createBaseQueryAllNotSentDelegationResponse();
    message.NotSentDelegation = object.NotSentDelegation?.map((e) => NotSentDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDelegationRequest(): QueryGetDelegationRequest {
  return { id: 0 };
}

export const QueryGetDelegationRequest = {
  encode(message: QueryGetDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDelegationRequest();
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

  fromJSON(object: any): QueryGetDelegationRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetDelegationRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDelegationRequest>, I>>(object: I): QueryGetDelegationRequest {
    const message = createBaseQueryGetDelegationRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetDelegationResponse(): QueryGetDelegationResponse {
  return { Delegation: undefined };
}

export const QueryGetDelegationResponse = {
  encode(message: QueryGetDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Delegation !== undefined) {
      Delegation.encode(message.Delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Delegation = Delegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDelegationResponse {
    return { Delegation: isSet(object.Delegation) ? Delegation.fromJSON(object.Delegation) : undefined };
  },

  toJSON(message: QueryGetDelegationResponse): unknown {
    const obj: any = {};
    message.Delegation !== undefined
      && (obj.Delegation = message.Delegation ? Delegation.toJSON(message.Delegation) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDelegationResponse>, I>>(object: I): QueryGetDelegationResponse {
    const message = createBaseQueryGetDelegationResponse();
    message.Delegation = (object.Delegation !== undefined && object.Delegation !== null)
      ? Delegation.fromPartial(object.Delegation)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDelegationRequest(): QueryAllDelegationRequest {
  return { pagination: undefined };
}

export const QueryAllDelegationRequest = {
  encode(message: QueryAllDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllDelegationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDelegationRequest>, I>>(object: I): QueryAllDelegationRequest {
    const message = createBaseQueryAllDelegationRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDelegationResponse(): QueryAllDelegationResponse {
  return { Delegation: [], pagination: undefined };
}

export const QueryAllDelegationResponse = {
  encode(message: QueryAllDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Delegation) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Delegation.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDelegationResponse {
    return {
      Delegation: Array.isArray(object?.Delegation) ? object.Delegation.map((e: any) => Delegation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDelegationResponse): unknown {
    const obj: any = {};
    if (message.Delegation) {
      obj.Delegation = message.Delegation.map((e) => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.Delegation = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDelegationResponse>, I>>(object: I): QueryAllDelegationResponse {
    const message = createBaseQueryAllDelegationResponse();
    message.Delegation = object.Delegation?.map((e) => Delegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of SentDelegation items. */
  SentDelegation(request: QueryGetSentDelegationRequest): Promise<QueryGetSentDelegationResponse>;
  SentDelegationAll(request: QueryAllSentDelegationRequest): Promise<QueryAllSentDelegationResponse>;
  /** Queries a list of NotSentDelegation items. */
  NotSentDelegation(request: QueryGetNotSentDelegationRequest): Promise<QueryGetNotSentDelegationResponse>;
  NotSentDelegationAll(request: QueryAllNotSentDelegationRequest): Promise<QueryAllNotSentDelegationResponse>;
  /** Queries a list of Delegation items. */
  Delegation(request: QueryGetDelegationRequest): Promise<QueryGetDelegationResponse>;
  DelegationAll(request: QueryAllDelegationRequest): Promise<QueryAllDelegationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.SentDelegation = this.SentDelegation.bind(this);
    this.SentDelegationAll = this.SentDelegationAll.bind(this);
    this.NotSentDelegation = this.NotSentDelegation.bind(this);
    this.NotSentDelegationAll = this.NotSentDelegationAll.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.DelegationAll = this.DelegationAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  SentDelegation(request: QueryGetSentDelegationRequest): Promise<QueryGetSentDelegationResponse> {
    const data = QueryGetSentDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "SentDelegation", data);
    return promise.then((data) => QueryGetSentDelegationResponse.decode(new _m0.Reader(data)));
  }

  SentDelegationAll(request: QueryAllSentDelegationRequest): Promise<QueryAllSentDelegationResponse> {
    const data = QueryAllSentDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "SentDelegationAll", data);
    return promise.then((data) => QueryAllSentDelegationResponse.decode(new _m0.Reader(data)));
  }

  NotSentDelegation(request: QueryGetNotSentDelegationRequest): Promise<QueryGetNotSentDelegationResponse> {
    const data = QueryGetNotSentDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "NotSentDelegation", data);
    return promise.then((data) => QueryGetNotSentDelegationResponse.decode(new _m0.Reader(data)));
  }

  NotSentDelegationAll(request: QueryAllNotSentDelegationRequest): Promise<QueryAllNotSentDelegationResponse> {
    const data = QueryAllNotSentDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "NotSentDelegationAll", data);
    return promise.then((data) => QueryAllNotSentDelegationResponse.decode(new _m0.Reader(data)));
  }

  Delegation(request: QueryGetDelegationRequest): Promise<QueryGetDelegationResponse> {
    const data = QueryGetDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "Delegation", data);
    return promise.then((data) => QueryGetDelegationResponse.decode(new _m0.Reader(data)));
  }

  DelegationAll(request: QueryAllDelegationRequest): Promise<QueryAllDelegationResponse> {
    const data = QueryAllDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("lunadelegator.delegator.Query", "DelegationAll", data);
    return promise.then((data) => QueryAllDelegationResponse.decode(new _m0.Reader(data)));
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
