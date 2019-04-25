import React from 'react'

import NextLink from 'next/link'

import * as S from './styled'

const Link = ({
  color, href, children
}) => {
  return (
    <NextLink href={href}>
      <S.Link color={color} href={href}>
        {children}
      </S.Link>
    </NextLink>
  )
}

Link.defaultProps = {
  color: 'secondaryLight'
}

export default Link
