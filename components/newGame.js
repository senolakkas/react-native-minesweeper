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

  handleChangeWidth() {
    window.alert('Example Pressed');
    console.log("this.refs 30");
    console.log(this.refs);
    console.log("this.refs 32");
    //window.alert(this.refs.width.value.toString());
    //Window.alert(this.key.width.toString());
    //window.alert(text);
    //this.state.width=18;
    //this.setState({ width: text });

    //window.alert(this.state.width.toString());




    //that.setState({ width: text });
  }

  render() {
    const { height, width, numMines, gameStarted, increment, decrement } = this.props;

    console.log("containers/NewGame 31");
    console.log(this.props);
    console.log("containers/NewGame 33");

    return (
      <View style={styles.container}>
        <Text>Height: </Text>
        <TextInput
          ref="height"
          keyboardType="numeric"
          defaultValue={height.toString() }
          style={{ width: 100, height: 40 }}
          onChangeText={
            (text) => this.setState({ height: text })
          }
          />
        <Text>
          Width:
        </Text>
        <TextInput
          keyboardType="numeric"
          defaultValue={width.toString() }
          style={{ width: 100, height: 40 }}
          onChangeText={
            (text) => this.setState({ width: text })
          }
          />
        <Text>Num Mines: </Text>
        <TextInput
          keyboardType="numeric"
          defaultValue={numMines.toString() }
          style={{ width: 100, height: 40 }}
          onChangeText={
            (text) => this.setState({ numMines: text })
          }
          />
        <TouchableHighlight
          style={styles.button}
          onPress={decrement}
          >
          <Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
