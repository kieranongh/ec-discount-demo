import { gql } from '@apollo/client'

export const GET_OPPOS = gql`
query OpposForToday {
  opposForToday(restId: "kieran") {
    objectId created discount startTime endTime prediction
  }
}
`

export const POST_OPPO = gql`
mutation PostOppo($oppoId: String!) {
  postOppo(oppoId: $oppoId)
}
`