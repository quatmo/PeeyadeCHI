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
  ListView,
  Image,
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

  constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          
          dataSource: ds.cloneWithRows([
            {ff:'این پارک',name:'آرش آقاجانی',score:'120'},
            {ff:'این پارک',name:'آرشام ',score:'100'},
            {ff:'این پارک',name:'آرشیدا',score:'80'},
            {ff:'این پارک',name:'رشا',score:'60'},
            {ff:'این پارک',name:' میدوس آرش',score:'40'},
            {ff:'این پارک',name:'اوادا کاداورا',score:'20'}

          ])
          
        };
      }

  


      render() {
        return (
          <Text style={{backgroundColor:'#f0f0f0',height:60,alignItems:'center'}}>My swipeable content</Text>
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
  listview: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,

  },
  photo: {
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: 'stretch',
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
