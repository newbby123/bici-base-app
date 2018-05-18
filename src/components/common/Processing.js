import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {connect} from 'react-redux'

import {COLOR} from '../../config'
import {Icon} from './'

function Processing ({processing, containerStyle}) {
  let {task} = processing
  if (!task) {
    return null
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Animatable.Text animation='rotate'iterationCount='infinite'easing='linear'>
        <Icon name='rotate-right' style={styles.text} />
      </Animatable.Text>
      <Text style={styles.text}>{task}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLOR.backgroundNotice
  },
  text: {
    fontSize: 12,
    color: COLOR.textEmpha
  }
})

function mapStateToProps (state) {
  let {processing} = state
  return {
    processing
  }
}

export default connect(mapStateToProps)(Processing)
