// Original file: investAPI/src/docs/contracts/orders.proto

import type { Quotation as _tinkoff_public_invest_api_contract_v1_Quotation, Quotation__Output as _tinkoff_public_invest_api_contract_v1_Quotation__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/Quotation';
import type { PriceType as _tinkoff_public_invest_api_contract_v1_PriceType, PriceType__Output as _tinkoff_public_invest_api_contract_v1_PriceType__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/PriceType';
import type { Long } from '@grpc/proto-loader';

export interface ReplaceOrderRequest {
  'accountId'?: (string);
  'orderId'?: (string);
  'idempotencyKey'?: (string);
  'quantity'?: (number | string | Long);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation | null);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType);
  '_price'?: "price";
  '_priceType'?: "priceType";
}

export interface ReplaceOrderRequest__Output {
  'accountId': (string);
  'orderId': (string);
  'idempotencyKey': (string);
  'quantity': (string);
  'price'?: (_tinkoff_public_invest_api_contract_v1_Quotation__Output | null);
  'priceType'?: (_tinkoff_public_invest_api_contract_v1_PriceType__Output);
  '_price': "price";
  '_priceType': "priceType";
}
