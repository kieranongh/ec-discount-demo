import React from 'react'

import { useQuery } from '@apollo/client'

import LinearProgress from '@material-ui/core/LinearProgress'

import { GET_OPPOS } from '../../api/discountOppos'

import OpportunityItem from '../opportunityItem'


const OpportunityList = (props) => {
  const { loading, error, data } = useQuery(GET_OPPOS)

  if (loading) {
    return <LinearProgress />
  }
  if (error || !data.opposForToday) {
    return <p>Error: {error}</p>
  }
  return data.opposForToday.map(
    ({ objectid, discount, startTime, endTime, prediction}, index) => (
      <OpportunityItem
        key={objectid}
        index={index}
        objectid={objectid}
        discount={discount}
        startTime={startTime}
        endTime={endTime}
        prediction={prediction}
      />
    )
  )
}

export default OpportunityList
