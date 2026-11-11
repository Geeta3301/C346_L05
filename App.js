import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
import {Picker} from "@react-native-picker/picker";

//Create custom component InputBox for TextInputs with Labels

const MyApp = () => {
  // Declare variables
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('Admin');

  return (
      <View>
        <Text></Text>

        {/*Ex1G: Create a TextInput labelled as "User Name"*/}
        <Text>User Name:</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={(text) => setUserName(text)} />

        {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
        <Text>User Type:</Text>
        <Picker selectedValue={userType}
            onValueChange={(value) => setUserType(value)}
            style={{backgroundColor:'grey'}}>
            <Picker.Item label='Admin' value='Admin'/>
            <Picker.Item label='Guest' value='Guest'/>
        </Picker>


        {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
        <Text>Password:</Text>
        <TextInput style={{borderWidth: 1}}/>


        {/* Ex1C: Add a Button with the title "LOG IN".   */}
        <Button title="LOG IN"
            onPress={() =>{
                Alert.alert("Welcome!")
            }}
        />
        {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}

        {/* Ex1E: Replace the LOG IN Button with TouchableOpacity on Text that is also labelled as
        "LOG IN". When the text is pressed, an Alert with the message "Welcome!" will appear */}
        <TouchableOpacity onPress={() => ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT)}>
            <Text>LOG IN</Text>
        </TouchableOpacity>

        {/* Ex1F: change Alert message to Toast message */}
      </View>
  );
};

export default MyApp;