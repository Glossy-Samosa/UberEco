/*
iOS index file
*/
import React, { Component } from 'react';
import {
  AppRegistry, Text, View
} from 'react-native';
var style = require('./Styles/stylesheet.js');

class App extends Component {
  render() {
    return (
      <View style={style.greenBackground}> </View>
    );
  }
}