import { createSelector } from 'reselect'

import { selectData } from '../Query/selectors'
import { KEY } from './constants'
import { initialState } from './reducer'

const selectStore = state => state[KEY] || initialState

const selectItems = () => createSelector(
  selectStore,
  ({ items }) => items
)

const selectCurrent = () => createSelector(
  selectStore,
  ({ current }) => current
)

const selectGame = () => createSelector(
  selectStore,
  ({ game }) => game
)

const selectOptions = () => createSelector(
  selectData(),
  options => options
)

export {
  selectStore,
  selectItems,
  selectCurrent,
  selectOptions,
  selectGame
}
