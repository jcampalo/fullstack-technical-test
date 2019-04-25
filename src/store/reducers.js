import { combineReducers } from 'redux'

const mainReducer = (state = {}) => state

export default function createReducer (injectedReducers = {}) {
  return combineReducers({
    global: mainReducer,
    ...injectedReducers
  })
}
