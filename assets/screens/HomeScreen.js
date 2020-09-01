import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import ProjStyleSheet from "../styles/ProjStyleSheet.js";
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = ProjStyleSheet;

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{
      backgroundColor: "#fff",
      flexDirection: "column",
      justifyContent: "flex-start",
      flex:1,}}>
        <View style = {{
          paddingTop: 50, 
          paddingBottom: 30,
          }}> 
          <Text style={styles.titleText}>The Untrustworthy Personal Information Storage App</Text>
        </View>
        <View style = {{
          justifyContent: "space-evenly", 
          alignItems: "center",
          }}> 
          <TouchableOpacity style={styles.defaultButton} 
            onPress={() => navigation.navigate('Name')}> 
            <Text style={styles.text}> New Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.defaultButton}  > 
            <Text style={styles.text}> View Data</Text>
          </TouchableOpacity>
        </View>
        <View style = {{
          alignItems: "center",
          paddingTop: 10,
          bottom: 10,
          }}>
          <Text> Project by Mark Lim</Text>
        </View>
    </SafeAreaView>
  );
}

export default HomeScreen;