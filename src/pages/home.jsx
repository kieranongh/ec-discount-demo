import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import DiscountPopup from '../components/discountPopup'

import './styles.scss'

const Home = () => {
  const [openDiscountModal, setOpenDiscountModal] = useState(false)

  const handleOpenDiscountModal = () => {
    setOpenDiscountModal(true)
  };

  const handleCloseDiscountModal = () => {
    setOpenDiscountModal(false)
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
          onClick={handleOpenDiscountModal}
        >
          Set Daily Opportunities
        </Button>
        <DiscountPopup open={openDiscountModal} handleClose={handleCloseDiscountModal} />
      </Grid>
    </Grid>
  )
}

export default Home
