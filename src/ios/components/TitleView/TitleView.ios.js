//@flow
'use strict';
import React, {
  Component,
  Image,
  Text,
  View
} from 'react-native';

var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var RankButton = require('../RankButton/RankButton.ios.js');
var styles = require('./TitleView.css.js');

class TitleView extends Component {
  render() {
    var leaderButton = <LeaderButton hide={true}></LeaderButton>;
    var rankButton = <RankButton hide={true}></RankButton>;
    if ( this.props.button == "leader" ) {
      leaderButton = <LeaderButton ></LeaderButton>;
    } else {
      rankButton = <RankButton ></RankButton>;
    }
    return (
      <View style={styles.titleView}>
        {rankButton}
        <Text style={styles.titleFont}>{this.props.title}</Text>
        {leaderButton}
      </View>
    );
  }
}

module.exports = TitleView;
