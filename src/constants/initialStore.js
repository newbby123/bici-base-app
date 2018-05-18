import * as configs from '../config'

const initialStore = {
  app: {
    version: null, // 版本号
    env: configs.IS_DEV ? configs.ENV_NAMES[0] : configs.ENV_NAMES[3] // 区分开发环境和生产环境
  },
  loading: { // 全局加载态控制
    count: 0, // loading 累加器
    prompt: '', // 提示语
    enabled: true // 是否启用 loading
  },
  form: {
    login: {
      input: {
        username: '',
        password: ''
      }
    }
  },
  notice: {
    message: ''
  },
  processing: {
    task: ''
  }
}

export default initialStore
