import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonAuth from './ButtonAuth';

const WelcomeAuth = ({navigation}) => {

  const pindahHalaman = (tujuan) => {
    if (tujuan == 'Masuk') {
      navigation.navigate('Login');
    } else if (tujuan == 'Daftar') {
      navigation.navigate('Register');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.gambar}
        source={require('../../assets/images/cart.png')}></Image>
      <Text style={styles.text}>Selamat Datang di O-JOL</Text>
      <ButtonAuth
        title="Masuk"
        onPress={() => pindahHalaman('Masuk')}
        desc="Silahkan Masuk Jika Sudah Memiliki Akun"></ButtonAuth>
      <ButtonAuth
        title="Daftar"
        onPress={() => pindahHalaman('Daftar')}
        desc="Jika Belum Memiliki Akun Silahkan Daftar"></ButtonAuth>
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  gambar: {
    width: 250,
    height: 150,
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
    marginBottom: 76,
  },
  textReducer: {
    marginBottom: 20,
    fontSize: 25,
    color: 'purple',
    fontWeight: 'bold',
  },
});
