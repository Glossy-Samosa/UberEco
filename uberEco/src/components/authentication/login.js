import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Button = require('../common/button');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  },
  render: function() {
    return (
      <View 
        style={styles.container}
      >

        <Text style={styles.header}>Login</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.input} 
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput 
          secureTextEntry={true}
          style={styles.input} 
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
        />

        <Button text={'log in'} onPress={this.onLoginPress} />
      </View>
    );
  },
  onLoginPress: function() {

  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10
  },
  label: {
    fontSize: 20,
    color: '#555'
  }
});