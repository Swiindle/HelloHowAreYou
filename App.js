import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing all the screens
import HomeScreen from "./assets/screens/HomeScreen.js";
import ColorScreen from "./assets/screens/ColorScreen.js";
import NameScreen from "./assets/screens/NameScreen.js";
import AgeScreen from "./assets/screens/AgeScreen.js";
import FinishScreen from './assets/screens/FinishScreen.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Color" component={ColorScreen}/>
      <Stack.Screen name="Name" component={NameScreen}/>
      <Stack.Screen name="Age" component={AgeScreen}/>
      <Stack.Screen name="Finish" component={FinishScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
