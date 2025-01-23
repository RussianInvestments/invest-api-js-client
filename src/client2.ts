import { createChannel, createClientFactory, ChannelCredentials, Metadata } from 'nice-grpc';
import {
    InstrumentsServiceClient,
    InstrumentsServiceDefinition,
} from './compiled_contracts/instruments';
import {
    OrdersStreamServiceClient,
    OrdersStreamServiceDefinition,
    OrdersServiceClient,
    OrdersServiceDefinition
} from './compiled_contracts/orders';
import {
    OperationsServiceClient,
    OperationsServiceDefinition,
    OperationsStreamServiceClient,
    OperationsStreamServiceDefinition
} from './compiled_contracts/operations';
import {
    MarketDataServiceClient,
    MarketDataServiceDefinition,
    MarketDataStreamServiceClient,
    MarketDataStreamServiceDefinition
} from './compiled_contracts/marketdata';
import {
    StopOrdersServiceClient,
    StopOrdersServiceDefinition
} from './compiled_contracts/stoporders';
import {
    UsersServiceClient,
    UsersServiceDefinition
} from './compiled_contracts/users';

interface TTechAPIClientOptions {
    token: string;
    url?: string;

    metadata?: Record<string, string>;
}



class TTechApiClient {

    instruments: InstrumentsServiceClient;
    ordersStream: OrdersStreamServiceClient;
    orders: OrdersServiceClient;
    operations: OperationsServiceClient;
    operationsStream: OperationsStreamServiceClient;
    marketdata: MarketDataServiceClient;
    marketdataStream: MarketDataStreamServiceClient;
    stopOrders: StopOrdersServiceClient;
    users: UsersServiceClient;

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
            InstrumentsServiceDefinition,
            channel,
        );
        this.ordersStream = clientFactory.create(
            OrdersStreamServiceDefinition,
            channel
        );
        this.orders = clientFactory.create(
            OrdersServiceDefinition,
            channel
        );
        this.operations = clientFactory.create(
            OperationsServiceDefinition,
            channel
        );
        this.operationsStream = clientFactory.create(
            OperationsStreamServiceDefinition,
            channel
        );
        this.marketdata = clientFactory.create(
            MarketDataServiceDefinition,
            channel
        );
        this.marketdataStream = clientFactory.create(
            MarketDataStreamServiceDefinition,
            channel
        );
        this.stopOrders = clientFactory.create(
            StopOrdersServiceDefinition,
            channel
        );
        this.users = clientFactory.create(
            UsersServiceDefinition,
            channel
        );

    }

}

export { TTechApiClient }