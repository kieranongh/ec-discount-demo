import React from 'react'

import { useQuery, gql } from '@apollo/client'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

// import './styles.scss'

const GET_OPPOS = gql`
  query Query {
    opposForToday(restId: "kieran") {
      objectId created discount startTime endTime prediction
    }
  }
`

const OpportunityList = (props) => {
  const { loading, error, data } = useQuery(GET_OPPOS)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error || !data.opposForToday) {
    return <p>Error: {error}</p>
  }
  return (
    <div>
      Number of Opportunities: {data.opposForToday.length}
    </div>
  )
}

export default OpportunityList
