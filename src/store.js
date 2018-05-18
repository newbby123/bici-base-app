import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import apiClient from './helpers/apiClient'
import reducers from './reducers'
import initialStore from './constants/initialStore'
import * as configs from './config'

let middlewares = []

middlewares.push(thunk.withExtraArgument({ apiClient })) // 为 redux-thunk 注入自定义参数

if (configs.IN_DEBUGGER) {
  middlewares.push(createLogger({
    duration: true,
    collapsed: true
  }))
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const store = createStore(
  persistReducer(persistConfig, reducers),
  initialStore,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)
export default store
