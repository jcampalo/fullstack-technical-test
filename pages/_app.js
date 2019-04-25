import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'

import withReduxStore from 'store/withReduxStore'
import GlobalStyles from 'components/Shared/GlobalStyles'

class MyApp extends App {
  render () {
    const {
      Component, pageProps, store
    } = this.props

    return (
      <Provider store={store}>
        <Container>
          <GlobalStyles />
          <Component {...pageProps} />
        </Container>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
