//@flow
'use strict';
import React, {
  View,
  ListView,
  RecyclerViewBackedScrollView
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as leaderScreenActions from '../../actions/leaderScreenActions.js';
import { connect } from 'react-redux';

var TitleView = require('../TitleView/TitleView.ios.js');
var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var DogView = require('../DogView/DogView.ios.js');
var styles = require('./LeaderScreen.css.js');

var LeaderScreen = React.createClass({
  componentDidMount: function() {
    const { actions } =  this.props;
    const { dogs } = this.props.state.leaderScreen;

    actions.fetchLeaders();
  },

  render: function() {
    const { dogs } = this.props.state.leaderScreen;

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var leaders = ds.cloneWithRows(dogs);

    return (
      <View style={styles.container}>
        <TitleView button="rank" title="DogShow"></TitleView>
        <ListView
          dataSource={leaders}
          renderRow={this._renderRow}
          renderScrollComponent={props => <RecyclerViewBackedScrollView style={styles.listView} {...props} />}
        />
      </View>
    );
  },

  _renderRow: function(rowData, sectionID, rowID) {
    return (
      <View style={styles.row}>
        <DogView dog={rowData} rank={parseInt(rowID)+1}></DogView>
      </View>
    );
  }
});

export default connect(state => ({
  state: state
}),
    (dispatch) => ({
      actions: bindActionCreators(leaderScreenActions, dispatch)
    })
    )(LeaderScreen);
