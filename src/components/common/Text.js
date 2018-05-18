/**
 * Created by XiaoFangChe on 2018/2/6.
 */
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default ({content, children, containerStyle, textStyle}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {content
             ? <Text style={[styles.text, textStyle]}>{content}</Text>
             : null
            }
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
 container: {
   padding: 5,
   flexDirection: 'row',
   alignItems: 'center',
 },
 text: {
   width: 50,
   fontSize: 16,
   textAlign: 'center'
 }
})