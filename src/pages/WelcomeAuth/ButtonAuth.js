import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ButtonAuth = (props) => {
    return (
      <View style={{marginBottom: 43}}>
        <Text style={{textAlign: 'center', maxWidth: 250, marginBottom: 6}}>
          {props.desc}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            maxWidth: 250,
            borderRadius: 25,
            
          }} onPress={props.onPress}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              paddingVertical: 13,
              textTransform: 'uppercase',
            }}>
            {props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

export default ButtonAuth;