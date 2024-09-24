import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{color:"black"}}>This is the Home screen shshhs </Text>
        <Button title= "Continuesss" onPress={()=> navigation.navigate('ChatScreen')}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({})