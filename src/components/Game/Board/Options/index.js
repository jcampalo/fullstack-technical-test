import React from 'react'

import Box from 'components/Shared/Box'
import Element from './Element'

const Options = ({
  game,
  items,
  options,
  current,
  onSelectValid,
  onSelectInvalid
}) => {
  return (
    <Box
      height='500px'
      justifyContent='space-around'
      alignItems='center'
      wrap='wrap'
    >
      {options.map(({ name, image }) => (
        <Element
          key={`option${game}${name}${current}`}
          name={name}
          image={image}
          current={current}
          items={items}
          onSelectValid={onSelectValid}
          onSelectInvalid={onSelectInvalid}
        />
      ))}
    </Box>
  )
}

export default Options
