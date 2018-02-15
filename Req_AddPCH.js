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
  Image
} from 'react-native';
import TokenBox from './TokenBox'
import { Button } from 'react-native-elements';
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
      <View style={{marginTop: 30,backgroundColor:'#DDDDDD'}}>
        
        <View style={{}}>
            <Text style={{alignSelf:'flex-end',marginRight:20}}>
              اضافه کردن نویسنده
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                <TokenBox name="آرش آقاجانی"/>
            </View>

            <Button
                buttonStyle={styles.buttonStyle}
                title="+"
                onPress={() => {}}
            />
      </View>
        
      <View>
           <Text style={{alignSelf:'flex-end',marginRight:20}}>
              اضافه کردن فیلم بردار
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
            </View>

            <Button
                buttonStyle={styles.buttonStyle}
                title="+"
                onPress={() => {}}
            />
      </View>
      <View>
           <Text style={{alignSelf:'flex-end',marginRight:20}}>
              اضافه کردن عکاس
            </Text>
            <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
                <TokenBox name="آرش آقاجانی"/>
            </View>

            <Button
                buttonStyle={styles.buttonStyle}
                title="+"
                onPress={() => {}}
            />
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
    height:2,
    margin: 0,
    padding:8 ,
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
