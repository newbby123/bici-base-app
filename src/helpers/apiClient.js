/**
 * @File: 请求流程封装
 * @TODO: 增加 Logger
 * @DOCS:
 *   @axios Interceptors: https://github.com/axios/axios#interceptors
 */

import axios from 'axios'
import store from '../store'
import logger from '../logger'
import { increaseLoading, decreaseLoading } from '../actions/loading'
import * as configs from '../config'

const FETCH_TIMEOUT = 10000

const apiClient = axios.create({
  timeout: FETCH_TIMEOUT,
  maxContentLength: Math.pow(1024, 2) // 1024 的 2次幂
})

function handleError (error) {
  const { dispatch } = store
  const { config } = error

  // 非静默请求，减少加载器计数
  if (!config.isSilent) {
    dispatch(increaseLoading())
  }
  return Promise.reject(error)
}

// request interceptor, before request is sent
apiClient.interceptors.request.use((config) => {
  const { dispatch, getState } = store
  const { isSilent = false } = config

    // 非静默请求，增加加载器计数
  if (!isSilent) {
    dispatch(increaseLoading())
  }

    // 根据环境获取 baseURL
  const { app } = getState()
  config.baseURL = configs.ENVS.find(env => env.name === app.env).apiBaseUrl

  const { method, url, params, data } = config
  logger.debug(method, url, params || data)
  return config
}, handleError)

// response interceptor
apiClient.interceptors.response.use((response) => {
  const { status, data, config: { url, isSilent = false, checkResponseCode = true } } = response
  logger.debug(status, url, data)

  const { dispatch } = store
  if (!isSilent) {
    dispatch(decreaseLoading())
  }

    // 检查 response code
  const { code, message } = data
  if (checkResponseCode && code !== 0) {
    let error = new Error(message)
    error.code = code
    error.response = response
    return Promise.reject(error)
  }

  return data
}, handleError)

export default apiClient
