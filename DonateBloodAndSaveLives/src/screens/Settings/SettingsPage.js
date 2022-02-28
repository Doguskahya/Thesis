import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Form, Picker} from 'react-native-form-component';
import auth from '@react-native-firebase/auth';

const SettingsPage = ({navigation}) => {
  const [language, setLanguage] = useState('English');
  const [apperence, setApperence] = useState('Dark Mode');
  const signout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        Alert.alert('Successful!', 'User signed out!');
        navigation.navigate('Login');
      });
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 30}}>
        <Form buttonText={'Save'}>
          <Picker
            items={[
              {label: 'English', value: 'English'},
              {label: 'Turkish', value: 'Turkish'},
            ]}
            label="Pick a language"
            selectedValue={language}
            onSelection={item => setLanguage(item.value)}
            floatingLabel
            isRequired
          />
          <Picker
            items={[
              {label: 'Dark Mode', value: 'Dark Mode'},
              {label: 'Light Mode', value: 'Light Mode'},
            ]}
            label="Pick a apperence mode"
            selectedValue={apperence}
            onSelection={item => setApperence(item.value)}
            isRequired
            floatingLabel
          />
        </Form>
        <View style={{top: 125}}>
          <TouchableOpacity>
            <Text>Notification Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={signout}>
          <Text style={{textAlign: 'center'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#EF5350',
    flex: 1,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    flex: 1,
    margin: 20,
  },
  buttonContainer: {
    flex: 1,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 15,
  },
});
