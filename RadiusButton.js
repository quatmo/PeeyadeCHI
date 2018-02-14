import React, { Component } from 'react';
import ActionButton from './ActionButton';
//import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Text>مکان</Text>
          </ActionButton.Item>
          
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Text>خبر</Text>
          </ActionButton.Item>

           
           <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Text>رویداد</Text>
          </ActionButton.Item>

   
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Text>پیام</Text>
          </ActionButton.Item>


          <ActionButton.Item buttonColor='#3498db' radius="100" title="Notifications" onPress={() => {}}>
             <Text style={{fontSize:10}}>پیشنهاد</Text> 
            {/* <Icon name='home' /> */}

          </ActionButton.Item>


        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});