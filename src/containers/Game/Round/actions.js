import { actionTypes as at } from './constants'

export const initialize = payload => ({
  type: at.INIT,
  payload
})

export const next = payload => ({
  type: at.NEXT,
  payload
})
