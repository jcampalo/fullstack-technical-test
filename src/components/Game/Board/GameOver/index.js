import React from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const GameOver = ({ onRestart }) => {
  const animation = {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 500
  }
  const { opacity } = useSpring(animation)

  return (
    <S.Card
      onClick={onRestart}
    >
      <S.Text
        style={{
          opacity,
          transform: opacity.interpolate({ range: [0, 1], output: [-50, 0] }).interpolate(x => `translate3d(0px, ${x}px, 0px)`)
        }}
      >YOU LOOSE
      </S.Text>
      <S.Text
        style={{
          opacity,
          transform: opacity.interpolate({ range: [0, 1], output: [50, 0] }).interpolate(x => `translate3d(0px, ${x}px, 0px)`)
        }}
      >Tap or click to restart
      </S.Text>
    </S.Card>
  )
}

export default GameOver
