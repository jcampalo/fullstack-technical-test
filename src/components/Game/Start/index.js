import React from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const Start = ({ onStart }) => {
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
      onClick={onStart}
    >
      <S.Text
        style={{
          opacity,
          transform: opacity.interpolate({ range: [0, 1], output: [-50, 0] }).interpolate(x => `translate3d(0px, ${x}px, 0px)`)
        }}
      >Welcome to the best game in the world
      </S.Text>
      <S.Text
        style={{
          opacity,
          transform: opacity.interpolate({ range: [0, 1], output: [50, 0] }).interpolate(x => `translate3d(0px, ${x}px, 0px)`)
        }}
      >Tap or click to start
      </S.Text>
    </S.Card>
  )
}

export default Start
