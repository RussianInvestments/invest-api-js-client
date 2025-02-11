# T-Tech Invest API grpc-web Typescript library

Provides browser modules with promise api grpc stubs

## Install using npm
```
npm install @tinkoff/invest-js-grpc-web --save  
```

## Uage
```
import { TTechApiClient } from '@tinkoff/invest-js-grpc-web'

const client = new TTechApiClient({ token: 't....', metadata : {'x-app-name':'node-ts-myapp'}})

async function allInstruments() {
    const shares = await client.instruments.shares({})
    const bonds = await client.instruments.bonds({})
    const etfs = await client.instruments.etfs({})
    return {shares, bonds, etfs}
}

allInstruments()
    .catch(console.log)

```
more examples in exmaples dir