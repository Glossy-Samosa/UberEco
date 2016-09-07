import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <TouchableHighlight 
      style={styles.button}
      underlayColor={'#449d44'}
      onPress={this.props.onPress}
      >
      	<Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
  	justifyContent: 'center',
  	alignItems: 'center',
  	borderWidth: 1,
  	borderRadius: 5,
  	padding: 5,
    backgroundColor: '#5cb85c',
  	borderColor: '#5cb85c',
  	marginTop: 10,
    minWidth: 100
  },
  buttonText: {
  	flex: 1,
  	alignSelf: 'center',
  	fontSize: 20,
    color: '#fff'
  }
});