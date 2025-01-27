import 'dotenv/config';
import { TTechApiClient, md, instruments, common } from '@tinkoff/invest-js';

const clientV2 = new TTechApiClient({
    token: process.env.TOKEN as string,
});

async function loadShares(): Promise<instruments.Share[]> {
    try {
        var sharesResponse = await clientV2.instruments.shares({ instrumentStatus: common.InstrumentStatus.INSTRUMENT_STATUS_BASE });

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

async function connectMdStreams(shares: instruments.Share[]) {

    var promiseReject, promiseResolve;
    const endRequestsStream = new Promise((resolve, reject) => {
        promiseReject = reject;
        promiseResolve = resolve;
    });

    async function* createRequests(): AsyncIterable<md.DeepPartial<md.MarketDataRequest>> {
        yield md.MarketDataRequest.create({
            subscribeCandlesRequest: md.SubscribeCandlesRequest.create({
                subscriptionAction: md.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => md.CandleInstrument.create({ instrumentId: share.uid, interval: md.SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE })),
                waitingClose: true
            })
        });
        yield md.MarketDataRequest.create({
            subscribeOrderBookRequest: md.SubscribeOrderBookRequest.create({
                subscriptionAction: md.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => md.OrderBookInstrument.create({ instrumentId: share.uid, depth: 10 }))
            })
        });
        yield md.MarketDataRequest.create({
            subscribeTradesRequest: md.SubscribeTradesRequest.create({
                subscriptionAction: md.SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
                instruments: shares.map(share => md.TradeInstrument.create({ instrumentId: share.uid }))
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
