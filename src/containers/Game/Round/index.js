import {
  memo, useCallback, useEffect
} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'store/injectReducer'
import getRandom from 'helpers/getRandom'
import { KEY } from './constants'
import reducer from './reducer'
import {
  initialize,
  next
} from './actions'
import {
  selectItems,
  selectCurrent,
  selectOptions,
  selectGame
} from './selectors'

const getNextItem = ({ options }) => {
  const option = options[getRandom(0, options.length - 1)]

  return option.name
}

const Round = ({
  items,
  children,
  options,
  onStart,
  onNext,
  ...props
}) => {
  useEffect(() => {
    onStart({
      item: getNextItem({ options })
    })
  }, [])
  const onGoNext = useCallback(() => {
    onNext({
      item: getNextItem({ options })
    })
  })
  const onEnd = useCallback(() => {
    onStart({
      item: getNextItem({ options })
    })
  })

  if (items) {
    return children({
      items,
      options,
      ...props,
      onNext: onGoNext,
      onFinish: onEnd
    })
  }

  return null
}

export const mapDispatchToProps = dispatch => ({
  onStart: (payload) => {
    dispatch(initialize(payload))
  },
  onNext: (payload) => {
    dispatch(next(payload))
  }
})

const mapStateToProps = createStructuredSelector({
  options: selectOptions(),
  items: selectItems(),
  current: selectCurrent(),
  game: selectGame()
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: KEY, reducer })

export default compose(
  withReducer,
  withConnect
)(memo(Round))
