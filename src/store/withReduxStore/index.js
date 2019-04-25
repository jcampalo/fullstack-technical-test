import React, { PureComponent } from 'react'

import initialize from '../initialize'

export default (App) => {
  return class AppWithRedux extends PureComponent {
    static async getInitialProps ({ Component, ctx }) {
      const store = initialize()

      ctx.store = store

      let appProps = {}

      if (Component.getInitialProps) {
        appProps = await Component.getInitialProps(ctx)
      }

      return {
        ...appProps,
        initialReduxState: store.getState()
      }
    }

    constructor (props) {
      super(props)

      this.store = initialize(props.initialReduxState)
    }

    render () {
      return <App {...this.props} store={this.store} />
    }
  }
}
