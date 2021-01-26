import React, { useMemo } from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './styles.scss'

const OpportunityItem = ({ objectid, index, discount, startTime, endTime, prediction }) => {
  
  const timeRange = useMemo(() => {
    return `${startTime} - ${endTime}`
  }, [startTime, endTime])

  return (
    <Grid className="opp-item" container direction="row">
      <Grid item spacing={1}>
        <Typography variant="h6">
          Opportunity {index + 1}
        </Typography>
      </Grid>
      <Grid container item direction="row" spacing={1}>
        <Grid item>
          <Paper className="opp-item__cell opp-item__detail-box" elevation={3}>
            <Typography component="p" variant="subtitle2">
              Deal
            </Typography>
            <Typography component="p" variant="h4" color="primary">
              {discount}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className="opp-item__cell opp-item__detail-box">
            <Typography component="p" variant="subtitle2">
              Time
            </Typography>
            <Typography component="p" variant="h6">
              {timeRange}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className="opp-item__cell opp-item__detail-box">
            <Typography component="p" variant="subtitle2">
              Expected <br /> Customers
            </Typography>
            <Typography component="p" variant="h6">
              {prediction}
            </Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Button className="opp-item__cell opp-item__post-button" variant="contained" color="primary">
            Post <br /> Now
          </Button> 
        </Grid>
      </Grid>
    </Grid>
  )
} 

export default OpportunityItem
