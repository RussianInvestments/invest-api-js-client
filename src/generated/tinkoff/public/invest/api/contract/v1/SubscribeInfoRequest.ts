// Original file: investAPI/src/docs/contracts/marketdata.proto

import type { SubscriptionAction as _tinkoff_public_invest_api_contract_v1_SubscriptionAction, SubscriptionAction__Output as _tinkoff_public_invest_api_contract_v1_SubscriptionAction__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/SubscriptionAction';
import type { InfoInstrument as _tinkoff_public_invest_api_contract_v1_InfoInstrument, InfoInstrument__Output as _tinkoff_public_invest_api_contract_v1_InfoInstrument__Output } from '../../../../../../tinkoff/public/invest/api/contract/v1/InfoInstrument';

export interface SubscribeInfoRequest {
  'subscriptionAction'?: (_tinkoff_public_invest_api_contract_v1_SubscriptionAction);
  'instruments'?: (_tinkoff_public_invest_api_contract_v1_InfoInstrument)[];
}

export interface SubscribeInfoRequest__Output {
  'subscriptionAction': (_tinkoff_public_invest_api_contract_v1_SubscriptionAction__Output);
  'instruments': (_tinkoff_public_invest_api_contract_v1_InfoInstrument__Output)[];
}
