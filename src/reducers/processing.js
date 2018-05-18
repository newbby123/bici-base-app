import initialStore from '../constants/initialStore'
import * as actionTypes from '../constants/actionTypes'

export default (state = initialStore.processing, action) => {
  switch(action.type) {
    case actionTypes.PROCESSING_TASK:
      const { task } = action
      return {
        ...state,
        task
      }
      break
    case actionTypes.RESET:
    case actionTypes.RESET_PROCESSING:
      return initialStore.processing
      break
    default:
      return state
  }
}
