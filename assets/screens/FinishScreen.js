import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import ProjStyleSheet from "../styles/ProjStyleSheet.js";

const styles = ProjStyleSheet;

function FinishScreen({ route, navigation })
{
  const {User} = route.params;
  var userData = User;

  return(
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: userData.color}}>
      <Text style={styles.titleText}>Data Collection Finished</Text>
      <Text style={styles.text}>Name: {userData.name}</Text>
      <Text style={styles.text}>Color: {userData.color}</Text>
      <TouchableOpacity 
        style={styles.defaultButton} 
        onPress={() => {
          navigation.popToTop();
          saveUserData(userData);
        }}>
        <Text style = {styles.text}> Start Again </Text>
      </TouchableOpacity>
    </View>
  );
}

function saveUserData(data)
{
  
}

export default FinishScreen;