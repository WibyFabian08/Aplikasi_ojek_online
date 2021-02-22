/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Router from './router';
import {Provider} from 'react-redux';
import {store} from '../src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router></Router>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create();

export default App;
