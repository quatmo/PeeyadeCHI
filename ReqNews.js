/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         نام مکان
        </Text>
        <TextInput
        style={{
          alignSelf: 'stretch',
          flexDirection:'row',
          height: 30,
          borderColor: 'gray',
          borderWidth: 1,
          margin:10
        }}
        />
       

        <Text style={styles.instructions}>
         آدرس مکان
        </Text>
        <TextInput
          style={{
            alignSelf: 'stretch',
            flexDirection:'row',
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            margin:10
          }}/>
       

        <Text style={styles.instructions}>
         راهنمای تهیه گزارش
        </Text> 
        <TextInput
        style={{
          alignSelf: 'stretch',
          flexDirection:'row',
          height: 150,
          borderColor: 'gray',
          borderWidth: 1,
          margin:10
        }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
