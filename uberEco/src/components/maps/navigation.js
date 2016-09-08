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
  render: function() {
  	return (
      <View style={styles.container}>
      	<MapView 
      	  style={styles.map}
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