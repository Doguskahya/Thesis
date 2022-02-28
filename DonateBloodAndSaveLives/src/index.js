import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigation from './navigations/Navigation';
import LoginPage from './screens/LoginPage/LoginPage';

const index = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
