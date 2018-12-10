import { jsonToGraphQLQuery } from 'json-to-graphql-query';
import { SHOPIFY_STOREFRONT_ACCESS_TOKEN } from '../config/application'

const fetchShopify = (query) => {
    const graphQLQuery = jsonToGraphQLQuery(query, {pretty: true})
    return fetch('https://aslkdfjlasdfj.myshopify.com/api/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN
        },
        body: graphQLQuery,
    })
    .then((response) => {return response})
}

export const testRequest = () => {
    const query = {
        shop: {
            name: true,
            primaryDomain: {
                url : true,
                host: true
            }
        }
    } 

    return fetchShopify(query)
}