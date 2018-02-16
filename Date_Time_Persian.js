import React, { Component } from 'react';
//import { ButtonGroup,Header } from 'react-native-elements'
import JalaliCalendarPicker from 'react-native-jalali-calendar-picker';
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
        selectedStartDate: null,
    }
    this.updateIndex = this.updateIndex.bind(this)
    this.onDateChange = this.onDateChange.bind(this);
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Hello', 'World']
    const { selectedHours, selectedMinutes } = this.state;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.format('jYYYY/jM/jD [is] YYYY/M/D') : '';
 
    return (
      
      <View style={styles.container}>
     
      
       

       <View style={styles.container}>
        <Text>{selectedHours}:{selectedMinutes}</Text>
        <Text>{startDate}</Text>
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
        />
      </View>
        
      <View style={styles.container}>
      <JalaliCalendarPicker
         onDateChange={this.onDateChange}
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
