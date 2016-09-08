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
    navigator.geolocation.getCurrentPosition(
      function(initialPosition) {
        var lng = initialPosition.coords.longitude;
        var lat = initialPosition.coords.latitude;
        this.checkRegion(lat, lng);  
      }.bind(this),
      function(error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );
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
          <Button text={'request ride'} onPress={this.onRequestPress} />
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
  },
  onRequestPress: function() {

  },
  checkRegion: function(lat, lng) {
    setTimeout(function() {
      this.setState({inRegion: false})
    }.bind(this), 1000);
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
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  subheader: {
    fontSize: 20,
    color: '#555',
    alignSelf: 'center',
    marginTop: 20
  }
});