import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  MapView
} from 'react-native';

module.exports = React.createClass({
  render: function() {
  	return (
      <View style={styles.container}>
      	<MapView 
      	  style={styles.map} 
      	  initialRegion={{
		        latitude: 37.78825,
		        longitude: -122.4324,
		        latitudeDelta: 0.0922,
		        longitudeDelta: 0.0421,
		      }}
      	/>
      	<View style={styles.footer}>
      	</View>
      </View>
  	);
  }
});

var styles = StyleSheet.create({
  container: {
  	flex: 1
  },
  map: {
  	flex: 2
  },
  footer: {
  	flex: 1
  }
});