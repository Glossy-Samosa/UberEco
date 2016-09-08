import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

module.exports = React.createClass({
  componentWillMount: function() {

  },
  render: function() {
  	return (
      <View style={styles.container}>
      	<ActivityIndicator animating={true} size={'large'} style={[styles.centering, {transform: [{scale: 1.5}]}]} />
      	<Text>checking region</Text>
      </View>
  	);
  }
});

var styles = StyleSheet.create({
  container: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
});