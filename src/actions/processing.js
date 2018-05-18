import * as actionTypes from '../constants/actionTypes'

export const resetProcessing = () => {
  return {
    type: actionTypes.RESET_PROCESSING
  }
}

export const processingTask = (task) => {
  return {
    type: actionTypes.PROCESSING_TASK,
    task
  }
}
