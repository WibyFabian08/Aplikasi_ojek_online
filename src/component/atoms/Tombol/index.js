import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Tombol = (props) => {
  return (
    <View style={{marginBottom: 43}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          borderRadius: 25,
        }} onPress={props.onPress}>
        <Text
          style={styles.tombol}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tombol;

const styles = StyleSheet.create({
    tombol: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 13,
        textTransform: 'uppercase',
    }
});
