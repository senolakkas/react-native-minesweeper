import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from './../styles';


export default class Scoreboard extends Component {

  render() {
    const { state, increment, decrement } = this.props;
    console.log("Board 14");
    console.log(this.props);
    console.log("Board 16");
    return (
     <View>
        <Text>{this.props.children}</Text>
     </View>
    )
  }

}
