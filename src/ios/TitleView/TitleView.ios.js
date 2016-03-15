//@flow
'use strict';
import React, {
  Component,
  Image,
  Text,
  View
} from 'react-native';

var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var styles = require('./TitleView.css.js');

class TitleView extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleFont}>{this.props.title}</Text>
        <LeaderButton> </LeaderButton>
      </View>
    );
  }
}

module.exports = TitleView;
