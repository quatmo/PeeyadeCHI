import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

class SplashPage extends Component {
 
  
  componentWillMount() {
    
    setTimeout(() => {
      this.props.navigation.navigate("login");
    }, 1000);
  }
  render() {
    
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>///</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
