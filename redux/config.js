import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {SHOPIFY_GRAPHQL_URL, SHOPIFY_STOREFRONT_ACCESS_TOKEN} from '../config/application'

const { Types, Creators } = createActions({
    helloWorld: null,
  })

export const ConfigTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
    baseURL: SHOPIFY_GRAPHQL_URL,
    shopifyStoreAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN
})


const reducer = createReducer(INITIAL_STATE, {
})

export const config = () => {
    return reducer()
}

const getReducer = (rootState) => {
    return rootState.config
}
