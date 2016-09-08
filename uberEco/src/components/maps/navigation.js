import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  // MapView
} from 'react-native';
import MapView from 'react-native-maps';

module.exports = React.createClass({
	getInitialState: function() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
	},
  render: function() {
  	return (
      <View style={styles.container}>
      	<MapView 
          style={styles.map}
      	  initialRegion={this.state.region}
      	></MapView>
      </View>
  	);
  }
});

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});