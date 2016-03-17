//@flow
'use strict';
import React, {
  View,
  ListView,
  RecyclerViewBackedScrollView
} from 'react-native';

var TitleView = require('../TitleView/TitleView.ios.js');
var LeaderButton = require('../LeaderButton/LeaderButton.ios.js');
var DogView = require('../DogView/DogView.ios.js');
var styles = require('./LeaderScreen.css.js');

var LeaderScreen = React.createClass({
  getInitialState: function() {
    var dogs = [{"_id":"56e90f920d6a56cfce540cb9","reportCount":0,"losses":0,"wins":1,"rating":1200,"src":"http://germanshepherdtribune.com/wp-content/uploads/2015/07/cute-german-shepherd-puppy-hd-wallpapers-desktop-background-images-widescreen.jpg","__v":0},{"_id":"56e9e0e8579aafabe9c1cb67","reportCount":0,"losses":0,"wins":0,"rating":1200,"src":"http://www.petpicturegallery.com/pictures/dogs/puppy/118-dog_puppy_cute_puppy.jpg","__v":0},{"_id":"56e9e2290ee056ffe9ce462e","reportCount":0,"losses":0,"wins":0,"rating":1200,"src":"http://puppyintraining.com/wp-content/uploads/2013/01/golden-retriever-clover.jpg","__v":0}];

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(dogs),
    };
 },

  render: function() {
    return (
      <View style={styles.container}>
        <TitleView title="DogShow"></TitleView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderScrollComponent={props => <RecyclerViewBackedScrollView style={styles.listView} {...props} />}
        />
      </View>
    );
  },

  _renderRow: function(rowData) {
    return (
      <View style={styles.row}>
        <DogView dog={rowData}></DogView>
      </View>
    );
  }
});

module.exports = LeaderScreen;
