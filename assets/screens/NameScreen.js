import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProjStyleSheet from "../styles/ProjStyleSheet.js";
import UserData from "../data/UserData.js";
import { TextInput } from 'react-native-gesture-handler';

const styles = ProjStyleSheet;

function NameScreen({ navigation }) 
{
    var userData = UserData;
      return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "space-around",
    }}>
        <Text style={styles.titleText}>Please Enter Your Name</Text>
        <TextInput 
            style={{
                borderColor: "#000",
                borderRadius: 10,
                borderWidth: 2,
                padding: 20,
                fontSize: 20,
                width: "75%",
            }}
            placeholder="Your name here."
            onChangeText={(text) => userData.name = text}>
        </TextInput>
        <TouchableOpacity  
        style={styles.defaultButton}  
        onPress={() => navigation.navigate("Color", {Data: userData,})}>
            <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default NameScreen;