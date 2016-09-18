/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App'
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
