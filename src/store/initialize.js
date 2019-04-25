import isServer from 'helpers/isServer'
import configureStore from './configureStore'
import epics from './epics'
import reducers from './reducers'

export default (initialState) => {
  if (isServer) {
    return configureStore(initialState, epics, reducers)
  }

  /* eslint-disable no-underscore-dangle */
  const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = configureStore(initialState, epics, reducers)
  }

  return window[__NEXT_REDUX_STORE__]
  /* eslint-disable no-underscore-dangle */
}
