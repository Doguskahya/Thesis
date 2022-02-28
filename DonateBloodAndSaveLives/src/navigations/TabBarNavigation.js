import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListPage from '../screens/ListPages/ListPage';
import MapPage from '../screens/Map/MapPage';
import MyListPage from '../screens/ListPages/MyListPage';

const TabBarNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName={'Need Blood List'}>
      <Tab.Screen name="Need Blood List" component={ListPage} />
      <Tab.Screen name="Map" component={MapPage} />
      <Tab.Screen name="My List Page" component={MyListPage} />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;

const styles = StyleSheet.create({});
