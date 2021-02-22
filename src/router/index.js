import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Register, Login, WelcomeAuth} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='splash'>
      <Stack.Screen name="splash" component={Splash} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;
