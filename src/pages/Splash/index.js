import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WelcomeAuth');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/splash.png')}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
  },
});
