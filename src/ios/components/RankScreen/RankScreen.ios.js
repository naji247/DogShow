//@flow
'use strict';
import React, {
  Dimensions,
  Component,
  TouchableHighlight,
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

  vote(e) {
    const { state, actions } = this.props;
    const { dog1, dog2 } = state.rankScreen;
    var middle = 85 + .5 * (Dimensions.get('window').height - 85);

    if (e.nativeEvent.pageY <= middle) {
      //Action: Select top dog as winner
      actions.rivalVote(dog1, dog2);
      
    } else {
      //Action: Select bottom dog as winner
      actions.rivalVote(dog2, dog1);
    }

    //Action: Get new dogs
    actions.fetchRivals();
  }

  render() {
    const { state, actions } = this.props;
    const { dog1, dog2 } = state.rankScreen;

    return (
      <View style={styles.container}>
        <TitleView button="leader" title="DogShow"></TitleView>
          <DogView dog={dog1}></DogView>
          <DogView dog={dog2}></DogView>
        <TouchableHighlight onPress={this.vote.bind(this)} style={styles.orTextWrapper}>
          <Text style={styles.defaultText}>OR</Text>
        </TouchableHighlight>
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
