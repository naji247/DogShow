//@flow
'use strict';
import React, {
  Dimensions,
  Component,
  TouchableWithoutFeedback,
  Text,
  Image,
  View
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as rankScreenActions from '../../actions/rankScreenActions.js';
import { connect } from 'react-redux';

var TitleView = require('../TitleView/TitleView.js');
var LeaderButton = require('../LeaderButton/LeaderButton.js');
var DogView = require('../DogView/DogView.js');
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
    var middle = 90 + .5 * (Dimensions.get('window').height - 85);

    if (dog1 != null && dog2 != null) {
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
  }

  render() {
    const { state, actions } = this.props;
    const { dog1, dog2 } = state.rankScreen;

    return (
      <View style={styles.container}>
        <TitleView button="leader" title="DogShow"></TitleView>
          <DogView dog={dog1}></DogView>
          <DogView dog={dog2}></DogView>
        <TouchableWithoutFeedback onPress={this.vote.bind(this)} style={styles.orTextWrapper}>
          <View style={styles.orTextWrapper}>
            <Image style={styles.defaultText} source={require('./circle_or.png')}/>
          </View>
        </TouchableWithoutFeedback>
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
