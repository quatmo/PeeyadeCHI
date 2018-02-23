/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Dropdown } from 'react-native-material-dropdown';
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
        <Text style={styles.welcome}>
         نام گزارش
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
          تاریخ تحویل 
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
        
{/* addiing row  */}
            <View style={{flexDirection:'row'}}>
              
              <View style={{flex:1}}>
                <Text style={styles.instructions}>
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
                  }}/>
              </View>
          
              <View style={{flex:1}}>
                <Text style={styles.instructions}>
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
                  }}/>
              </View>
            </View>



            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                <Dropdown 
                  label='انتخاب عکاس'
                  labelTextStyle={{alignItems:'center',textAlign:'center',justifyContent:'center'}}
                style={{marginHorizontal:10,textAlign:'center'}}
                data={[{value:"lala"},{value:"mini"},{value:"ddd"}]}
                    />
                
              </View>
          
              <View style={{flex:1}}>
                 <Dropdown 
                  label='انتخاب فیلمبردار'
                  labelTextStyle={{alignItems:'center',textAlign:'center',justifyContent:'center'}}
                style={{marginHorizontal:10,textAlign:'center'}}
                data={[{value:"lala"},{value:"mini"},{value:"ddd"}]}
                    />
              </View>
            </View>







            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                <Text style={styles.instructions}>
               تاریخ 
                </Text>

               <TouchableOpacity 
                style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                onPress={() => this.setState({openDate: true})}>
                <Text>تنظیم تاریخ</Text>
              </TouchableOpacity>

              </View>
          
              <View style={{flex:1}}>
                <Text style={styles.instructions}>
                   ساعت
                </Text>
            <TouchableOpacity 
                style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                onPress={() => this.setState({openTime: true})}>
              <Text>تنظیم ساعت</Text>
            </TouchableOpacity>
              </View>
            </View>


            <Text style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                         روز و ساعت تهیه گزارش 
            </Text>
                  
             
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
                <TouchableOpacity 
                  style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                  onPress={() => this.setState({openDate: true})}>
                  <Text>معین</Text>
                </TouchableOpacity>
              </View>
          
              <View style={{flex:1}}>
                <TouchableOpacity 
                  style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                  onPress={() => this.setState({openTime: true})}>
                <Text>اختیاری</Text>
              </TouchableOpacity>
              </View>
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