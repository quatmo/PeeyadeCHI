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
import { Button,SearchBar } from 'react-native-elements';

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
                دسته پیاده‌چی
              </Text>
              
            
              <View style={{margin:0,flexDirection:'row-reverse',flexWrap: 'wrap',}}>

                  <Button  buttonStyle={styles.buttonStyle}  title="تبلیغات‌چی"  onPress={() => {}}/>
                  <Button  buttonStyle={styles.buttonStyle}  title="فیلم‌چی"  onPress={() => {}}/>
                  <Button  buttonStyle={styles.darkbuttonStyle}  title="ژورنال"  onPress={() => {}}/>
                  <Button  buttonStyle={styles.buttonStyle}  title="عکس‌چی"  onPress={() => {}}/>
                  <Button  buttonStyle={styles.buttonStyle}  title="پایه"  onPress={() => {}}/>

            
              </View>
              <Text style={styles.welcome}>
                نوع فعالیت
              </Text>
              
              <View style={{margin:0,flexDirection:'row-reverse',flexWrap: 'wrap',}}>

                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>
                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>
                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>
                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>
                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>
                <Button  buttonStyle={{ borderRadius: 50,margin:5,padding:5,minWidth:80}}  title="کافه"  onPress={() => {}}/>


              </View>
              

            


          </View>
        <View style={{justifyContent:'center',
                      backgroundColor:'gray',
                      alignItems:'center',
                      width: Dimensions.get('window').width, height: 40}}>
                    <Text style={{color:'red',fontSize:20,color:'black'}}>ثبت</Text>
        

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
  buttonStyle:
  {
    borderRadius: 50,
    margin:5,
    padding:5,
    minWidth:80
  },
  darkbuttonStyle:
  {
    borderRadius: 50,
    minWidth:80 ,
    margin:5,
    padding:5,
    backgroundColor:'black'
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
