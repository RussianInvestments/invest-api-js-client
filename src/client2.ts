import { createChannel, createClientFactory, ChannelCredentials, Metadata } from 'nice-grpc';
import * as instruments from './compiled_contracts/instruments';
import * as orders from './compiled_contracts/orders';
import * as operations from './compiled_contracts/operations';
import * as marketdata from './compiled_contracts/marketdata';
import * as stoporders from './compiled_contracts/stoporders';
import * as users from './compiled_contracts/users';

interface TTechAPIClientOptions {
    token: string;
    url?: string;

    metadata?: Record<string, string>;
}



class TTechApiClient {

    instruments: instruments.InstrumentsServiceClient;
    ordersStream: orders.OrdersStreamServiceClient;
    orders: orders.OrdersServiceClient;
    operations: operations.OperationsServiceClient;
    operationsStream: operations.OperationsStreamServiceClient;
    marketdata: marketdata.MarketDataServiceClient;
    marketdataStream: marketdata.MarketDataStreamServiceClient;
    stopOrders: stoporders.StopOrdersServiceClient;
    users: users.UsersServiceClient;

    constructor(config: TTechAPIClientOptions) {
        var token = config.token;
        var url = config.url || 'https://invest-public-api.tinkoff.ru';

        const providedMetadata = config.metadata || {}

        var clientFactory = createClientFactory()
            .use((call, options) =>
                call.next(call.request, {
                    ...options,
                    metadata: Metadata(options.metadata).set(
                        'Authorization',
                        `Bearer ${token}`,
                    ),
                }),
            );

        const channel = createChannel(url, ChannelCredentials.createSsl());

        this.instruments = clientFactory.create(
            instruments.InstrumentsServiceDefinition,
            channel,
        );
        this.ordersStream = clientFactory.create(
            orders.OrdersStreamServiceDefinition,
            channel
        );
        this.orders = clientFactory.create(
            orders.OrdersServiceDefinition,
            channel
        );
        this.operations = clientFactory.create(
            operations.OperationsServiceDefinition,
            channel
        );
        this.operationsStream = clientFactory.create(
            operations.OperationsStreamServiceDefinition,
            channel
        );
        this.marketdata = clientFactory.create(
            marketdata.MarketDataServiceDefinition,
            channel
        );
        this.marketdataStream = clientFactory.create(
            marketdata.MarketDataStreamServiceDefinition,
            channel
        );
        this.stopOrders = clientFactory.create(
            stoporders.StopOrdersServiceDefinition,
            channel
        );
        this.users = clientFactory.create(
            users.UsersServiceDefinition,
            channel
        );

    }

}

export { TTechApiClient }
export { instruments, orders, operations, marketdata, stoporders, users }
export * as common from './compiled_contracts/common';
