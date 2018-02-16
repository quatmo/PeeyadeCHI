import React from "react";
import { AppRegistry, Image,View,Text, TouchableOpacity } from "react-native";
import {
  Button,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "BlankPage2"];
export default class DrawBar extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{flexDirection:'row'}}>
        
        <View style={{flex:1,backgroundColor:'gray'}}>
        </View>

        <View style={{flexDirection:'column',flex:2,backgroundColor:'white',height:1000}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginRight:20}}> پیاده‌چی</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}> 
            <Text style={{marginRight:20}}> اضافه کردن عکاس</Text>
            <Text style={{marginRight:20}}> اضافه کردن عکاس</Text>
            <Text style={{marginRight:20}}> اضافه کردن عکاس</Text>
            <Text style={{marginRight:20}}> اضافه کردن عکاس</Text>
          </View>
        </View>


      </View>
    );
  }
}
