import React, { Component } from 'react';
import Board from './Board'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './styles'


export default class App extends Component {
  renderBoard() {
    return (
      <Board />
    );
  }  
  render() {
    if (true) {
      return this.renderBoard();
    }    
  }
  
}
