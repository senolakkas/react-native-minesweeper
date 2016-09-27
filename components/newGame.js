import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
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

  render() {
    const { height,width,numMines,gameStarted, increment, decrement } = this.props;

    console.log("containers/NewGame 31");
    console.log(this.props);
    console.log("containers/NewGame 33");  

    return (
      <View style={styles.container}>
        <Text>Width: </Text>
        <TextInput ref="width" keyboardType="numeric" style={{ width: 100, height: 40 }}/>

        <Text>
          Height:
        </Text>
        <TextInput keyboardType="numeric"  style={{ width: 100, height: 40 }} />


        <Text>Num Mines: </Text>
        <TextInput keyboardType="numeric" style={{ width: 100, height: 40 }} />

        <TouchableHighlight >
          <Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
