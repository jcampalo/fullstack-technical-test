import React, { memo, useCallback } from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const Element = ({
  current,
  name,
  image,
  items,
  onSelectValid,
  onSelectInvalid
}) => {
  const from = {
    stage: 0
  }
  const [{ stage, opacity }, set] = useSpring(() => (current === 0 ? {
    from: { ...from, opacity: 0 },
    to: { opacity: 1 },
    delay: 500
  } : from))
  const onSelect = useCallback(() => {
    if (items[current] === name) {
      onSelectValid(false)
      set({
        from,
        to: [{
          stage: 1
        }, from],
        onRest: onSelectValid,
        friction: 5,
        tension: 100
      })
    } else {
      onSelectInvalid(false)
      set({
        from,
        to: [{
          stage: -1
        }, from],
        onRest: onSelectInvalid,
        friction: 5,
        tension: 160
      })
    }
  }, [current, items, name])

  return (
    <S.Card
      style={{
        opacity,
        transform: stage
          .interpolate({ range: [-1, 0, 1], output: [0.8, 1, 1.2] })
          .interpolate(scale => `scale3d(${scale}, ${scale}, ${scale})`)
      }}
      onClick={onSelect}
    >
      <S.Image
        style={{
          transform: stage
            .interpolate({ range: [-1, 0, 1], output: [-10, 0, -30] })
            .interpolate(x => `translate3d(0px, ${x}px, 0px)`)
        }}
        src={image}
        alt={name}
      />
      <S.Text>{name}</S.Text>
    </S.Card>
  )
}

export default memo(Element)
