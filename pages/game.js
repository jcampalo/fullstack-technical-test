import React, { Fragment } from 'react'
import Head from 'next/head'

import Spinner from 'components/Shared/Spinner'
import Box from 'components/Shared/Box'
import Text from 'components/Shared/Text'
import Grid from 'components/Shared/Grid'
import GameBoard from 'components/Game/Board'
import GameQueryContainer from 'containers/Game/Query'
import GameRoundContainer from 'containers/Game/Round'

const Game = () => (
  <Fragment>
    <Head>
      <title>Game</title>
    </Head>
    <GameQueryContainer>
      {({
        error,
        isLoading
      }) => {
        if (isLoading) {
          return (
            <Box justifyContent='center' alignItems='center' height='300px' width='100%'>
              <Spinner />
            </Box>
          )
        }

        if (error) {
          return (
            <Box justifyContent='center' alignItems='center' height='300px' width='100%'>
              <Text>There was an error :(</Text>
            </Box>
          )
        }

        return (
          <Grid>
            <GameRoundContainer>
              {({
                game,
                options,
                current,
                items,
                onNext,
                onFinish
              }) => {
                return (
                  <GameBoard
                    game={game}
                    round={current}
                    items={items}
                    options={options}
                    onNext={onNext}
                    onFinish={onFinish}
                  />
                )
              }}
            </GameRoundContainer>
          </Grid>
        )
      }}
    </GameQueryContainer>
  </Fragment>
)

export default Game
