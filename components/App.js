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
    this.handleChangeWidth = this.handleChangeWidth.bind(this);
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
    //this.key.width.toString()

    /*Actions.startGame(
    	this.state.width,
    	this.state.height,
    	this.state.numMines
    );
    */
  }

  

  handleChangeWidth(text) {
    window.alert("text");
    //console.log(event);
    //window.alert(event.nativeEvent.ref.vidth.defaultValue);

    window.alert(text);
    //this.state.width=18; 
    this.setState({ width: text }) 
    //window.alert(this.state.width.toString());

    

    
    //that.setState({ width: text });
  }
  
  renderNewGameControls() {
    return (
      <View style={styles.container}>
        <Text>
          Width:
        </Text>
        <TextInput ref="width" keyboardType="numeric" defaultValue={this.state.width.toString()} style={{width: 100, height:40}} onChangeText={ this.handleChangeWidth } />

        <Text>
          Height:
        </Text>
        <TextInput keyboardType="numeric" defaultValue={this.state.height.toString()} style={{width: 100, height:40}} onChangeText={ (height) => this.setState({height}) } />


        <Text>Num Mines:</Text>
        <TextInput keyboardType="numeric" defaultValue={this.state.numMines.toString()} style={{width: 100, height:40}} onChangeText={ (numMines) => this.setState({numMines}) } />

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
