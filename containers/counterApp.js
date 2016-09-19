'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
//import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to Component/Board.js
        </Text>
        <Text>
          To get started, edit index.ios.js
        </Text>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
