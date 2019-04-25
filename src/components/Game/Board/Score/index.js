import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const Score = ({
  game,
  score
}) => {
  const animation = score === 0 ? ({
    from: {
      opacity: 0,
      fontSize: 10
    },
    to: {
      opacity: 1,
      fontSize: 20
    }
  }) : ({
    from: {
      fontSize: 20
    },
    to: [{
      fontSize: 30
    }, {
      fontSize: 20
    }]
  })
  const [style, set, stop] = useSpring(() => animation)
  useEffect(() => {
    set(animation)

    return () => {
      stop()
    }
  }, [score, game])

  return (
    <S.Card>
      <S.Text style={style}>Score {score}</S.Text>
    </S.Card>
  )
}

export default Score
