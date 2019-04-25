import { ajax } from 'rxjs/ajax'
import { throwError } from 'rxjs'
import {
  pluck,
  catchError
} from 'rxjs/operators'

export default function request ({ config, url }) {
  return ajax({
    url,
    ...config
  }).pipe(
    pluck('response'),
    catchError(error => throwError(error))
  )
}
