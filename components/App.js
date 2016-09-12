import React, { Component } from 'react';
import Board from './Board'
import {
  StyleSheet,
  Text,  
  TextInput,
  TouchableHighlight,  
  View  
} from 'react-native';
import styles from './styles'


export default class App extends Component {
  renderBoard() {
    return (
      <Board />
    );
  }  
  renderNewGameControls() {
    return (
      <View style={styles.container}>
        <Text>
          Width:
        </Text>
        <TextInput style={{width: 100, height:40}} /> 
        <Text>
          Height:
        </Text>
        <TextInput style={{width: 100, height:40}} />

        <Text>Num Mines:</Text>
        <TextInput style={{width: 100, height:40}} />

        <TouchableHighlight>
        	<Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
  render() {
    if (true) {
      return this.renderNewGameControls();
    }    
  }
  
}
