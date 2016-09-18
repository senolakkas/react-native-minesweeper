/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from './containers/app';
import {
  AppRegistry
} from 'react-native';

class reactnativeMinesweeper extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('reactnativeMinesweeper', () => reactnativeMinesweeper);
