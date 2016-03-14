/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleView title="DogShow"></TitleView>
        <View style={styles.dog}>
        </View>
      </View>
    );
  }
}

class TitleView extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleFont}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  titleView: {
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#9E7BFF',
  },
  titleFont: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    color: 'white',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
