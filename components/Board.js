import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles';


export default class Board extends Component {

  render() {
    const { state, increment, decrement } = this.props;
    console.log("Board 14");
    console.log(this.props);
    console.log("Board 16");
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Component/Board.js
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload, {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }

}
