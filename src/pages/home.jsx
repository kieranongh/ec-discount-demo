import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import DiscountPopup from '../components/discountPopup'

import './styles.scss'

const Home = () => {
  const [openDiscountPopup, setOpenDiscountPopup] = useState(false)

  const handleOpenDiscountPopup = () => {
    setOpenDiscountPopup(true)
  };

  const handleCloseDiscountPopup = () => {
    setOpenDiscountPopup(false)
  };

  return (
    <Grid
      className="home"
      container
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenDiscountPopup}
        >
          Set Daily Opportunities
        </Button>
        <DiscountPopup open={openDiscountPopup} handleClose={handleCloseDiscountPopup} />
      </Grid>
    </Grid>
  )
}

export default Home
