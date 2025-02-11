import { ExchangeOrderType, InstrumentIdType, InstrumentResponse, OrderDirection, OrderType, PortfolioPosition, PortfolioResponse, Quotation, StopOrderDirection, StopOrderExpirationType, StopOrderType, TTechApiClient } from '@tinkoff/invest-js-grpc-web'
import { Money, Currencies } from 'ts-money'
import type Long from 'long';

Currencies.RUB = {
    symbol: "₽",
    name: "Rub",
    symbol_native: "₽",
    decimal_digits: 2,
    rounding: 0,
    code: "RUB",
    name_plural: "Russian rubles"    
}


export function createApi(token: string) {
    const client = new TTechApiClient({ token: token, metadata : {'x-app-name':'node-ts-myapp'}})

    async function instrumentByUID(uuid: string) {
        return await client.instruments.getInstrumentBy({idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID, id: uuid})
    }

    return {
        allInstruments: async function () {
            const shares = await client.instruments.shares({})
            const bonds = await client.instruments.bonds({})
            const etfs = await client.instruments.etfs({})
            return {shares, bonds, etfs}
        },
        portfolios: async  () => {
            const result = [] as AccountPortfolio[];
            const accountsResponse = await client.users.getAccounts({})
            for (const account of accountsResponse.accounts) {
                const extPositions = [] as ExtPosition[]
                const portfoliosResp =  await client.operations.getPortfolio({accountId: account.id})

                console.log('portfolio response', portfoliosResp)
                
                for (const position of portfoliosResp.positions) {
                    const instrument = await instrumentByUID(position.instrumentUid)
                    console.log('position', position, instrument)
                    extPositions.push({accountId: account.id, accountName: account.name,position, instrument})
                }
               

                result.push({ portfolio: portfoliosResp, positions: extPositions})
                console.log('portfolio size', result.length)
            }
            return result
        },
        instrumentByUID: instrumentByUID,
        postOrder: async function (cmd: PostOrderCommand) {
            if (isLimitPostOrder(cmd)) {
                return await client.orders.postOrder({
                    orderId: cmd.orderId,
                    instrumentId: cmd.instrumentUid,
                    accountId: cmd.accountId,
                    quantity: cmd.quantitly.toNumber(),
                    direction: (cmd.direction == "buy")?OrderDirection.ORDER_DIRECTION_BUY:OrderDirection.ORDER_DIRECTION_SELL,
                    orderType: OrderType.ORDER_TYPE_LIMIT,
                    price: cmd.price,
                })
            } else {
                return await client.orders.postOrder({
                    orderId: cmd.orderId,
                    instrumentId: cmd.instrumentUid,
                    accountId: cmd.accountId,
                    direction: (cmd.direction == "buy")?OrderDirection.ORDER_DIRECTION_BUY:OrderDirection.ORDER_DIRECTION_SELL,
                    orderType: OrderType.ORDER_TYPE_MARKET,
                    quantity: cmd.quantitly.toNumber()
                })
            }
        },
        stopOrder: async function (cmd: StopOrderCommand) {

            return await client.stopOrders.postStopOrder({
                accountId: cmd.accountId,
                instrumentId: cmd.instrumentUid,
                quantity: cmd.quantitly.toNumber(),
                direction: (cmd.direction == "buy")? StopOrderDirection.STOP_ORDER_DIRECTION_BUY: StopOrderDirection.STOP_ORDER_DIRECTION_SELL,
                price: cmd.price,
                stopPrice: cmd.stopPrice,
                stopOrderType: (cmd.stopType == "takeProfit")? StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT: StopOrderType.STOP_ORDER_TYPE_STOP_LOSS,
                exchangeOrderType: ExchangeOrderType.EXCHANGE_ORDER_TYPE_LIMIT,
                expirationType: StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL
        
            })
        }
    }
}


export type AccountPortfolio = { portfolio: PortfolioResponse, positions:ExtPosition[]  }
export type ExtPosition = { accountId: string, accountName:string, position: PortfolioPosition, instrument: InstrumentResponse}



type OrderTypes = "limit" | "market"
type MoneyPrice = Quotation & Money
type OrderDirections = "buy" | "sell"
type PostOrderParams = {orderId: string, quantitly: Long, instrumentUid: string, direction: OrderDirections, accountId: string}
type LimitPostOrder = {price: MoneyPrice} & PostOrderParams;
type MarketPostOrder = PostOrderParams
export type PostOrderCommand = LimitPostOrder | MarketPostOrder

function isLimitPostOrder(cmd: PostOrderCommand): cmd is LimitPostOrder {
    return ("price" in (cmd as LimitPostOrder));
}



type StopOrderTypes = "takeProfit" | "stopLoss"
export type StopOrderCommand = { instrumentUid: string, accountId: string, direction : OrderDirections, quantitly: Long, price: MoneyPrice, stopPrice: MoneyPrice, stopType: StopOrderTypes, tradeOrderType: OrderTypes}

