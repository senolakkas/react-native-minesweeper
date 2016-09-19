'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import StartNewGameC from '../components/startNewGame';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';





// @connect(state => ({
//   state: state.counter
// }))
class StartNewGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <StartNewGameC />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(StartNewGame);
