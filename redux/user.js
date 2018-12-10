import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    helloWorld: null,
  })

export const UserProfileTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
    text: 'Expo with Redux and Saga',
})

const helloWorld = (state, action) => {
    return state.merge({
        text: 'Changed using Redux!',
    })
}

const reducer = createReducer(INITIAL_STATE, {
    [Types.HELLO_WORLD]: helloWorld,
})

export const user = () => {
    return reducer()

}

const getReducer = (rootState) => {
    return rootState.user
}

export const getText = (rootState) => {
    const state = getReducer(rootState)
    return state.text
}

