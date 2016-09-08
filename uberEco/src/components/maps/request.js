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
  getInitialState: function() {
    return {
      inRegion: null,
      pin: {
        latitude: 0,
        longitude: 0
      }
    };
  },
  componentWillMount: function() {
    // POST TO CHECK AVAILABLE REGION
    setTimeout(function() {
      this.setState({inRegion: false})
    }.bind(this), 1000);
  },
  render: function() {
    // WAITING FOR SERVER RESPONSE
    if (this.state.inRegion === null) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.subheader}>Loading...</Text>
        </View>
      );
    }
    
    // NOT IN AVAILABLE REGION
    if (!this.state.inRegion) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.header}>Sorry, we don't ride here</Text>
          <Text style={styles.subheader}>We're expanding quickly so please do check back soon!</Text>
          <Button text={'Vote for your area'} onPress={this.onVotePress} />
        </View>
      );
    }

    // IN REGION
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.subheader}>Enter Destination</Text>
          <TextInput style={styles.input} />
        </View>

        <MapView
          style={styles.map}
          onRegionChangeComplete={this.onRegionChangeComplete}
          annotations={[this.state.pin]}
          showsUserLocation={true}
          followUserLocation={true}
          scrollEnabled={false}
          zoomEnabled={false}
        />

        <View style={styles.bottom}>
          <Button text={'request ride'} />
        </View>
     
      </View>
    );
  },
  onRegionChangeComplete: function(region) {
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  },
  onVotePress: function() {
    this.setState({inRegion: true});
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
  top: {
    flex: 1
  },
  map: {
    flex: 6
  },
  bottom: {
    flex: 1,
    backgroundColor: '#5cb85c'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 300,
    alignSelf: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  subheader: {
    fontSize: 20,
    color: '#555',
    alignSelf: 'center'
  }
});