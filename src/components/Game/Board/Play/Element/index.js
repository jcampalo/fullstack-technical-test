import React from 'react'
import { useSpring } from 'react-spring'

import * as S from './styled'

const Element = ({
  count,
  name,
  image,
  onFinishAnimation
}) => {
  const [style] = useSpring(() => ({
    from: {
      opacity: 0
    },
    to: [{
      opacity: 1
    }, {
      opacity: 0
    }],
    delay: count === 0 ? 500 : 0,
    onRest: onFinishAnimation
  }))

  return (
    <S.Card style={style}>
      <S.Image src={image} alt={name} />
      <S.Text>{name}</S.Text>
    </S.Card>
  )
}

export default Element
