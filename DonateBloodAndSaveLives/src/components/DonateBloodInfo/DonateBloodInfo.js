import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Seperator from '../Seperator/Seperator';

const DonateBloodInfo = ({hospitalName, blood, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flexDirection: 'column'}}>
      <Modal
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
            <Text>Are you sure for delete donation?</Text>
            <View style={styles.container2}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
              <Pressable style={styles.buttonClose}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', top: 15}}>
        <Image
          style={{top: 30, width: 80, height: 80}}
          source={require('../../assets/blood-donation.png')}
        />
        <View style={{flex: 1, top: 30}}>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            {hospitalName}
          </Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>
            Needs {blood.bloodType} blood donor
          </Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>
            Urgency: {blood.urgency}
          </Text>
          <Text style={{fontSize: 13, textAlign: 'center'}}>
            Special Situation: {blood.specialSituation}
          </Text>
        </View>
        {/* <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edit Donation')}>
            <Image
              style={{top: 60, width: 28, height: 28}}
              source={require('../../assets/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{top: 60, width: 30, height: 30}}
              source={require('../../assets/delete.png')}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <View>
        <Seperator />
      </View>
    </View>
  );
};

export default DonateBloodInfo;

const styles = StyleSheet.create({
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
    backgroundColor: '#F5F5F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
  textStyle: {
    textAlign: 'center',
    paddingTop: '5%',
    color: '#000000',
    fontWeight: '700',
  },
});
