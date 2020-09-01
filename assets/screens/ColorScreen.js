import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import ProjStyleSheet from "../styles/ProjStyleSheet.js";

const styles = ProjStyleSheet;

function ColorScreen({ route, navigation }) {
  var {Data} = route.params;
  var userData = Data;

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',}}>
        <Text style = {styles.titleText}>{userData.name}, what is your favorite color?</Text>
        <TouchableOpacity 
          style={styles.blueButton} 
          onPress = {() => {
            userData.color = styles.blueButton.backgroundColor;
            navigation.navigate('Finish', {User: userData,});
          }}>
          <Text style = {styles.text}> Blue? </Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.redButton} 
          onPress = {() => {
            userData.color = styles.redButton.backgroundColor;
            navigation.navigate('Finish', {User: userData,});
          }}>
          <Text style = {styles.text}> Red? </Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.yellowButton} 
          onPress = {() => {
            userData.color = styles.yellowButton.backgroundColor;
            navigation.navigate('Finish', {User: userData,});
          }}>
          <Text style = {styles.text}> Yellow? </Text>
        </TouchableOpacity>
      </View>
  );
}

export default ColorScreen;