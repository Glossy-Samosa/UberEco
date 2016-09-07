import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />


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
  input: {
    padding: 4,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  header: {
    fontSize: 30,
    margin: 10
  },
  label: {
    fontSize: 20
  }
});