import { combineEpics } from 'redux-observable'

export const injectEpicFactory = store => (key, epic) => {
  const { injectedEpics } = store
  const hasEpics = Reflect.has(injectedEpics, key) && epic

  if (!hasEpics) {
    injectedEpics[key] = epic

    store.epic$.next(combineEpics(...Object.values(injectedEpics)))
  }
}

export default function getInjectors (store) {
  return {
    injectEpic: injectEpicFactory(store)
  }
}
