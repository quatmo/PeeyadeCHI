import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image
} from 'react-native';

export class Progre extends Component {
  render() {
    return (
      <View style={{height:this.props.height,flexDirection:'row'}}>
        <View style={{backgroundColor:'white',flex:100-this.props.progress}}>
        </View>
        <View style={{backgroundColor:'black',flex:this.props.progress}}>
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
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  buttonStyle:{
    backgroundColor: '#333333',
    alignSelf: 'stretch',
    flexDirection:'row',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default Progre;