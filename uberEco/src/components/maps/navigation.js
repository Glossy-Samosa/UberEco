import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';

var { width, height } = Dimensions.get('window');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      region: {
        latitude: 37.789929,
        longitude: -122.409992,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      },
      origin: this.props.route.origin,
      destination: this.props.route.destination,
      stationA: this.props.route.stationA,
      stationB: this.props.route.stationB
    };
  },
  render: function() {
    console.log(this.state.stationA, this.state.stationB);
    //need markers on the map for:
      // 1. current location
      // 2. station 1 location
      // 3. station 2 location
      // 4. destination location

      //these are all hardcoded example points
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsPointsOfInterest={false}
        >
          <MapView.Marker
            coordinate={{latitude: this.state.stationA.lat, longitude: this.state.stationA.lon}}
            title={'station A'}
            description={'get bike here'}
            pinColor={'red'}
          />
          <MapView.Marker
            coordinate={{latitude: this.state.stationB.lat, longitude: this.state.stationB.lon}}
            title={'station B'}
            description={'leave bike here'}
            pinColor={'blue'}
          />
          <MapView.Marker
            coordinate={{latitude: this.state.destination.lat, longitude: this.state.destination.lon}}
            title={'destination'}
            description={'final destination'}
            pinColor={'green'}
          />
        </MapView>
        <View style={styles.directions}>
          <Text style={styles.header}>Directions</Text>

          <Text style={styles.steps}><Text style={styles.bold}>Step 1</Text>: Walk to the red pin {this.state.stationA.name}</Text>
          <Text style={styles.steps}><Text style={styles.bold}>Step 2</Text>: Rent a bike and ride to the blue pin {this.state.stationB.name}</Text>
          <Text style={styles.steps}><Text style={styles.bold}>Step 3</Text>: Drop off your bike and walk to your destination the green pin</Text>

        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: height * (1 / 3),
  },
  directions: {
    position: 'absolute',
    top: height * (2 / 3),
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    fontSize: 20,
    color: '#555',
    marginTop: 5
  },
  steps: {
    marginTop: 5
  },
  bold: {
    fontWeight: 'bold'
  }
});