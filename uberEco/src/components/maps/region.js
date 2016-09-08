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
    var lat = 37.7836966;
    var lng = -122.4089664;

    console.log('about to fetch');
    fetch('http://localhost:3000/api/region/', {
      method: 'POST',
      body: JSON.stringify({
        latitude: lat,
        longitude: lng
      })
    })
      .then((response) => { 
      	console.log(response.status); 
      	if (response.status === 404) {
      		this.props.navigator.push({name: 'suggest'});
      	} else if (response.status === 200) {
      		this.props.navigator.push({name: ' request'});
      	}
      })
      .catch((error) => {
        console.error(error);
      });
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