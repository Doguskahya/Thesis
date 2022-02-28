import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import DonateBloodInfoForMyList from '../../components/DonateBloodInfo/DonateBloodInfoForMyList';

const MyListPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row-reverse',
          flex: 1,
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../../assets/settings.png')} />
        </TouchableOpacity>
      </View>
      <DonateBloodInfoForMyList
        hospitalName={'X Hospital'}
        blood={{
          bloodType: 'AB rH+',
          urgency: 'High',
          specialSituation: 'test',
        }}
        navigation={navigation}
      />
    </View>
  );
};

export default MyListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#EF5350',
  },
});
