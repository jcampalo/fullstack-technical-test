import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'
import hoistNonReactStatics from 'hoist-non-react-statics'

import getInjectors from './reducerInjectors'

export default function applyInjectReducer ({ key, reducer }) {
  return (WrappedComponent) => {
    class ReducerInjector extends Component {
      constructor (props) {
        super(props)

        this.isInitialized = false
      }

      render () {
        return (
          <ReactReduxContext.Consumer>
            {({ store }) => {
              if (!this.isInitialized) {
                const { injectReducer } = getInjectors(store)

                injectReducer(key, reducer)
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
    ReducerInjector.WrappedComponent = WrappedComponent
    ReducerInjector.displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    return hoistNonReactStatics(ReducerInjector, WrappedComponent)
  }
}
