/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import { Button,SearchBar } from 'react-native-elements';
//import Icons from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Item, Input } from 'native-base';
import SelectMultiple from 'react-native-select-multiple'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Icon,
  TextInput,
//  Button
} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const fruits = ['honda','kotlin','آرش توکلی', 'ساتوشی', 'ناکامورا','استیو وزنیاک', 'جابز امپرالیست', 'بیل گیتس']
type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()
    this.state = {
      selectedFruits: [],
      selectedIndex: 2,
      text:'جستجو'
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['تایید']
    const { selectedIndex } = this.state
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    return (
      <View style={{}}>

        <SearchBar
          noIcon
          lightTheme={true}
          onChangeText={()=>{}}
          onClearText={()=>{}}
          placeholder='جستجو' />


      
  
         <TextInput
            style={{borderRadius:300,textAlign:'center',backgroundColor:'grey',marginHorizontal:20,height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            onFocus={()=> this.setState({}) }
            value={this.state.text}/>
            
        
     
        <View style={{flexDirection:'row'}}>
        
          <Dropdown
            style={{textAlign:'center'}}
            containerStyle={{flex:10,}}
            //label=' پایه'
            itemTextStyle={{}}
            data={data}
          />
          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
            پیاده چی
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Dropdown
            style={{textAlign:'center'}}
            containerStyle={{flex:10}}
            //label='دسته‌ی اصلی'
            data={data}
          />
          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
            پیاده چی
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Dropdown
            style={{textAlign:'center'}}
            containerStyle={{flex:10}}
            //label='مهارت‌ها'
            data={data}
          />
          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
            پیاده چی
          </Text>
        </View>
       
        <Button
             buttonStyle={styles.buttonStyle}
             title="تایید"
             onPress={() => {}}
        />
       
        
      <Text style={{alignSelf:'flex-end',padding:10}}>
        پیاده چی
      </Text>
      <SelectMultiple
          style={{direction:'rtl'}}
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchIcon: {
    padding: 10,
},
buttonStyle:{
  backgroundColor: '#333333',
  height:30
  //borderColor: 'red',
 // borderWidth: 5,
  //borderRadius: 15
}
  ,
  passwordContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
  },
  inputStyle: {
    flex: 1,
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
