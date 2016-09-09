import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

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
      },
      destination: {
        formattedAddress: ''
      }
    };
  },
  render: function() {
    return (
      <View style={styles.container}>
        
        <View style={styles.top}>
          <Text style={styles.subheader}>Enter Destination</Text>
          <TextInput 
            style={styles.input} 
            onChange={this.onInputChange}
          />
          <Text style={styles.address}>{this.state.destination.formattedAddress}</Text>

        </View>

        <MapView 
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          showsPointsOfInterest={false}
        >
          <MapView.Marker 
            coordinate={this.state.annotation}
            ref={ref => { this.annotation = ref; }}
          >
            <MapView.Callout style={styles.callout}>
              <View>
                <Text>set location</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>

        <View style={styles.bottom}>
          <Button text={'request ride'} onPress={this.onRequestPress} />
        </View>
     
      </View>
    );
  },
  onInputChange: function(event) {
    Geocoder.geocodeAddress(event.nativeEvent.text)
      .then(res => {
        console.log(res[0]);
        this.setState({destination: res[0]});
      })
      .catch(err => console.log(err));
  },
  onRegionChange: function(region) {
    this.setState({
      annotation: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  },
  onRegionChangeComplete: function(region) {
    this.annotation.showCallout();
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
    margin: 5,
    width: 300,
    alignSelf: 'center'
  },
  subheader: {
    fontSize: 20,
    color: '#555',
    alignSelf: 'center',
    marginTop: 20
  },
  address: {
    fontSize: 18,
    color: '#428bca',
    alignSelf: 'center',
    width: 300,
    marginTop: 5
  },
  callout: {
    width: 75
  }
});