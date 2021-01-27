import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

const DetailBox = (props) => {
  const { title, content, contentProps, className } = props
  return (
    <Paper className={`opp-item__cell opp-item__detail-box ${className}`} elevation={3}>
      <Typography component="p" variant="subtitle2">
      {title}
      </Typography>
      <Typography component="p" variant="h6" {...contentProps}>
        {content}
      </Typography>
    </Paper>
  )
}

export default DetailBox
