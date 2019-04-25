import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  mergeMap,
  switchMap,
  takeUntil,
  catchError,
  timeout,
  pluck
} from 'rxjs/operators'

import API from 'constants/API'
import request from 'helpers/request'
import { actionTypes as at } from './constants'
import { fetchSuccess, fetchError } from './actions'

const LIMIT = 4

export const onFetch = action$ => action$.pipe(
  ofType(at.FETCH),
  switchMap(() => request({
    url: `${API.poke.url}pokemon?limit=${LIMIT}`
  }).pipe(
    timeout(30000),
    takeUntil(action$.pipe(ofType(at.CANCEL))),
    pluck('results'),
    mergeMap((data) => {
      const options = data.map(({ name }, key) => ({
        name,
        image: `${API.poke.imageUrl}${key + 1}.png`
      }))

      return [
        fetchSuccess({ data: options })
      ]
    }),
    catchError(error => of(fetchError({ error })))
  ))
)

export default combineEpics(onFetch)
