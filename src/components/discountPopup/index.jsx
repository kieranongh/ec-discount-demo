import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

const DiscountPopup = (props) => {
  const { open, handleClose } = props
  return (
    <Dialog className="discount-popup" open={open} onClose={handleClose}>
      <DialogTitle className="discount-popup__title" disableTypography>
        <IconButton className="discount-popup__close-button" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
        <Typography className="discount-popup__title-text" color="primary" variant="h3">
          Daily Opportunities
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Our AI model has identified the following opportunities for your venue today.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DiscountPopup