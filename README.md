# bici-base-app

本应用作为开发React Native应用程序的基础框架。它封装了api请求接口、数据持久化库、app包热更新、后端报错截获、启动页等基础功能

## 编码规范
本应用要求遵循[standardjs](https://standardjs.com/rules-zhcn.html#javascript-standard-style)规范
[React/JSX/ES 编码规范](https://tower.im/projects/12b0a776c9cd417f916857d75c5f5c98/docs/0588e98081e940439b0ea8d6a9ee48ef/)

## 环境及语言
```
Nodejs
npm
ES6
```

## 生成方法
```
npm install bici-cli -g
bici rn-app <YourProjectName>
```
## 请求地址切换
对于不同的应用有不同的后端请求地址，不同的开发环境有不同后端请求地址。请求地址可以在根目录的config.js文件中配置
```
export const ENVS = [
  { name: ENV_NAMES[0], desc: '开发', apiBaseUrl: 'http://bici.dev.com/base' },
  { name: ENV_NAMES[1], desc: '测试', apiBaseUrl: 'http://bici.test.com/base' },
  { name: ENV_NAMES[2], desc: '预发布', apiBaseUrl: 'http://bici.staging.com/base' },
  { name: ENV_NAMES[3], desc: '生产', apiBaseUrl: 'http://bici.com/base' }
]
```
这里预设了开发、测试、预发布、生产环境以适配大多数开发场景。apiBaseUrl可以配置项目的请求地址
app根据发布环境默认为开发或生产环境，切换环境的方式需自定义。
```
定义action
export const setAppEnv = (env) => {
  return {
    type: actionTypes.SET_APP_ENV,
    env
  }
}

切换环境
let {dispatch} = this.props
    showActionSheetWithOptions(
      {
        options: configs.ENVS.map(v => v.desc),
        title: '切换环境'
      },
      index => dispatch(setAppEnv(configs.ENVS[index].name))
    )
```


## 示范

### api请求
```
apiClient.post('/login', { username: 'hh', password: 'dd' })
      .then(data => {
        const { id, realName } = data.data
        return { id, realName }
      })
```
### 报错截获
```
.catch(error => dispatch(handleError(error)))
```
### 使用antd组件
```
import {Toast} from 'antd-mobile'
Toast.show('framed React Native app', 1)
```
