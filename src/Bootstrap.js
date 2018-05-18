import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Toast} from 'antd-mobile'
import compareVersions from 'compare-versions'

import apiClient from './helpers/apiClient'
import { VERSION, IS_DEV } from './config'
import * as colors from './data/colors'
import { reset, setAppVersion, checkAppUpdate } from './actions/app'
import {handleError} from './actions/notice'
import {PROJECT_NAME} from  './data/dimensions'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

class Bootstrap extends Component {
  state = {
    bootstrapped: false
  }
  // componentWillUnmount() {
  //   clearInterval(window.timeInstance)
  // }

  componentDidMount () {
    const { app, dispatch } = this.props

    // TODO 接口请求及错误处理演示代码
    apiClient.post('/login', { username: 'hh', password: 'dd' })
      .then(data => {
        const { id, realName } = data.data
        return { id, realName }
      })
      .catch(error => dispatch(handleError(error)))

    // TODO antD-mobile Toast组件演示代码
    Toast.show('framed React Native app', 1)

    // app更新检测
    if (app.version !== null && compareVersions(app.version, VERSION) !== 0) {
      dispatch(reset())
      dispatch(setAppVersion(VERSION))
    }

    if (!IS_DEV) {
      // TODO 服务端暂不支持完整包更新
      // dispatch(checkAppPackage())
      //   .then(hasNewPackage => {
      //     if (!hasNewPackage) {
      //       dispatch(checkAppUpdate())
      //     }
      //   })
      dispatch(checkAppUpdate())
    }
    this.setState({ bootstrapped: true })
  }
  render () {
    const { bootstrapped } = this.state
    // 已启动
    if (bootstrapped) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            欢迎来到BiCi!
          </Text>
          <Text style={styles.instructions}>
            {'开始前请参阅BiCi编码规范，并清理演示代码.\n 演示代码仅在Bootstrap.js中存在'}
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      );
    }

    // TODO require路径请更改为<appName>/src/assets/logo.png
    // 未启动 显示启动页
    return (
      <View style={styles.container}>
        {/*<Image*/}
          {/*source={require(`MyTestApp/src/assets/logo.png`)}*/}
          {/*style={styles.logoImg}*/}
        {/*/>*/}
        <Text style={styles.title}>钢铁管家</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoImg: {
    width: 200,
    height: 200
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    marginTop: 50,
    fontSize: 32,
    color: colors.BLACK_1
  }
})

export default connect(({ app }) => {
  return {
    app
  }
})(Bootstrap)