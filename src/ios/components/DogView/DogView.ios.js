//@flow
'use strict';
import React, {
  Component,
  Image,
  Text,
} from 'react-native';

var styles = require('./DogView.css.js');

class DogView extends Component {
  render() {
    var { dog, rank } = this.props;
    if (dog == null) {
      dog = { src: "http://www.jqueryscript.net/images/jQuery-Ajax-Loading-Overlay-with-Loading-Text-Spinner-Plugin.jpg" };
    }

    var rankJSX = null;
    if ( rank ) {
      rankJSX = <Text style={styles.rankNumber}>{rank}</Text>;
    }
    return (
      <Image style={styles.dogView} source={{uri: dog.src}} >
        {rankJSX}
      </Image>
    );
  }
}

module.exports = DogView;
