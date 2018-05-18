import initialStore from '../constants/initialStore'
import * as actionTypes from '../constants/actionTypes'

export default (state = initialStore.notice, action) => {
  switch(action.type) {
    case actionTypes.NOTIFY:
      const { message } = action
      return {
        ...state,
        message
      }
      break
    case actionTypes.RESET:
    case actionTypes.RESET_NOTICE:
      return initialStore.notice
      break
    default:
      return state
  }
}
