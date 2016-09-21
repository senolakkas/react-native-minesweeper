import React, {Component} from 'react';
import {
  StyleSheet, 
  View, 
  Text,
  TextInput, 
  TouchableOpacity,
  TouchableHighlight,  
} from 'react-native';
import Board from './Board';
const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class NewGame extends Component {
  constructor(props) {
    super(props);
  }



  renderBoard() {
    return (
      <Board />
    );
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      this.renderBoard()
    );
  }
}
