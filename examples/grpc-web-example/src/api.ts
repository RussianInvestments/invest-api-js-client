import { InstrumentIdType, PortfolioResponse, TTechApiClient } from 'invest-js-grpc-web'



const client = new TTechApiClient({ token: 't.EqsWvcz64MTOiklfJ6i3L3jKHRHlgiZJcdjZSFN0o55h6SJfzO6ojZCAUVDZwVjcFMjnfP0uPuNHy4MqjQco5Q'})

export async function allShares() {
    return await client.instruments.shares({});
}

export type AccountPortfolio = { accountId: string, portfolio: PortfolioResponse }

export async function portfolios(){
    const accountsResponse = await client.users.getAccounts({})
    const result = new Array<AccountPortfolio>();
    for (const account of accountsResponse.accounts) {

        const portfoliosResp =  await client.operations.getPortfolio({accountId: account.id})
        result.push({accountId: account.id, portfolio: portfoliosResp})

    }
    return result
}

export async function instrumentByUID(uuid: string) {
    return await client.instruments.getInstrumentBy({idType: InstrumentIdType.INSTRUMENT_ID_TYPE_UID, id: uuid})
}


type LimitPostOrder = {}
type MarketPostOrder = {}
export type PostOrderCommand = LimitPostOrder | MarketPostOrder

export async function postOrder(cmd: PostOrderCommand) {

}