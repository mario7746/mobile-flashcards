import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors'

const SubmitBtn = ({ children, onPress, disabled, width }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.iosSubmitBtn}
    >
      <Text style={[styles.submitBtnTxt, width]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  submitBtnTxt: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default SubmitBtn