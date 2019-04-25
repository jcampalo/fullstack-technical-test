import React from 'react'

import Box from 'components/Shared/Box'
import Options from './Options'
import GameOver from './GameOver'
import Info from './Info'
import Play from './Play'
import Score from './Score'
import useHook from './hook'

const Board = ({
  game,
  round,
  options,
  items,
  onNext,
  onFinish
}) => {
  const {
    isOver,
    score,
    block,
    showPlay,
    current,
    onFinalizePlay,
    onSelectValid,
    onSelectInvalid,
    onRestart
  } = useHook({
    items,
    onNext,
    onFinish
  })

  if (isOver) {
    return (
      <Box direction='column'>
        <Info game={game} round={round} />
        <Score game={game} score={score} />
        <GameOver onRestart={onRestart} />
      </Box>
    )
  }

  return (
    <Box direction='column'>
      <Info game={game} round={round} />
      <Score game={game} score={score} />
      <Box direction='column'>
        {showPlay ? (
          <Play
            game={game}
            options={options}
            round={round}
            items={items}
            onFinalize={onFinalizePlay}
          />
        ) : (
          <div style={{ pointerEvents: block ? 'none' : 'auto' }}>
            <Options
              game={game}
              items={items}
              options={options}
              current={current}
              onSelectValid={onSelectValid}
              onSelectInvalid={onSelectInvalid}
            />
          </div>
        )}
      </Box>
    </Box>
  )
}

export default Board
