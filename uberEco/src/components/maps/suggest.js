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
      <View style={[styles.container, styles.center]}>
        <Text style={styles.header}>Sorry, we don't ride here</Text>
        <Text style={styles.subheader}>We're expanding quickly so please do check back soon!</Text>
        <Button text={'Vote for your area'} onPress={this.onVotePress} />
      </View>
    );
  },
  onVotePress: function() {
  	console.log('suggest area');
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  subheader: {
    fontSize: 20,
    color: '#555'
  }
});