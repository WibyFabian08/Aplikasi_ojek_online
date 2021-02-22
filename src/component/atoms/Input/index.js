import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={'purple'}
        ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 13,
    borderColor: 'purple',
    color: 'purple'
  },
});
