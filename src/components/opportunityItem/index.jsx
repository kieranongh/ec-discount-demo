import React, { useMemo } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import DetailBox from './detailBox'

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
          <DetailBox
            title="Deal"
            content={discount}
            className="opp-item__deal"
            contentProps={{
              variant: 'h4',
              color: 'primary'
            }}
          />
        </Grid>
        <Grid item>
          <Grid
            className="opp-item__cell opp-item__inc-button-container"
            container
            direction="column"
            justify="space-between"
          >
            <Grid item>
              <Button className="opp-item__inc-button" variant="contained">
                <ExpandLessIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button className="opp-item__inc-button" variant="contained">
                <ExpandMoreIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <DetailBox
            title="Time"
            content={timeRange}
            className="opp-item__time"
          />
        </Grid>
        <Grid item>
          <DetailBox
            title={<>Expected <br /> Customers</>}
            content={prediction}
            className="opp-item__expected"
          />
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