/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableHighlight
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
      <View style={{flex: 1}}>
        <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height-100}}>
        <Text style={styles.welcome}>
          نام
        </Text>
        <TextInput
        style={styles.inputstyle}
        />
        <Text style={styles.welcome}>
          آدرس
        </Text>
        <TextInput
        style={styles.inputstyle}
        />
        <Text style={styles.welcome}>
          آدرس
        </Text>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight
            onPress={() => {}}
            style={[styles.button, {justifyContent:'center',backgroundColor: 'gray'}]}>
            <Text
              style={{marginTop:10,fontWeight:'800',justifyContent:'center',alignItems:'center',textAlign:'center',width: Dimensions.get('window').width/4, height: 30,alignSelf:'stretch'}}>خبر  </Text>
          </TouchableHighlight>

           <TouchableHighlight
            onPress={() => {}}
            style={[styles.button, {justifyContent:'center',backgroundColor: 'gray'}]}>
            <Text
              style={{marginTop:10,fontWeight:'800',justifyContent:'center',alignItems:'center',textAlign:'center',width: Dimensions.get('window').width/4, height: 30,alignSelf:'stretch'}}>رویداد </Text>
          </TouchableHighlight>

           <TouchableHighlight
            onPress={() => {}}
            style={[styles.button, {justifyContent:'center',backgroundColor: 'gray'}]}>
            <Text
              style={{marginTop:10,fontWeight:'800',justifyContent:'center',alignItems:'center',textAlign:'center',width: Dimensions.get('window').width/4, height: 30,alignSelf:'stretch'}}>مکان </Text>
          </TouchableHighlight>
          
        </View>
        

        <Text style={styles.welcome}>
          توضیحات
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
        <View style={{justifyContent:'center',backgroundColor:'gray',alignItems:'center',width: Dimensions.get('window').width, height: 50}}>
          <TouchableHighlight
            onPress={() => {}}
            style={[styles.button, {justifyContent:'center',backgroundColor: 'gray'}]}>
            <Text
              style={{marginTop:15,fontWeight:'800',justifyContent:'center',alignItems:'center',textAlign:'center',width: Dimensions.get('window').width, height: 50,alignSelf:'stretch'}}>ارسال </Text>
          </TouchableHighlight>

        </View>

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
  button:{
    margin:20,
    marginRight: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
  },
  inputstyle:{
    alignSelf: 'stretch',
    flexDirection:'row',
    margin:10,
    height: 40, borderColor: 'gray', borderWidth: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
