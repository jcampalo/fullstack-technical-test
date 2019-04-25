import { useReducer, useCallback } from 'react'

import { reducer, initialState } from './reducer'

export default ({
  items,
  onNext,
  onFinish
}) => {
  const [{
    isOver,
    score,
    block,
    showPlay,
    current
  }, dispatch] = useReducer(reducer, initialState)
  const onFinalizePlay = useCallback(() => {
    dispatch({ type: 'FINALIZE_PLAY' })
  }, [])
  const onSelectValid = useCallback((immidate) => {
    if (immidate) {
      if (current === items.length - 1) {
        onNext()
        dispatch({ type: 'START_PLAY' })
      } else {
        dispatch({ type: 'SET_CURRENT' })
      }
    } else if (!block) {
      dispatch({ type: 'INCREMENT_SCORE' })
    }
  }, [block, score, current, items])
  const onSelectInvalid = useCallback((immidate) => {
    if (immidate) {
      dispatch({ type: 'GAME_OVER' })
    } else if (!block) {
      dispatch({ type: 'BLOCK' })
    }
  }, [])
  const onRestart = useCallback(() => {
    onFinish()
    dispatch({ type: 'RESTART' })
  }, [])

  return {
    isOver,
    score,
    block,
    showPlay,
    current,
    onFinalizePlay,
    onSelectValid,
    onSelectInvalid,
    onRestart
  }
}
