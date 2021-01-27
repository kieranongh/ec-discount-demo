import React, { useState, useMemo } from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import DetailBox from './detailBox'

import './styles.scss'

const MAX_DISCOUNT = 50
const MIN_DISCOUNT = 10
const DISCOUNT_DELTA = 5

const OpportunityItem = ({ 
  objectId,
  index,
  initialDiscount,
  startTime,
  endTime,
  prediction,
  onPostOppo,
  loading
 }) => {  
  const timeRange = useMemo(() => {
    return `${startTime} - ${endTime}`
  }, [startTime, endTime])
  // Check discount is a number, else use 10 
  const [discount, setDiscount] = useState(isNaN(initialDiscount) ? MIN_DISCOUNT : initialDiscount)

  const incrementDiscount = () => {
    if (discount >= MAX_DISCOUNT) {
      setDiscount(MAX_DISCOUNT)
    } else {
      setDiscount(discount + DISCOUNT_DELTA)
    }
  }

  const decrementDiscount = () => {
    if (discount <= MIN_DISCOUNT) {
      setDiscount(MIN_DISCOUNT)
    } else {
      setDiscount(discount - DISCOUNT_DELTA)
    }
  }

  return (
    <Grid className="opp-item" container direction="row" spacing={0}>
      <Grid item>
        <Typography variant="h6">
          Opportunity {index + 1}
        </Typography>
      </Grid>
      <Grid container item direction="row" spacing={1}>
        <Grid item>
          <DetailBox
            title="Deal"
            content={`${discount}%`}
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
            spacing={0}
          >
            <Grid item>
              <Button className="opp-item__inc-button" variant="contained" onClick={incrementDiscount}>
                <ExpandLessIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button className="opp-item__inc-button" variant="contained" onClick={decrementDiscount}>
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
          <Button
            className="opp-item__cell opp-item__post-button"
            variant="contained"
            color="primary"
            onClick={onPostOppo(objectId)}
          >
            {!loading && (
              <>Post <br /> Now</>
            )}
            {loading && (
              <CircularProgress />
            )}
          </Button> 
        </Grid>
      </Grid>
    </Grid>
  )
} 

export default OpportunityItem
