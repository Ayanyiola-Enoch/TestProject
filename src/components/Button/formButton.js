import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: "white"}}>{title}</Text>
    </View>
  )
}

export default FormButton;

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: 'red',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});