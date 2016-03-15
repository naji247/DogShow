//@flow
'use strict';
import React, {
  Component,
  Image,
  StyleSheet,
} from 'react-native';

class DogView extends Component {
  render() {
    var dog = this.props.dog;
    return (
        <Image style={styles.dogView} source={{uri: dog.src}} ></Image>
    )
  }
}

const styles = StyleSheet.create({
  dogView: {
    flex: 1,
  },
});

module.exports = DogView;
