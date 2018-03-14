/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { announceForAccessibility, focusOnView } from 'react-native-accessibility';

export default class App extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress = () => {
    announceForAccessibility('This is a message annoucement using Max\'s library')
    console.log("Button pressed!")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        ref={"Hello"}
        accessible={true}
        accessibilityLabel={'Tap me!'}
        onPress={this._onPress}
        >
          <View>
              <Text>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
