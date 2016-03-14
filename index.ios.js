/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableElement,
  TouchableHighlight,
  TouchableNativeFeedback,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleView title="DogShow"></TitleView>
          <DogView src="http://puppyintraining.com/wp-content/uploads/2013/01/golden-retriever-clover.jpg"></DogView>
          <DogView src="http://www.petpicturegallery.com/pictures/dogs/puppy/118-dog_puppy_cute_puppy.jpg"></DogView>
        <View style={styles.orTextWrapper}>
          <Text style={styles.defaultText}>OR</Text>
        </View>
      </View>
    );
  }
}

class TitleView extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <LeaderButton> </LeaderButton>
        <Text style={styles.titleFont}>{this.props.title}</Text>
        <LeaderButton> </LeaderButton>
      </View>
    );
  }
}

var LeaderButton = React.createClass({
  buttonClicked: function() {
    console.log('button clicked');
  },
  render: function() {
    var TouchableElement = TouchableHighlight;
    return (
        <View style={styles.leaderBoardView}>
          <TouchableElement
            style={styles.button}
            onPress={this.buttonClicked}>
            <View>
              <Image style={styles.leaderBoardRibbon}
              resizeMode='contain'
              source={require('./ribbon.png')} ></Image>
            </View>
          </TouchableElement>        
        </View>
        );
  }
});       


class DogView extends Component {
  render() {
    return (
        <Image style={styles.dogView} source={{uri: this.props.src}} >
        </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFCFF',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },

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
    flex: 1
  },
  dogView: {
    flex: 1,
  },
  orTextWrapper: {
    top: 85,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    backgroundColor: "#9E7BFF",
    padding: 10,
    borderRadius: 22,
    color: 'white',
    fontFamily: 'Lato',
    fontSize: 20,
    overflow: 'hidden',
  },
  leaderBoardRibbon: {
    height: 35,
    width: 35,
  },
  leaderBoardView: {
    margin: 25,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
