//@flow
'use strict';
import React, {
  View,
  Component,
  Image,
  Text,
} from 'react-native';

var styles = require('./DogView.css.js');
var rankImages = [
require('./circle_1.png'),
require('./circle_1.png'),
require('./circle_2.png'),
require('./circle_3.png'),
require('./circle_4.png'),
require('./circle_5.png'),
require('./circle_6.png'),
require('./circle_7.png'),
require('./circle_8.png'),
require('./circle_9.png'),
require('./circle_10.png'),
];

var DogView = React.createClass( {
  getInitialState() {
    return ({ loaded: false });
  },
  loaded: function() {
    this.setState({loaded: true});
  },
  render: function() {
    var { dog, rank } = this.props;
    var rankJSX = null;
    if ( rank ) {
rankJSX = <Image style={styles.rankNumber} source={rankImages[rank]} />;
    }
  
    var dogViewJSX = <LoadingDogView/>;
    if (dog != null) {
      dogViewJSX = <Image onLoad={this.loaded} style={styles.dogView} source={{uri: dog.src}} >{rankJSX}</Image>;
    }

    return (
      <View style={styles.dogView} >
        {dogViewJSX}
      </View>
    );
  }
});

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var LoadingDogView = React.createClass( {
  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {
      displayText: "Loading",
      count: 0
    }
  },
  
  updateCounter: function() {
    var { displayText, count } = this.state
    if ( count < 3 ) {
      count++;
      displayText = displayText + ".";
    } else {
      count = 0;
      displayText = "Loading";
    }
    this.setState({count: count, displayText: displayText});
  },
  
  componentDidMount: function() {
    this.setInterval(this.updateCounter, 200);
  },

  render: function() {
    return (
      <View style={styles.loadingDogView}>
        <Text style={styles.loadingDogText}>{this.state.displayText}</Text>
      </View>
    );
  }
});

module.exports = DogView;
