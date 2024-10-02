import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import CartScreen from '../screens/Main/Cart/CartScreen';
import Payment from '../screens/Main/Cart/Payment';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
  return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Bottom" component={BottomTab} />
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="Payment" component={Payment}/>
        </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});