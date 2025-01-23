import {createChannel, createClientFactory, ChannelCredentials, Metadata} from 'nice-grpc';
import {
    InstrumentIdType,
    InstrumentsServiceClient,
    InstrumentsServiceDefinition,
  } from '../../compiled_proto/instruments';

  const token = 't.....';

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

  const channel = createChannel('https://invest-public-api.tinkoff.ru',ChannelCredentials.createSsl());



const instrumentsClient: InstrumentsServiceClient = clientFactory.create(
    InstrumentsServiceDefinition,
    channel,
);

async function loadInstruments() {
    const shares  = await instrumentsClient.shares({});
    shares.instruments
}

async function loadShareById() {
    const response = await instrumentsClient.shareBy({id:"",idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID});
    console.log(response);
}



loadShareById()
.then(() => {
    channel.close();
})




