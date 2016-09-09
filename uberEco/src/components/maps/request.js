import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  MapView
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      location: {
        latitude: 0,
        longitude: 0
      }
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.subheader}>Enter Destination</Text>
          <TextInput style={styles.input} />
        </View>

        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          annotations={[this.state.location]}
          showsUserLocation={true}
          followUserLocation={true}
          scrollEnabled={false}
          zoomEnabled={false}
        />

        <View style={styles.bottom}>
          <Button text={'request ride'} onPress={this.onRequestPress} />
        </View>
     
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      location: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  },
  onRequestPress: function() {
    this.props.navigator.push({name: 'navigation'});
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2
  },
  map: {
    flex: 11
  },
  bottom: {
    flex: 1,
    backgroundColor: '#5cb85c'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 300,
    alignSelf: 'center'
  },
  subheader: {
    fontSize: 20,
    color: '#555',
    alignSelf: 'center',
    marginTop: 20
  }
});