import React from 'react'
import {StyleSheet, Text} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {connect} from 'react-redux'

import {COLOR} from '../../config'

function Notice ({notice, containerStyle}) {
  if (!notice.message) {
    return null
  }

  return (
    <Animatable.View animation='fadeIn' style={[styles.container, containerStyle]}>
      <Text style={styles.message}>{notice.message}</Text>
    </Animatable.View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 60,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLOR.backgroundNotice
  },
  message: {
    fontSize: 12,
    color: COLOR.textEmpha
  }
})

function mapStateToProps (state) {
  let {notice} = state
  return {
    notice
  }
}

export default connect(mapStateToProps)(Notice)
