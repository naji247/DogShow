//@flow
'use strict';
import React, {
  Component,
  Image,
} from 'react-native';

var styles = require('./DogView.css.js');

class DogView extends Component {
  render() {
    var { dog } = this.props;
    if (dog == null) {
      dog = { src: "http://www.jqueryscript.net/images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg" };
    }
    return (
        <Image style={styles.dogView} source={{uri: dog.src}} ></Image>
    );
  }
}

module.exports = DogView;
