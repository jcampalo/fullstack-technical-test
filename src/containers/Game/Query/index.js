import { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from '../../../store/injectReducer'
import injectEpic from '../../../store/injectEpic'
import { KEY } from './constants'
import reducer from './reducer'
import epic from './epics'
import { fetch } from './actions'
import {
  selectData,
  selectError,
  selectIsLoading
} from './selectors'

const Query = ({
  onMount, children, ...props
}) => {
  useEffect(() => {
    onMount()
  }, [])

  return children(props)
}

export const mapDispatchToProps = dispatch => ({
  onMount: () => {
    dispatch(fetch())
  }
})

const mapStateToProps = createStructuredSelector({
  data: selectData(),
  error: selectError(),
  isLoading: selectIsLoading()
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

const withReducer = injectReducer({ key: KEY, reducer })
const withEpic = injectEpic({ key: KEY, epic })

export default compose(
  withReducer,
  withEpic,
  withConnect
)(memo(Query))
