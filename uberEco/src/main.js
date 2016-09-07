import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';

var Login = require('./components/authentication/login');
var Signup = require('./components/authentication/signup');

var ROUTES = {
  login: Login,
  signup: Signup
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
        initialRoute={{name: 'login'}}
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
})