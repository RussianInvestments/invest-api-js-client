// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.19.1
// source: sandbox.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { MoneyValue } from "./common";
import {
  GetOperationsByCursorRequest,
  GetOperationsByCursorResponse,
  OperationsRequest,
  OperationsResponse,
  PortfolioRequest,
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
  WithdrawLimitsRequest,
  WithdrawLimitsResponse,
} from "./operations";
import {
  CancelOrderRequest,
  CancelOrderResponse,
  GetMaxLotsRequest,
  GetMaxLotsResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrderStateRequest,
  OrderState,
  PostOrderRequest,
  PostOrderResponse,
  ReplaceOrderRequest,
} from "./orders";
import { GetAccountsRequest, GetAccountsResponse } from "./users";

/** Запрос открытия счёта в песочнице. */
export interface OpenSandboxAccountRequest {
  /** Название счёта */
  name?: string | undefined;
}

/** Номер открытого счёта в песочнице. */
export interface OpenSandboxAccountResponse {
  /** Номер счёта */
  accountId: string;
}

/** Запрос закрытия счёта в песочнице. */
export interface CloseSandboxAccountRequest {
  /** Номер счёта */
  accountId: string;
}

/** Результат закрытия счёта в песочнице. */
export interface CloseSandboxAccountResponse {
}

/** Запрос пополнения счёта в песочнице. */
export interface SandboxPayInRequest {
  /** Номер счёта */
  accountId: string;
  /** Сумма пополнения счёта в рублях */
  amount: MoneyValue | undefined;
}

/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счёта */
  balance: MoneyValue | undefined;
}

function createBaseOpenSandboxAccountRequest(): OpenSandboxAccountRequest {
  return { name: undefined };
}

export const OpenSandboxAccountRequest: MessageFns<OpenSandboxAccountRequest> = {
  encode(message: OpenSandboxAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenSandboxAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OpenSandboxAccountRequest>): OpenSandboxAccountRequest {
    return OpenSandboxAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSandboxAccountRequest>): OpenSandboxAccountRequest {
    const message = createBaseOpenSandboxAccountRequest();
    message.name = object.name ?? undefined;
    return message;
  },
};

function createBaseOpenSandboxAccountResponse(): OpenSandboxAccountResponse {
  return { accountId: "" };
}

