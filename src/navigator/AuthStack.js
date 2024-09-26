import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import VerifyScreen from '../screens/Auth/VerifyScreen';
import CartScreen from '../screens/Main/Cart/CartScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*the screen for the Sign up, Login and code verification respectively*/}
      <Stack.Screen name='Register' component={SignUpScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Verify' component={VerifyScreen} />

    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});