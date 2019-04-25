import {
  createStore, applyMiddleware, compose
} from 'redux'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { createEpicMiddleware } from 'redux-observable'

export default function configureStore (
  initialState = {},
  epics,
  createReducer
) {
  const epic$ = new BehaviorSubject(epics)
  const epicMiddleware = createEpicMiddleware()
  const middlewares = [epicMiddleware]
  const enhancers = [applyMiddleware(...middlewares)]

  /* eslint-disable  no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'CasumoTest'
    })
    : compose
  /* eslint-enable no-underscore-dangle */

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))

  epicMiddleware.run((...args) => epic$.pipe(switchMap(epic => epic(...args))))

  // Extensions
  store.epic$ = epic$
  store.injectedReducers = {}
  store.injectedEpics = {}
  store.createReducer = createReducer

  return store
}
