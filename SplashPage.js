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
 
  static navigationOptions = ({ navigation }) => ({
      title: `Welcome ${navigation.state.params.screen}`
    });
  componentWillMount() {
    
    setTimeout(() => {
      navigate("ScreenOne", {screen: "ScreenOne"});
    }, 1000);
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>商旅易</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
