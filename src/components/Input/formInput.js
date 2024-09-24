import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const FormInput = ({title, placeholder}) => {
  return (
    <View style={{marginTop: 14, }}>
      <Text style={{fontSize:13, color:'black'}}>{title}</Text>
      <View style={styles.container}>
        <TextInput 
        style={{fontSize: 13, color: "black"}}
        placeholder={placeholder}
        placeholderTextColor={'grey'}

        />
      </View>
    </View>
  )
}

export default FormInput;
const styles = StyleSheet.create({
    container:{
    borderWidth: 0.9,
    borderColor: 'grey',
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 5,
    marginTop: 7,
    }
});