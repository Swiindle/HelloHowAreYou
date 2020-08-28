import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',}}>
        <TouchableOpacity style={styles.blueButton} onPress={() => navigation.navigate('Color', {bckColor: styles.blueButton.backgroundColor,})}>
          <Text style = {styles.text}> Press Here </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.redButton} onPress={() => navigation.navigate('Color', {bckColor: styles.redButton.backgroundColor,})}>
          <Text style = {styles.text}> Press Here </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.yellowButton} onPress={() => navigation.navigate('Color', {bckColor: styles.yellowButton.backgroundColor,})}>
          <Text style = {styles.text}> Press Here </Text>
        </TouchableOpacity>
      </View>
  );
}

function ColorScreen({ route, navigation })
{
  const {bckColor} = route.params;

  return(
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: bckColor}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style = {styles.text}> Go Back </Text>
      </TouchableOpacity>
    </View>
  );
}

/*
function BlueScreen({ navigation })
{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:styles.blueButton.backgroundColor}}>
      <TouchableOpacity style = {styles.blueButton}  onPress={() => navigation.goBack()}>
        <Text style = {styles.text}> Go Back </Text>
      </TouchableOpacity>
    </View>
  );
}

function RedScreen({ navigation })
{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:styles.redButton.backgroundColor}}>
    <TouchableOpacity style = {styles.redButton}  onPress={() => navigation.goBack()}>
      <Text style = {styles.text}> Go Back </Text>
    </TouchableOpacity>
  </View>
  );
}

function YellowScreen({ navigation })
{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:styles.yellowButton.backgroundColor}}>
    <TouchableOpacity style = {styles.yellowButton} onPress={() => navigation.goBack()}>
      <Text style = {styles.text}> Go Back </Text>
    </TouchableOpacity>
  </View>
  );
}*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, animationEnabled: false,}}>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: "  ",}}/>
      <Stack.Screen name="Color" component={ColorScreen} options={{title: "  ",}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  blueButton: {
    backgroundColor: "#a0ccf2",
    padding: 20,
    margin:10,
    borderRadius: 10,
  },
  redButton: {
    backgroundColor: "#ed928c",
    padding: 20,
    margin:10,
    borderRadius: 10,
  },
  yellowButton: {
    backgroundColor: "#edd69f",
    padding: 20,
    margin:10,
    borderRadius: 10,
  },
  text:{
    fontSize: 30,
  }
});
