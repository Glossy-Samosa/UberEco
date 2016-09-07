import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  View,
  TextInput,
  MapView
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  render: function() {
    return (
      <View>
        <MapView
          style={{height: 400, margin: 20}}
          showsUserLocation={true}
          region={{
            latitude: 37.788372,
            longitude: -122.410196,
            latitudeDelta: .045, 
            longitudeDelta: .045
          }}
        />
     
        <Text style={styles.label}>Enter Destination</Text>
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
  label: {
    alignSelf: 'center',
    fontSize: 20
  }
});