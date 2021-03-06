import styled from 'styled-components'

import { animated } from 'react-spring'

const Card = styled(animated.div)`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 100;
`

export default Card
