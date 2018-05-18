import * as actionTypes from '../constants/actionTypes'

export const resetLoading = () => {
  return {
    type: actionTypes.RESET_LOADING
  }
}

export const increaseLoading = (prompt = '') => {
  return {
    type: actionTypes.INCREASE_LOADING,
    prompt
  }
}

export const decreaseLoading = () => {
  return {
    type: actionTypes.DECREASE_LOADING
  }
}

export const enableLoading = () => {
  return {
    type: actionTypes.ENABLE_LOADING
  }
}

export const disableLoading = () => {
  return {
    type: actionTypes.DISABLE_LOADING
  }
}
