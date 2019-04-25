import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import hoistNonReactStatics from 'hoist-non-react-statics'

import getInjectors from './epicInjectors'

export default function applyInjectEpic ({ key, epic }) {
  return (WrappedComponent) => {
    class InjectEpic extends Component {
      constructor (props) {
        super(props)

        this.isInitialized = false
      }

      render () {
        return (
          <ReactReduxContext.Consumer>
            {({ store }) => {
              if (!this.isInitialized) {
                const { injectEpic } = getInjectors(store)

                injectEpic(key, epic)
                this.isInitialized = true
              }

              return (
                <WrappedComponent {...this.props} />
              )
            }}
          </ReactReduxContext.Consumer>
        )
      }
    }
    InjectEpic.WrappedComponent = WrappedComponent

    InjectEpic.displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    return hoistNonReactStatics(InjectEpic, WrappedComponent)
  }
}
