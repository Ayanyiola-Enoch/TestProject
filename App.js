import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />;
      <Stack.Screen name='ChatScreen' component={ChatScreen} />;

    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;