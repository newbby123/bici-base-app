import { Platform, Alert, Linking } from 'react-native'
import codePush from 'react-native-code-push'
import compareVersions from 'compare-versions'

import { VERSION } from '../config'
import { processingTask } from './processing'
import { handleError, notify } from './notice'
import * as actionTypes from '../constants/actionTypes'

export const setAppEnv = (env) => {
  return {
    type: actionTypes.SET_APP_ENV,
    env
  }
}

export const checkAppPackage = () => {
  return (dispatch, getState, { apiClient }) => {
    return apiClient.get('/app/newest?platform=' + Platform.OS)
      .then(res => {
        const version = res.versionId || VERSION
        if (compareVersions(version, VERSION) > 0) {
          Alert.alert(
            '版本更新',
            '检测到新安装包，点击“确定”下载。',
            [
              {
                text: '确定',
                onPress: () => {
                  Linking.openURL(res.downloadUrl)
                    .catch(error => dispatch(handleError(error)))
                }
              }
            ]
          )
          return true
        } else {
          return false
        }
      })
  }
}

export const checkAppUpdate = () => {
  return (dispatch) => {
    codePush.sync(
      {
        checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
        installMode: codePush.InstallMode.IMMEDIATE,
        updateDialog: {
          title: '版本更新',
          optionalUpdateMessage: '检查到更新包，是否立即更新？',
          optionalInstallButtonLabel: '更新',
          optionalIgnoreButtonLabel: '暂不',
          mandatoryUpdateMessage: '有一个重要更新需要立即安装',
          mandatoryContinueButtonLabel: '确认'
        }
      },
      status => {
        switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            // dispatch(notify('正在检查更新'));
            break
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            break
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            dispatch(notify('开始下载更新'))
            break
          case codePush.SyncStatus.INSTALLING_UPDATE:
            dispatch(notify('正在安装更新'))
            break
          case codePush.SyncStatus.UP_TO_DATE:
            // dispatch(notify('当前版本已是最新'));
            break
          case codePush.SyncStatus.UPDATE_INSTALLED:
            dispatch(notify('更新已安装，即将重启应用'))
            break
          case codePush.SyncStatus.SYNC_IN_PROGRESS:
            dispatch(notify('更新正在进行中，请勿重复操作'))
            break
          case codePush.SyncStatus.UNKNOWN_ERROR:
            dispatch(notify('未知错误'))
            break
        }
      },
      ({receivedBytes, totalBytes}) => {
        if (receivedBytes < totalBytes) {
          let progress = Math.round((receivedBytes * 100) / totalBytes)
          dispatch(processingTask(`已下载更新 ${progress}%`))
        } else {
          dispatch(processingTask(''))
        }
      }
    )
  }
}

export const setAppVersion = (version) => {
  return {
    type: actionTypes.SET_APP_VERSION,
    version
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET
  }
}
