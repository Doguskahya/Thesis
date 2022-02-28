import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  // AsyncStorage,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage"
import Seperator from '../../components/Seperator/Seperator';
import logo from '../../assets/logo.png';
import backgroundImage from '../../assets/background.png';
import auth from '@react-native-firebase/auth';

const LoginPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const setMail = text => setUserEmail(text);
  const setPassword = text => setUserPassword(text);

  const loginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);

      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Sorry!', 'Something Wrong!');
    }
  };

  useEffect(() => {
    if (auth().currentUser != null) {
      navigation.navigate('Home');
    }
  }, [])

  return (
    <ImageBackground
      source={backgroundImage}
      style={{width: '100%', height: '100%', paddingTop: 10, opacity: 0.6}}>
      <Modal
        style={{backgroundColor: 'black'}}
        animationType="slide"
        pageSheet
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Change Password Forgotten</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <View style={styles.container2}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable style={styles.buttonClose}>
                <Text style={styles.textStyle}>Send Mail</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Image source={logo} />
        <Text style={{color: '#C80200'}}>Donate Blood & Save Lives</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setMail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={{marginTop: 10}}>
          <Button
            title="Login"
            style={styles.buttonLogin}
            onPress={loginUser}
          />
        </View>
        <View>
          <Seperator />
        </View>

        {/* <View style={{marginTop: 10}}>
          <Button title="Login with Facebook" style={styles.buttonFacebook} />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="Login with Google" style={styles.buttonGoogle} />
        </View> */}
        <View>
          <Text style={styles.textStyle}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text style={styles.textStyle}>Sign up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  buttonLogin: {
    width: 100,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#FF0000',
  },
  buttonGoogle: {
    width: 100,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#00FF00',
  },
  buttonFacebook: {
    width: 100,
    height: 100,
    paddingTop: 20,
    backgroundColor: '#000000',
  },
  container: {
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    height: 40,
    padding: 10,
    borderRadius: 10,
    marginTop: '5%',
    borderWidth: 1,
    width: '60%',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    paddingTop: '5%',
    color: '#000000',
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 220,
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: '#EF5350',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#FF0000',
    borderRadius: 20,
    flex: 1,
    margin: 20,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginPage;
