export const initialState = {
  isOver: false,
  score: 0,
  block: false,
  showPlay: true,
  current: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'BLOCK': {
      return {
        ...state,
        block: true
      }
    }
    case 'SET_CURRENT':
      return {
        ...state,
        block: false,
        current: state.current + 1
      }
    case 'INCREMENT_SCORE':
      return {
        ...state,
        block: true,
        score: state.score + 1
      }
    case 'START_PLAY':
      return {
        ...state,
        showPlay: true
      }
    case 'FINALIZE_PLAY':
      return {
        ...state,
        showPlay: false,
        current: 0,
        block: false
      }
    case 'GAME_OVER':
      return {
        ...state,
        isOver: true
      }
    case 'RESTART':
      return initialState
    default:
      return state
  }
}
