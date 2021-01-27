import moment from 'moment'

const INPUT_TIME_FORMAT = 'Hmm'
const DISPLAY_TIME_FORMAT_NO_MINUTE = 'ha'
const DISPLAY_TIME_FORMAT_WITH_MINUTE = 'h:mma'

export const displayTime = (time) => {
  const dateObj = moment(time, INPUT_TIME_FORMAT)
  if (!dateObj.isValid()) {
    return '??'
  }
  if (dateObj.minutes() !== 0) {
    return dateObj.format(DISPLAY_TIME_FORMAT_WITH_MINUTE)
  } else {
    return dateObj.format(DISPLAY_TIME_FORMAT_NO_MINUTE)
  }
}