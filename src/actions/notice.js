import * as actionTypes from '../constants/actionTypes'

export const resetNotice = () => {
  return {
    type: actionTypes.RESET_NOTICE
  }
}

export const notify = (message, duration = 2000) => {
  return dispatch => {
    dispatch({
      type: actionTypes.NOTIFY,
      message
    })
    setTimeout(() => {
      dispatch({
        type: actionTypes.NOTIFY,
        message: ''
      })
    }, duration)
  }
}
export const handleError = (error) => {
  return dispatch => {
    if (error.response) {
      if (error.response.status === 200) {
        dispatch(notify(error.message))
      } else if (error.response.status === 401) {
        dispatch(notify('登录已超时'))
        window.location.href = '/login'
      } else if (error.response.status === 403) {
        dispatch(notify('没有该功能访问权限'))
      } else {
        dispatch(notify(error.response.statusText || '服务端出错'))
      }
    } else if (error.request) {
      dispatch(notify('服务端未响应'))
    } else if (error instanceof Object && error.hasOwnProperty('message')) {
      dispatch(notify(error.message))
    } else {
      dispatch(notify('未知错误'))
    }
  }
}
