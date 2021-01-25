import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// import styles from './styles.scss'

const DiscountPopup = (props) => {
  const { open, handleClose } = props
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Daily Opportunities</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Our AI model has identified the following opportunities for your venue today.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default DiscountPopup