import React, { useEffect } from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const Score = ({
  game,
  round
}) => {
  const animation = {
    from: {
      fontSize: 25,
      color: '#e5f6fd'
    }
  }
  const [style, set, stop] = useSpring(() => (animation))
  useEffect(() => {
    set({
      from: {
        fontSize: 20,
        color: '#464646'
      },
      to: [{
        fontSize: 25,
        color: '#e5f6fd'
      }, {
        fontSize: 20,
        color: '#464646'
      }]
    })

    return () => {
      stop()
    }
  }, [round, game])

  return (
    <S.Card>
      <S.Text style={style}>Game {game} | Round {round}</S.Text>
    </S.Card>
  )
}

export default Score
