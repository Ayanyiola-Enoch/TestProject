import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  const Tab = createBottomTabNavigator()
  return (
   <NavigationContainer>
    <Tab.Navigator 
    // initialRouteName='ChatScreen'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}
    >
      <Tab.Screen 
      name='HomeScreen' 
      component={HomeScreen} 
      options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          <Image source={require('./src/assets/icons/icons8-home-100.png')} style={styles.tabBarIcon} />
        ),
        
      }}
      />
      <Tab.Screen
       name='ChatScreen' 
       component={ChatScreen} 
       options={{title:'Profile', tabBarIcon:({focused})=>(
        <Image source={require('./src/assets/icons/icons8-male-user-100.png')} style={styles.tabBarIcon} />
       ) }} />

    </Tab.Navigator>
   </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();
  

const styles = StyleSheet.create({
  tabBarIcon: {
    width:30,
    height: 25,
  },
});

export default App;