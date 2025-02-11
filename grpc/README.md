# T-Tech Invest API grpc Typescript library

Provides modules with promise api

## Install using npm
```
npm install @tinkoff/invest-js-grpc --save  
```

## Usage
```
import { TTechApiClient } from '@tinkoff/invest-js-grpc'

const client = new TTechApiClient({ token: 't.invest.secret-token', metadata : {'x-app-name':'node-ts-myapp'}})

async function allInstruments() {
    const shares = await client.instruments.shares({})
    const bonds = await client.instruments.bonds({})
    const etfs = await client.instruments.etfs({})
    return {shares, bonds, etfs}
}

allInstruments()
    .catch(console.log)

```
