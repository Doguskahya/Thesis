import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpPage from '../screens/SignUpPage/SignUpPage';
import LoginPage from '../screens/LoginPage/LoginPage';
import Home from '../screens/Home/Home';
import FindDonor from '../screens/FindDonor/FindDonor';
import TabBarNavigation from './TabBarNavigation';
import SettingsPage from '../screens/Settings/SettingsPage';
import EditDonationPage from '../screens/EditDonationPage/EditDonationPage';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Find Donor" component={FindDonor} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="Edit Donation" component={EditDonationPage} />
        <Stack.Screen name="Tab" component={TabBarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
