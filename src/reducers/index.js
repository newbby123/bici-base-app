import { combineReducers } from 'redux'

import app from './app'
import form from './form'
import loading from './loading'
import notice from './notice'
import processing from './processing'

export default combineReducers({
  app,
  form,
  loading,
  notice,
  processing
})
