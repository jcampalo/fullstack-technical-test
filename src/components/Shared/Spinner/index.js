import React from 'react'

import * as S from './styled'

const dimensions = {
  xs: 0.5,
  s: 1,
  m: 2,
  l: 3,
  xl: 4
}

const Spinner = ({ size }) => (
  <S.Spinner scale={dimensions[size]} />
)

Spinner.defaultProps = {
  size: 'm'
}

export default Spinner
