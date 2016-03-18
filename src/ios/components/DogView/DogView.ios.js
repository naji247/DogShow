//@flow
'use strict';
import React, {
  Component,
  Image,
} from 'react-native';

var styles = require('./DogView.css.js');

class DogView extends Component {
  render() {
    var dog = this.props.dog;
    return (
        <Image style={styles.dogView} source={{uri: dog.src}} ></Image>
    );
  }
}

module.exports = DogView;
