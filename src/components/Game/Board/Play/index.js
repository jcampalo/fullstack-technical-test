import React, {
  useState, useCallback
} from 'react'

import Box from 'components/Shared/Box'

import Element from './Element'

const Play = ({
  game,
  options,
  round,
  items,
  onFinalize
}) => {
  const [count, setCount] = useState(0)
  const onFinishAnimation = useCallback(() => {
    if (count >= round - 1) {
      onFinalize()
    } else {
      setCount(count + 1)
    }
  }, [round, count])
  const { name, image } = options.find(option => option.name === items[count])

  return (
    <Box height='500px' justifyContent='center' alignItems='center'>
      <Element
        key={`play${game}${round}${name}${count}`}
        count={count}
        name={name}
        image={image}
        onFinishAnimation={onFinishAnimation}
      />
    </Box>
  )
}

export default Play
