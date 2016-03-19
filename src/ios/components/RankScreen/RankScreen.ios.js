//@flow
'use strict';
import React, {
  Component,
  Text,
  View
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as rankScreenActions from '../../actions/rankScreenActions.js';
import { connect } from 'react-redux';

var TitleView = require('../TitleView/TitleView.ios.js');
var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var DogView = require('../DogView/DogView.ios.js');
var styles = require('./RankScreen.css.js');

class RankScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchRivals } = this.props.actions;
    fetchRivals();
  }

  render() {
    const { state, actions } = this.props;
    const { dog1, dog2 } = state.rankScreen;

    return (
      <View style={styles.container}>
        <TitleView button="leader" title="DogShow"></TitleView>
          <DogView dog={dog1}></DogView>
          <DogView dog={dog2}></DogView>
        <View style={styles.orTextWrapper}>
          <Text style={styles.defaultText}>OR</Text>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  state: state
}),
    (dispatch) => ({
      actions: bindActionCreators(rankScreenActions, dispatch)
    })
    )(RankScreen);
