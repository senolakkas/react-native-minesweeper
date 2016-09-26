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
    const { gameStarted, increment, decrement } = this.props;

    console.log("containers/NewGame 39");
    console.log(this.props);
    console.log("containers/NewGame 41");
    window.alert(gameStarted);

    if (!gameStarted) {
      return this.renderBoard();
    }
    
  }
}
