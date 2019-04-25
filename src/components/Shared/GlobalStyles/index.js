import { createGlobalStyle } from 'styled-components'

import FontFace from './FontFace'
import Reset from './Reset'

const GlobalStyle = createGlobalStyle`
  ${FontFace}
  ${Reset}

  body {
    font-family: 'Open Sans';
    overflow: hidden;
    user-select: none;
    background: #e5f6fd;
  }
`

export default GlobalStyle
