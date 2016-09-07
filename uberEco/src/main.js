import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

var Login = require('./components/authentication/login');
var Signup = require('./components/authentication/signup');
var Maps = require('./components/maps/request');

var ROUTES = {
	login: Login,
	signup: Signup,
  maps: Maps
};

module.exports = React.createClass({
	renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
	},
  render: function() {
    return (
      <Navigator 
        style={styles.container}
        initialRoute={{name: 'maps'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
  	flex: 1
  }
});