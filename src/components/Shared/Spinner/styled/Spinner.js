import styled from 'styled-components'

import { IconSpinner } from 'components/Shared/Icon'

const Spinner = styled(IconSpinner)`
  animation: rotation infinite 1s;
  fill: #000;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
