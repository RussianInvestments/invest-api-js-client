import 'dotenv/config';
import { TTechApiClient } from '@tinkoff/invest-js';
import { InstrumentStatus } from '@tinkoff/invest-js/build/compiled_contracts/common.js'
import { Share } from '@tinkoff/invest-js/build/compiled_contracts/instruments.js'
import { MarketDataRequest, DeepPartial, SubscriptionAction, SubscribeCandlesRequest, SubscribeOrderBookRequest, SubscribeTradesRequest, SubscriptionInterval, CandleInstrument, OrderBookInstrument, TradeInstrument } from '@tinkoff/invest-js/build/compiled_contracts/marketdata.js'

const clientV2 = new TTechApiClient({
    token: process.env.TOKEN as string,
});

async function loadShares(): Promise<Share[]> {
    try {
        var sharesResponse = await clientV2.instruments.shares({ instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE });

        var shares = sharesResponse.instruments
            .filter(instrument => instrument.apiTradeAvailableFlag)
            .filter(instrument => instrument.buyAvailableFlag)
            .filter(instrument => instrument.sellAvailableFlag)
            .slice(0, 10);

        console.log('received shares print 10', shares)
        return shares;
    } catch (e: unknown) {
        throw e;
    }
}

async function connectMdStreams(shares: Share[]) {

    var promiseReject, promiseResolve;
    const endRequestsStream = new Promise((resolve, reject) => {
        promiseReject = reject;
        promiseResolve = resolve;
    });

    async function* createRequests(): AsyncIterable<DeepPartial<MarketDataRequest>> {
        yield MarketDataRequest.create({
            subscribeCandlesRequest: SubscribeCandlesRequest.create({
                subscriptionAction: SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => CandleInstrument.create({ instrumentId: share.uid, interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE })),
                waitingClose: true
            })
        });
        yield MarketDataRequest.create({
            subscribeOrderBookRequest: SubscribeOrderBookRequest.create({
                subscriptionAction: SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => OrderBookInstrument.create({ instrumentId: share.uid, depth: 10 }))
            })
        });
        yield MarketDataRequest.create({
            subscribeTradesRequest: SubscribeTradesRequest.create({
                subscriptionAction: SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => TradeInstrument.create({ instrumentId: share.uid }))
            })
        });
        await endRequestsStream;
    }

    for await (const message of clientV2.marketdataStream.marketDataStream(createRequests())) {
        console.info("stream message", message);
    }

}

loadShares()
    .then(connectMdStreams)
    .catch(console.error)
