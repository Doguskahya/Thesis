import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Form, Picker} from 'react-native-form-component';

const EditDonationPage = () => {
  const [bloodType, setBloodType] = useState('A rh+');
  const [specialSituation, setSpecialSituation] = useState('');
  const [urgency, setUrgency] = useState('Low');
  const [donor, setDonor] = useState({
    bloodType: '',
    specialSituation: '',
    urgency: '',
  });
  return (
    <View style={styles.container}>
      <Form onButtonPress={() => onHandlePress()} buttonText={'Save'}>
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
          label="Pick your blood type"
          selectedValue={bloodType}
          onSelection={item => setBloodType(item.value)}
          isRequired
          floatingLabel
        />
        <Picker
          items={[
            {label: 'a', value: 'a'},
            {label: 'b', value: 'b'},
          ]}
          label="Pick your Special Situation"
          selectedValue={specialSituation}
          onSelection={item => setSpecialSituation(item.value)}
          isRequired
          floatingLabel
        />
        <Picker
          items={[
            {label: 'Low', value: 'Low'},
            {label: 'Medium', value: 'Medium'},
            {label: 'High', value: 'High'},
          ]}
          label="Pick your Urgency"
          selectedValue={urgency}
          onSelection={item => setUrgency(item.value)}
          isRequired
          floatingLabel
        />
      </Form>
    </View>
  );
};

export default EditDonationPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#EF5350',
  },
});
