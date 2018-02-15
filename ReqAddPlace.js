/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//import { ButtonGroup,Header } from 'react-native-elements'
//import PersianDatePicker from 'react-native-persian-date-picker';
import TimePicker from 'react-native-simple-time-picker';
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
  constructor () {
    super()
    this.state = {
      selectedIndex: 2,
        selectedHours: 0,
        selectedMinutes: 0,
      
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Hello', 'World']
    const { selectedHours, selectedMinutes } = this.state;
    return (
      
      <View style={styles.container}>
     
        <Text style={styles.persianLayout}>
          بیشترین امتیاز
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
         <Text style={styles.persianLayout}>
          مبلغ
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
        <Text style={styles.persianLayout}>
         روز و ساعت تهیه گزارش
        </Text>
      
        <Text style={styles.persianLayout}>
        ساعت
       </Text>
       

       <View style={styles.container}>
        <Text>{selectedHours}:{selectedMinutes}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // marginTop: 100,
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  persianLayout:{
    direction: "rtl",
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
