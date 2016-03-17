/**
 * DogShow - An app that ranks puppies.
 * https://github.com/nalnaji/DogMash
 *
 * @flow
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

var RankScreen = require('./src/ios/RankScreen/RankScreen.ios.js');
var LeaderScreen = require('./src/ios/LeaderScreen/LeaderScreen.ios.js');

class DogShow extends Component {
  render() {
    return (
				<Navigator
						initialRoute={{name: 'RankScreen', index: 0}}
						renderScene={(route, navigator) =>
              <LeaderScreen
								onForward={() => {
									var nextIndex = route.index + 1;
									navigator.push({
										name: 'Leaderboard',
										index: nextIndex,
									});
								}}
								onBack={() => {
									if (route.index > 0) {
										navigator.pop();
									}
								}}
							/>
						}
					/>
    );
  }
}

AppRegistry.registerComponent('DogShow', () => DogShow);
