import { actionTypes as at } from './constants'

export const initialState = {
  game: 0,
  current: 1
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case at.INIT: {
      return {
        ...initialState,
        game: state.game + 1,
        items: [payload.item]
      }
    }
    case at.NEXT: {
      return {
        ...state,
        current: state.current + 1,
        items: [...state.items, payload.item]
      }
    }
    default:
      return state
  }
}

export default reducer
