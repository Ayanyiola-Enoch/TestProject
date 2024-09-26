import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const FormInput = ({title, placeholder, kkk}) => {
  return (
    <View style={{marginTop: 22,}}>
      <Text style={{fontSize:13, fontWeight:'600', color:'black'}}>{title}</Text>
      <View style={styles.container}>
        <TextInput 
        style={{paddingHorizontal:9, fontSize: 13, color: "black", backgroundColor:'#D8D8D8'}}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        secureTextEntry={kkk}
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
    marginTop: 7,
    }
});