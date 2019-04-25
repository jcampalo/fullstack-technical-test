import styled from 'styled-components'

const Box = styled.div`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  background: ${({ background }) => background};
  display: ${({ display }) => display};
  flex-basis: ${({ basis }) => basis};
  flex-direction: ${({ direction }) => direction};
  ${({ grow }) => grow >= 0 && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink >= 0 && `flex-shrink: ${shrink};`}
  flex-wrap: ${({ wrap }) => wrap};
  ${({ height }) => height && `height: ${height};`}
  justify-content: ${({ justifyContent }) => justifyContent};
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ width }) => width && `width: ${width};`}
`

Box.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  basis: 'auto',
  direction: 'row',
  display: 'flex',
  grow: 0,
  justifyContent: 'flex-start',
  shrink: 1,
  wrap: 'nowrap'
}

export default Box
