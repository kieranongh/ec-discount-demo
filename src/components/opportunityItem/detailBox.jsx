import React from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

const DetailBox = (props) => {
  const { title, content } = props
  return (
    <Paper className="detail-box">
      {title}
      {content}
    </Paper>
  )
}

export default DetailBox
