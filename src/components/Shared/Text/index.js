import styled from 'styled-components'

const Text = styled.span`
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  font-family: Roboto;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`

Text.defaultProps = {
  color: '#000',
  size: '12px',
  weight: '200'
}

export default Text
