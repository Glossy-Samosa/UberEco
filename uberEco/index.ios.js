/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView
} from 'react-native';
var style = require('./styles/stylesheet.js');

class uberEco extends Component {
  render() {
    return (
      // <View style={style.container}>
      //   <Text style={style.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={style.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={style.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>


      <MapView
        style={{height: 200, margin: 40}}
        showsUserLocation={true}
        region={{
          latitude: 37.788372,
          longitude: -122.410196,
          latitudeDelta: .045, 
          longitudeDelta: .045
        }}
      />
    );
  }
}

AppRegistry.registerComponent('uberEco', () => uberEco);
