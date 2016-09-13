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
   constructor(props) {
    super(props);
    this.state = {
			height: 10,
			width: 10,
			numMines: 5,
			gameStarted: false
		}
	}

  startNewGame() {
    window.alert('Example Pressed');    
    //window.alert(this.state.width);

    /*Actions.startGame(
    	this.state.width,
    	this.state.height,
    	this.state.numMines
    );
    */
  }
  
  renderNewGameControls() {
    return (
      <View style={styles.container}>
        <Text>
          Width:
        </Text>
        <TextInput keyboardType="numeric" value={this.state.width.toString()} style={{width: 100, height:40}} onChangeText={ (width) => this.setState({width}) } />

        <Text>
          Height:
        </Text>
        <TextInput keyboardType="numeric" value={this.state.height.toString()} style={{width: 100, height:40}} onChangeText={ (height) => this.setState({height}) } />


        <Text>Num Mines:</Text>
        <TextInput keyboardType="numeric" value={this.state.numMines.toString()} style={{width: 100, height:40}} onChangeText={ (numMines) => this.setState({numMines}) } />

        <TouchableHighlight onPress={this.startNewGame}>
        	<Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }

  renderBoard() {
    return (
      <Board />
    );
  }
  render() {
    if (!this.state.gameStarted) {
      return this.renderNewGameControls();
    } else {
      return this.renderBoard();
    }
  }

}
