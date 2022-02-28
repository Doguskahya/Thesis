import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation';

const MapPage = () => {
  const [location, setLocation] = useState({latitude:38.4237,latitude:27.1428});
  useEffect(() => {
    GeoLocation.getCurrentPosition(
      position => {
        console.log(position)
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 2000,
      },
    );
  }, [location]);
  return (
    <View style={{position: 'relative', height: 700}}>
      <MapView
        style={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}
        // mapType="hybrid"
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onPress={e => {
          console.log('pin', e);
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapPage;

const styles = StyleSheet.create({});
