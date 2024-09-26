import { Image, StyleSheet, Text, } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import CartScreen from '../screens/Main/Cart/CartScreen';
import FavouriteScreen from '../screens/Main/Favourite/FavouriteScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';

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
            <Image source={require('../assets/icons/icons8-home-100.png')} style= {styles.tabIcon}/>
          )
        }} />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          tabBarBadge: 4, tabBarIcon: ({ focused }) => (
            <Image source={require('../assets/icons/icons8-cart-100.png')} style={styles.tabIcon} />
          )
        }} />
      <Tab.Screen 
      name='Favourite' 
      component={FavouriteScreen}
      options={{tabBarIcon: ({focused})=>(
        <Image source={require('../assets/icons//icons8-heart-100.png')} style={styles.tabIcon} />
       ) 
      }} />
      <Tab.Screen
      name='Profile' 
      component={ProfileScreen}
      options={{tabBarIcon:({focused})=>(
        <Image source={require('../assets/icons/icons8-customer-100.png')} style={styles.tabIcon} />
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