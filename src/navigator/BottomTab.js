import { Image, StyleSheet, Text, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import CartScreen from '../screens/Main/Cart/CartScreen';
import FavouriteScreen from '../screens/Main/Favourite/FavouriteScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import CartDetails from '../screens/Main/Cart/CartDetails';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name='Home'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/icons/icons8-home-100.png')} 
            style= {{width: 27, height: 25, tintColor: focused ? "red" : "black"  }}/>
          )
        }} />
      <Tab.Screen
        name='Cart'
        component={CartDetails}
        options={{
          tabBarBadge: 4, tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/icons/icons8-cart-100.png')} 
            style={{width: 27, height: 25, tintColor: focused ? "red" : "black" }} />
          )
        }} />
      <Tab.Screen 
      name='Favourite' 
      component={FavouriteScreen}
      options={{tabBarIcon: ({focused})=>(
        <Image source={require('../assets/icons//icons8-heart-100.png')} 
        style={{width: 27, height: 25, tintColor: focused ? "red" : "black" }} />
       ) 
      }} />
      <Tab.Screen
      name='Profile' 
      component={ProfileScreen}
      options={{tabBarIcon:({focused})=>(
        <Image source={require('../assets/icons/icons8-customer-100.png')} 
        style={{width: 27, height: 25, tintColor: focused ? "red" : "black" }} />
       )
      }} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabIcon: {
    width: 27,
    height: 25
  }
});