import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  }
});