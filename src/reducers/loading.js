import initialStore from '../constants/initialStore'
import * as actionTypes from '../constants/actionTypes'

export default (state = initialStore.loading, action) => {
  switch(action.type) {
    case actionTypes.INCREASE_LOADING: // 加载器增加计数
      const { prompt } = action
      return {
        ...state,
        count: state.count + 1,
        prompt
      }
      break
    case actionTypes.DECREASE_LOADING: // 加载器减少计数
      return {
        ...state,
        count: state.count - 1,
        prompt: ''
      }
      break
    case actionTypes.ENABLE_LOADING:
      return {
        ...state,
        enabled: true
      }
      break
    case actionTypes.DISABLE_LOADING:
      return {
        ...state,
        enabled: false
      }
    case actionTypes.RESET_LOADING:
    case actionTypes.RESET:
      return initialStore.loading
      break
    default:
      return state
  }
}
