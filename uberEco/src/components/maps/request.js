import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      region: {
        latitude: this.props.route.location.lat,
        longitude: this.props.route.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      },
      annotation: {
        latitude: this.props.route.location.lat,
        longitude: this.props.route.location.lng,
      }
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.subheader}>Enter Destination</Text>
          <TextInput style={styles.input} />
          <ScrollView style={styles.scroll}>
            <Text>{this.props.passProps}</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
            <Text>Test</Text>
          </ScrollView>
        </View>

        <MapView 
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
        >
          <MapView.Marker 
            coordinate={this.state.annotation}
          />
        </MapView>

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
    flex: 3
  },
  map: {
    flex: 9
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
  scroll: {
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