import initialStore from '../constants/initialStore'
import * as actionTypes from '../constants/actionTypes'

export default (state = initialStore.app, action) => {
  switch(action.type) {
    case actionTypes.SET_APP_ENV:
      const { env } = action
      return {
        ...state,
        env
      }
      break
    case actionTypes.SET_APP_VERSION:
      const { version } = action
      return {
        ...state,
        version
      }
      break
    case actionTypes.RESET:
      return initialStore.app
      break
    default:
      return state
  }
}
