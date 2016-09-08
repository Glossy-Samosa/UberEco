import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

module.exports = React.createClass({
	getInitialState: function() {
    return {
      lat: null,
      lng: null
    };
	},
  componentWillMount: function() {
  navigator.geolocation.getCurrentPosition(
    (initialPosition) => {
      var lat = initialPosition.coords.longitude;
      var lng = initialPosition.coords.latitude;
      this.checkRegion(lat, lng);
    },
    (error) => { console.log(error) },
    {enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
  );

  },
  render: function() {
  	return (
      <View style={styles.container}>
      	<ActivityIndicator animating={true} size={'large'} style={styles.activity} />
      	<Text style={styles.text}>checking region</Text>
      </View>
  	);
  },
  checkRegion: function(lat, lng) {
    // POST /api/region

    // response 404, not in region
    // MIMICING A 404 RESPONSE
    // setTimeout(function() {
    //   this.props.navigator.push({name: 'suggest'});
    // }.bind(this), 2000);

    // response 200, in region
    // MIMICING A 200 RESPONSE
    setTimeout(function() {
      this.props.navigator.push({name: 'request'});
    }.bind(this), 2000);
  }
});

var styles = StyleSheet.create({
  container: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    transform: [{scale: 1.5}]
  },
  text: {
  	fontSize: 20,
  	color: '#555',
  	marginTop: 20
  }
});