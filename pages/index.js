import React from 'react'
import Head from 'next/head'

import Grid from 'components/Shared/Grid'
import Link from 'components/Shared/Link'
import GameStart from 'components/Game/Start'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Grid>
      <Link href='/game'>
        <GameStart />
      </Link>
    </Grid>
  </div>
)

export default Home
