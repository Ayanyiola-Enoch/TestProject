import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const FormButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{fontSize: 14, color: "white"}}>{title}</Text>
    </TouchableOpacity>
  );

};

export default FormButton;

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: '#BB5D5C',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
    },
});