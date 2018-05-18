/**
 * @File: 全局 Loading 加载器
 */

import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Modal, ActivityIndicator, StyleSheet } from 'react-native'
import * as dimensions from '../../data/dimensions'
import * as colors from '../../data/colors'

const loadingWidth = Math.floor(dimensions.SCREEN_WIDTH / 2)
const loadingHeight = Math.floor(dimensions.SCREEN_HEIGHT / 10)

function Loading ({loading}) {
  const { count, prompt, enabled } = loading
  if (!enabled || count <= 0) { return null } // 禁用或已全部 loading 完毕

  const promptText = prompt
    ? (<Text style={styles.promptText}>{prompt}</Text>)
    : null

  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent
        visible={enabled || count > 0}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <ActivityIndicator color={colors.BLACK_3} size='small' />
          {promptText}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: Math.floor((dimensions.SCREEN_HEIGHT - loadingHeight) / 2),
    left: Math.floor((dimensions.SCREEN_WIDTH - loadingWidth) / 2),
    width: loadingWidth,
    height: loadingHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  promptText: {
    marginVertical: 10,
    color: colors.BLACK_3,
    fontSize: 12,
    backgroundColor: 'transparent'
  }
})

export default connect(({ loading }) => {
  return { loading }
})(Loading)
