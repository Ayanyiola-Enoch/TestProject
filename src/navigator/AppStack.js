import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import CartScreen from '../screens/Main/Cart/CartScreen';
import Payment from '../screens/Main/Cart/Payment';
import HomeScreen from '../screens/Auth/SignUpScreen';
import NotificationScreen from '../screens/Main/Notification/NotificationScreen';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Bottom" component={BottomTab} />
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Notification" component={NotificationScreen}/>
        </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});