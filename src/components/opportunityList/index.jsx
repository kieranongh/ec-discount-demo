import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'

import LinearProgress from '@material-ui/core/LinearProgress'

import { GET_OPPOS, POST_OPPO } from '../../api/discountOppos'
import { displayTime } from '../../util/dateFormat'

import OpportunityItem from '../opportunityItem'

const OpportunityList = (props) => {
  const { loading, error, data } = useQuery(GET_OPPOS)
  const [postOppo, { loading: postOppoLoading }] = useMutation(
    POST_OPPO, 
    {
      onError: () => {}, // do not show error
      onCompleted: () => { setSelectedOppo(null) }
    }
  )
  const [selectedOppo, setSelectedOppo] = useState(null)

  if (loading) {
    return <LinearProgress />
  }
  if (error || !data.opposForToday) {
    return <p>Error: {error}</p>
  }

  const onPostOppo = (oppoId) => () => {
    setSelectedOppo(oppoId)
    return postOppo({ variables: { oppoId } })
  }

  return data.opposForToday.map(
    ({ objectId, discount, startTime, endTime, prediction}, index) => (
      <OpportunityItem
        key={objectId}
        index={index}
        objectId={objectId}
        discount={discount}
        startTime={displayTime(startTime)}
        endTime={displayTime(endTime)}
        prediction={prediction}
        onPostOppo={onPostOppo}
        loading={objectId === selectedOppo && postOppoLoading}
      />
    )
  )
}

export default OpportunityList
