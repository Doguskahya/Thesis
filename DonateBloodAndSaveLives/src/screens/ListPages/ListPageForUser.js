import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListPageForUser = () => {
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
      <View>
        <DonateBloodInfo
          hospitalName={'X Hospital'}
          blood={{
            bloodType: 'AB rH+',
            urgency: 'High',
            specialSituation: 'test',
          }}
          navigation={navigation}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          alignSelf: 'flex-end',
          position: 'absolute',
          bottom: 35,
        }}>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => navigation.navigate('Find Donor')}>
          <Image source={require('../../assets/plusIcon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListPageForUser;

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#EF5350',
    flex: 1,
  },
  roundButton1: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 80,
    backgroundColor: '#FF0000',
  },
});
