import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
        <Button title='Continue' onPress={()=> navigation.navigate('ChatScreen')}/>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({})