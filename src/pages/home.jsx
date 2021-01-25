import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from './styles.scss'

const Home = () => {
  return (
    <Grid
      className="home"
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Button variant="contained" color="primary">
          Set Daily Opportunities
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home
