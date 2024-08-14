import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'

const Feedback = () => {
  return (
    <WebView source={{uri:"https://forms.gle/Q3QSTu8PkfGXuX1p7"}}/>
  );
}

export default Feedback