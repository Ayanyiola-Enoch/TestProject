import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormButton = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 14, color: "white"}}>{title}</Text>
    </View>
  )
}

export default FormButton;

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: '#BB5D5C',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
});