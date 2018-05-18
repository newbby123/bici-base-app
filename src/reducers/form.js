import initialStore from '../constants/initialStore'
import * as actionTypes from '../constants/actionTypes'

export default (state = initialStore.form, action) => {
  switch(action.type) {
    case actionTypes.SAVE_INPUT:
      const { formId, field, value } = action
      return {
        ...state,
        [formId]: {
          ...state[formId],
          input: {
            ...state[formId].input,
            [field]: value
          }
        }
      }
      break
    case actionTypes.RESET:
    case actionTypes.RESET_FORM:
      return initialStore.form
      break
    default:
      return state
  }
}
