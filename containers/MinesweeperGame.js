'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import NewGame from '../components/newGame';
import Board from '../components/Board';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';





// @connect(state => ({
//   state: state.counter
// }))
class MinesweeperGame extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { state, actions } = this.props;




    console.log("containers/StartNewGame 30");
    console.log(this.props);
    console.log("containers/StartNewGame 32");
    if (state.gameStarted) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <NewGame state={state}
            {...actions} />
        </View>
      );
    } else {
      return (
        <Board
          counter={state.count}
          {...actions} />
      );
    }

  }
}

export default connect(state => ({
  state: state.counter
}),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(MinesweeperGame);
