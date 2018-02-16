import React, { Component } from 'react';
//import { ButtonGroup,Header } from 'react-native-elements'
import JalaliCalendarPicker from 'react-native-jalali-calendar-picker';
import TimePicker from 'react-native-simple-time-picker';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Modal from 'react-native-simple-modal';

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
        openTime:false,
        openDate:false,
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
            <TouchableOpacity 
                style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                onPress={() => this.setState({openTime: true})}>
              <Text>تنظیم ساعت</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
              onPress={() => this.setState({openDate: true})}>
              <Text>تنظیم تاریخ</Text>
            </TouchableOpacity>
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
          <Modal
              offset={this.state.offset}
              open={this.state.openDate}
              modalDidOpen={() => console.log('modal did open')}
              modalDidClose={() => this.setState({openDate: false})}
              style={{alignItems: 'center'}}>
              <View style={{alignItems:'center'}}>
                <Text style={{alignItems:'center',fontSize: 20, marginBottom: 10}}>انتخاب تاریخ</Text>
               {/* <TimePicker
                    selectedHours={selectedHours}
                    selectedMinutes={selectedMinutes}
                    onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
               />*/}
          <JalaliCalendarPicker
            onDateChange={this.onDateChange}
          />
         {/* <TouchableOpacity
          style={{margin: 5}}
          onPress={() => this.setState({offset: -100})}>
            <Text>Move modal up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() => this.setState({offset: 0})}>
            <Text>Reset modal position</Text>
         </TouchableOpacity>*/}
          <TouchableOpacity
            style={{margin: 5,alignItems:'center'}}
            onPress={() => this.setState({openDate: false})}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        offset={this.state.offset}
        open={this.state.openTime}
        modalDidOpen={() => console.log('modal did open')}
        modalDidClose={() => this.setState({openTime: false})}
        style={{alignItems: 'center'}}>
        <View>
          <Text style={{alignItems:'center',fontSize: 20, marginBottom: 10}}>انتخاب ساعت</Text>
          <TimePicker
              selectedHours={selectedHours}
              selectedMinutes={selectedMinutes}
              onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
            />
         
         {/* <TouchableOpacity
          style={{margin: 5}}
          onPress={() => this.setState({offset: -100})}>
            <Text>Move modal up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{margin: 5}}
            onPress={() => this.setState({offset: 0})}>
            <Text>Reset modal position</Text>
         </TouchableOpacity>*/}
          <TouchableOpacity
            style={{margin: 5,alignItems:'center'}}
            onPress={() => this.setState({openTime: false})}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
