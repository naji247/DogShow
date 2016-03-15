//@flow
'use strict';
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var LeaderButton = require('./LeaderButton.ios.js');

class TitleView extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleFont}>{this.props.title}</Text>
        <LeaderButton> </LeaderButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#9E7BFF',
    flex: .18,
    flexDirection: 'row',
  },

  titleFont: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 30,
    flex: 1,
    marginLeft: 70
  },
});

module.exports = TitleView;
