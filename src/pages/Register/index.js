import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,

  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Tombol } from '../../component/atoms';
import { setForm } from '../../redux/action';

const Register = ({navigation}) => {
  const registerState = useSelector((state) => state.RegisterReducer);

  const dispatch = useDispatch();

  const handleInputChange = (value, input) => {
    dispatch(setForm(input, value));
  };

  const sendData = () => {
    if (
      registerState.form.fullName == '' &&
      registerState.form.email == '' &&
      registerState.form.password == ''
    ) {
      return alert('Mohon Isi Data Dengan Lengkap');
    }
    console.log(registerState.form);

    dispatch({
      type: 'SET_FORM_NULL',
    });

    alert('Data Terkirim');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'<-'}</Text>
        </TouchableOpacity> */}
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textReducer}>{registerState.name}</Text>
          {/* <Image source={require('../../assets/images/LOGO.png')}></Image> */}
          <View style={styles.space(20)}></View>
          <Image
            style={styles.gambar}
            source={require('../../assets/images/register.png')}></Image>
          <View style={styles.space(20)}></View>
          <Text style={styles.text}>
            Mohon Mengisi Beberapa Data Untuk Proses Pendaftaran
          </Text>
        </View>
        <Input
          placeholder="Nama Lengkap"
          value={registerState.form.fullName}
          onChangeText={(value) =>
            handleInputChange(value, 'fullName')
          }></Input>
        <View style={styles.space(34)}></View>
        <Input
          placeholder="Email"
          value={registerState.form.email}
          onChangeText={(value) => handleInputChange(value, 'email')}></Input>
        <View style={styles.space(34)}></View>
        <Input
          placeholder="Password"
          value={registerState.form.password}
          onChangeText={(value) => handleInputChange(value, 'password')}
          secureTextEntry></Input>
        <View style={styles.space(64)}></View>
        <Tombol title="Daftar" onPress={sendData}></Tombol>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  gambar: {
    maxWidth: 250,
    height: 150,
    flex: 1,
  },
  space: (value) => {
    return {
      height: value,
    };
  },
  text: {
    maxWidth: 250,
    marginBottom: 76,
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textReducer: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
  },
});
