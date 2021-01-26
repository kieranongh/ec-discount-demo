import { gql } from '@apollo/client'

export const GET_OPPOS = gql`
query Query {
  opposForToday(restId: "kieran") {
    objectId created discount startTime endTime prediction
  }
}
`