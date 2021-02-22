import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Input, Tombol} from '../../component/atoms';

const Login = () => {
  const loginState = useSelector((state) => state.LoginReducer);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (value, inputType) => {
    setLoginForm({
      ...loginForm,
      [inputType]: value,
    });
  };

  const sendData = () => {
    if (loginForm.email == '' && loginForm.password == '') {
      return alert('Mohon Isi Data Terlebih Dahulu');
    } else {
      console.log(loginForm);

      alert('Berhasil Login');

      setLoginForm({
        ...loginForm,
        email: '',
        password: '',
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{'<-'}</Text>
        </TouchableOpacity> */}
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textReducer}>{loginState.name}</Text>
          {/* <Image source={require('../../assets/images/LOGO.png')}></Image> */}
          <View style={styles.space(20)}></View>
          <Image
            style={styles.image}
            source={require('../../assets/images/sukses.png')}></Image>
          <View style={styles.space(15)}></View>
          <Text style={styles.text}>
            Silahkan Mengisi data anda, untuk masuk ke aplikasi O-JOL
          </Text>
        </View>
        <Input
          placeholder="Email"
          value={loginForm.email}
          onChangeText={(value) => handleInputChange(value, 'email')}></Input>
        <View style={styles.space(34)}></View>
        <Input
          placeholder="Password"
          value={loginForm.password}
          onChangeText={(value) => handleInputChange(value, 'password')}
          secureTextEntry></Input>
        <View style={styles.space(64)}></View>
        <Tombol title="Masuk" onPress={() => sendData()}></Tombol>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff'},
  image: {
    width: 250,
    height: 200,
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
