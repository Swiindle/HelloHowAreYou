import React from 'react';
import { Text, TouchableOpacity, Picker } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProjStyleSheet from "../styles/ProjStyleSheet.js";
import UserData from "../data/UserData.js";
import { TextInput } from 'react-native-gesture-handler';

const styles = ProjStyleSheet;

function AgeScreen({ route, navigation }) 
{
    var {Data} = route.params;
    var userData = Data;
    var selectedValue;

      return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: "space-around",
    }}>
        <Text style={styles.titleText}>{userData.name}, how old are you?</Text>
        <Picker 
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.item label="young" value="young">young</Picker.item>
            <Picker.item label="old" value="old">old</Picker.item>
        </Picker>
        <TouchableOpacity  
        style={styles.defaultButton}  
        onPress={() => navigation.navigate("Color", {Data: userData,})}>
            <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AgeScreen;