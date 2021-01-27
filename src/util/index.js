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

export const getDiscountValue = (str) => {
  if (!isString(str)) {
    return
  }
  const split = str.split('%')
  if (split.length === 2) {
    const value = +split[0]
    return !isNaN(value) ? value : undefined
  }
}

const isString = (str) => {
  return (typeof str === 'string' || str instanceof String)
}