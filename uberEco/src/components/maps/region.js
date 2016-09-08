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
      error: false
    };
	},
  componentWillMount: function() {
  navigator.geolocation.getCurrentPosition(
    (initialPosition) => {
      var lng = initialPosition.coords.longitude;
      var lat = initialPosition.coords.latitude;
      this.checkRegion(lat, lng);
    },
    (error) => { console.log(error) },
    {enableHighAccuracy: true, timeout: 10000, maximumAge: 0}
  );

  },
  render: function() {
    if (this.state.error) {
    	return (
        <View style={styles.container}>
          <Text style={styles.error}>An error occured...</Text>
        </View>
    	);
    }

  	return (
      <View style={styles.container}>
      	<ActivityIndicator animating={true} size={'large'} style={styles.activity} />
      	<Text style={styles.text}>checking region</Text>
      </View>
  	);
  },
  checkRegion: function(lat, lng) {

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('http://localhost:3000/api/region', {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
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
      		this.props.navigator.push({name: 'request'});
      	}
      })
      .catch((error) => {
        console.error(error);
        this.setState({error: true});
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
  },
  error: {
  	color: 'red'
  }
});