export const OpenSandboxAccountResponse: MessageFns<OpenSandboxAccountResponse> = {
  encode(message: OpenSandboxAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenSandboxAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<OpenSandboxAccountResponse>): OpenSandboxAccountResponse {
    return OpenSandboxAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenSandboxAccountResponse>): OpenSandboxAccountResponse {
    const message = createBaseOpenSandboxAccountResponse();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountRequest(): CloseSandboxAccountRequest {
  return { accountId: "" };
}

export const CloseSandboxAccountRequest: MessageFns<CloseSandboxAccountRequest> = {
  encode(message: CloseSandboxAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloseSandboxAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CloseSandboxAccountRequest>): CloseSandboxAccountRequest {
    return CloseSandboxAccountRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloseSandboxAccountRequest>): CloseSandboxAccountRequest {
    const message = createBaseCloseSandboxAccountRequest();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountResponse(): CloseSandboxAccountResponse {
  return {};
}

export const CloseSandboxAccountResponse: MessageFns<CloseSandboxAccountResponse> = {
  encode(_: CloseSandboxAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CloseSandboxAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CloseSandboxAccountResponse>): CloseSandboxAccountResponse {
    return CloseSandboxAccountResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<CloseSandboxAccountResponse>): CloseSandboxAccountResponse {
    const message = createBaseCloseSandboxAccountResponse();
    return message;
  },
};

function createBaseSandboxPayInRequest(): SandboxPayInRequest {
  return { accountId: "", amount: undefined };
}

export const SandboxPayInRequest: MessageFns<SandboxPayInRequest> = {
  encode(message: SandboxPayInRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SandboxPayInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.amount = MoneyValue.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SandboxPayInRequest>): SandboxPayInRequest {
    return SandboxPayInRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SandboxPayInRequest>): SandboxPayInRequest {
    const message = createBaseSandboxPayInRequest();
    message.accountId = object.accountId ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? MoneyValue.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseSandboxPayInResponse(): SandboxPayInResponse {
  return { balance: undefined };
}

export const SandboxPayInResponse: MessageFns<SandboxPayInResponse> = {
  encode(message: SandboxPayInResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.balance !== undefined) {
      MoneyValue.encode(message.balance, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SandboxPayInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.balance = MoneyValue.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SandboxPayInResponse>): SandboxPayInResponse {
    return SandboxPayInResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SandboxPayInResponse>): SandboxPayInResponse {
    const message = createBaseSandboxPayInResponse();
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? MoneyValue.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

/** Методы для работы с песочницей T-Invest API */
export type SandboxServiceDefinition = typeof SandboxServiceDefinition;
export const SandboxServiceDefinition = {
  name: "SandboxService",
  fullName: "tinkoff.public.invest.api.contract.v1.SandboxService",
  methods: {
    /** Зарегистрировать счёт. */
    openSandboxAccount: {
      name: "OpenSandboxAccount",
      requestType: OpenSandboxAccountRequest,
      requestStream: false,
      responseType: OpenSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Получить счета. */
    getSandboxAccounts: {
      name: "GetSandboxAccounts",
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /** Закрыть счёт. */
    closeSandboxAccount: {
      name: "CloseSandboxAccount",
      requestType: CloseSandboxAccountRequest,
      requestStream: false,
      responseType: CloseSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Выставить торговое поручение. */
    postSandboxOrder: {
      name: "PostSandboxOrder",
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Изменить выставленную заявку. */
    replaceSandboxOrder: {
      name: "ReplaceSandboxOrder",
      requestType: ReplaceOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Получить список активных заявок по счёту. */
    getSandboxOrders: {
      name: "GetSandboxOrders",
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Отменить торговое поручение. */
    cancelSandboxOrder: {
      name: "CancelSandboxOrder",
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
    getSandboxOrderState: {
      name: "GetSandboxOrderState",
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** Получить позиции по виртуальному счёту. */
    getSandboxPositions: {
      name: "GetSandboxPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить операции по номеру счёта. */
    getSandboxOperations: {
      name: "GetSandboxOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить операции по номеру счёта с пагинацией. */
    getSandboxOperationsByCursor: {
      name: "GetSandboxOperationsByCursor",
      requestType: GetOperationsByCursorRequest,
      requestStream: false,
      responseType: GetOperationsByCursorResponse,
      responseStream: false,
      options: {},
    },
    /** Получить портфель. */
    getSandboxPortfolio: {
      name: "GetSandboxPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** Пополнить счёт. */
    sandboxPayIn: {
      name: "SandboxPayIn",
      requestType: SandboxPayInRequest,
      requestStream: false,
      responseType: SandboxPayInResponse,
      responseStream: false,
      options: {},
    },
    /** Получить доступный остаток для вывода средств. */
    getSandboxWithdrawLimits: {
      name: "GetSandboxWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
    /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
    getSandboxMaxLots: {
      name: "GetSandboxMaxLots",
      requestType: GetMaxLotsRequest,
      requestStream: false,
      responseType: GetMaxLotsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SandboxServiceImplementation<CallContextExt = {}> {
  /** Зарегистрировать счёт. */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OpenSandboxAccountResponse>>;
  /** Получить счета. */
  getSandboxAccounts(
    request: GetAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetAccountsResponse>>;
  /** Закрыть счёт. */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CloseSandboxAccountResponse>>;
  /** Выставить торговое поручение. */
  postSandboxOrder(
    request: PostOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PostOrderResponse>>;
  /** Изменить выставленную заявку. */
  replaceSandboxOrder(
    request: ReplaceOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PostOrderResponse>>;
  /** Получить список активных заявок по счёту. */
  getSandboxOrders(
    request: GetOrdersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetOrdersResponse>>;
  /** Отменить торговое поручение. */
  cancelSandboxOrder(
    request: CancelOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CancelOrderResponse>>;
  /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(
    request: GetOrderStateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OrderState>>;
  /** Получить позиции по виртуальному счёту. */
  getSandboxPositions(
    request: PositionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PositionsResponse>>;
  /** Получить операции по номеру счёта. */
  getSandboxOperations(
    request: OperationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<OperationsResponse>>;
  /** Получить операции по номеру счёта с пагинацией. */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetOperationsByCursorResponse>>;
  /** Получить портфель. */
  getSandboxPortfolio(
    request: PortfolioRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PortfolioResponse>>;
  /** Пополнить счёт. */
  sandboxPayIn(
    request: SandboxPayInRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SandboxPayInResponse>>;
  /** Получить доступный остаток для вывода средств. */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<WithdrawLimitsResponse>>;
  /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
  getSandboxMaxLots(
    request: GetMaxLotsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetMaxLotsResponse>>;
}

export interface SandboxServiceClient<CallOptionsExt = {}> {
  /** Зарегистрировать счёт. */
  openSandboxAccount(
    request: DeepPartial<OpenSandboxAccountRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OpenSandboxAccountResponse>;
  /** Получить счета. */
  getSandboxAccounts(
    request: DeepPartial<GetAccountsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetAccountsResponse>;
  /** Закрыть счёт. */
  closeSandboxAccount(
    request: DeepPartial<CloseSandboxAccountRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CloseSandboxAccountResponse>;
  /** Выставить торговое поручение. */
  postSandboxOrder(
    request: DeepPartial<PostOrderRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PostOrderResponse>;
  /** Изменить выставленную заявку. */
  replaceSandboxOrder(
    request: DeepPartial<ReplaceOrderRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PostOrderResponse>;
  /** Получить список активных заявок по счёту. */
  getSandboxOrders(
    request: DeepPartial<GetOrdersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOrdersResponse>;
  /** Отменить торговое поручение. */
  cancelSandboxOrder(
    request: DeepPartial<CancelOrderRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CancelOrderResponse>;
  /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(
    request: DeepPartial<GetOrderStateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OrderState>;
  /** Получить позиции по виртуальному счёту. */
  getSandboxPositions(
    request: DeepPartial<PositionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PositionsResponse>;
  /** Получить операции по номеру счёта. */
  getSandboxOperations(
    request: DeepPartial<OperationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OperationsResponse>;
  /** Получить операции по номеру счёта с пагинацией. */
  getSandboxOperationsByCursor(
    request: DeepPartial<GetOperationsByCursorRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOperationsByCursorResponse>;
  /** Получить портфель. */
  getSandboxPortfolio(
    request: DeepPartial<PortfolioRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PortfolioResponse>;
  /** Пополнить счёт. */
  sandboxPayIn(
    request: DeepPartial<SandboxPayInRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SandboxPayInResponse>;
  /** Получить доступный остаток для вывода средств. */
  getSandboxWithdrawLimits(
    request: DeepPartial<WithdrawLimitsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<WithdrawLimitsResponse>;
  /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
  getSandboxMaxLots(
    request: DeepPartial<GetMaxLotsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMaxLotsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
