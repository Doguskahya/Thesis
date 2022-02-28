import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {Form, FormItem, Picker} from 'react-native-form-component';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { errorResolve } from '../../ErrorFunction'

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Female');
  const [bloodType, setBloodType] = useState('A rh+');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const mail = text => setEmail(text);
  // const name = text => setName(text);
  // const address = text => setAddress(text);
  // const phoneNumber = text => setPhoneNumber(text);
  // const age = text => setAge(text);
  // const phoneNumber = text => setPhoneNumber(text);
  const password = text => setUserPassword(text);
  const passwordConfirm = text => setUserPasswordConfirm(text)
  const signUser = async () => {
    if (userPassword === userPasswordConfirm) {
      try {
        const res = await auth().createUserWithEmailAndPassword(email, userPassword);
        await firestore().collection("User").doc(res.user.uid).set({
          name,
          surname,
          email,
          address,
          phoneNumber,
          age,
          gender,
          bloodType,
        });
        Alert.alert('Welcome!', 'Your user registration is success complete.');
        navigation.navigate('Home');
      } catch (error) {
        console.error(error);
        // Alert.alert('Sorry..', errorResolve(error.code));
      }
    } else Alert.alert('Sorry..', 'Passwords error!');
  };

  // const onHandlePress = () => {
  //   setUser({
  //     name: name,
  //     surname: surname,
  //     email: email,
  //     address: address,
  //     phoneNumber: phoneNumber,
  //     age: age,
  //     gender: gender,
  //     bloodType: bloodType,
  //     password: password,
  //   });
  // };
  return (
    <ScrollView style={styles.container}>
      <Form
        onButtonPress={signUser}
        buttonText={'Sign Up'}
        buttonStyle={styles.button}>
        <FormItem
          label="Name"
          labelStyle={styles.label}
          isRequired
          value={name}
          onChangeText={name => setName(name)}
          floatingLabel
        />
        <FormItem
          label="Surname"
          isRequired
          value={surname}
          onChangeText={surname => setSurname(surname)}
          asterik
          floatingLabel
        />
        <FormItem
          label="Email"
          isRequired
          value={email}
          onChangeText={mail}
          asterik
          floatingLabel
          autoCapitalize="none"
        />
        <FormItem
          label="Address"
          isRequired
          value={address}
          onChangeText={address => setAddress(address)}
          asterik
          floatingLabel
        />
        <FormItem
          label="phoneNumber"
          isRequired
          value={phoneNumber}
          onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          asterik
          floatingLabel
        />
        <FormItem
          label="age"
          isRequired
          value={age}
          onChangeText={age => setAge(age)}
          asterik
          floatingLabel
        />
        <Picker
          items={[
            {label: 'Female', value: 'Female'},
            {label: 'Male', value: 'Male'},
          ]}
          label={'Pick a gender'}
          selectedValue={gender}
          onSelection={item => setGender(item.value)}
          floatingLabel
          isRequired
          asterik
        />
        <Picker
          items={[
            {label: 'A rh+', value: 'A rh+'},
            {label: 'B rh+', value: 'B rh+'},
            {label: '0 rh+', value: '0 rh+'},
            {label: 'AB rh+', value: 'AB rh+'},
            {label: 'A rh-', value: 'A rh-'},
            {label: 'B rh-', value: 'B rh-'},
            {label: '0 rh-', value: '0 rh-'},
            {label: 'AB rh-', value: 'AB rh-'},
          ]}
          label={'Pick your blood type'}
          selectedValue={bloodType}
          onSelection={item => setBloodType(item.value)}
          isRequired
          floatingLabel
          asterik
        />
        <FormItem
          label="Password"
          isRequired
          value={password}
          onChangeText={password}
          asterik
          floatingLabel
          secureTextEntry
        />
        <FormItem
          label="Password Confirm"
          isRequired
          value={passwordConfirm}
          onChangeText={passwordConfirm}
          asterik
          floatingLabel
          secureTextEntry
        />
      </Form>
    </ScrollView>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#EF5350',
  },
  button: {
    width: 100,
    display: 'flex',
    flexDirection: 'row-reverse',
    bottom: 30,
  },
  text: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  label: {
    width: 100,
  },
});
