import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import FormButton from '../components/Button/FormButton';
import FormInput from '../components/Input/FormInput';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <FormInput title={"Full Name"} placeholder={"enter your full name"} />
      <FormInput title={"Password"} placeholder={"enter your password"} />
      <FormButton title={"Sign in"} />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
})