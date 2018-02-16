import React from "react";
import { AppRegistry, Image,View,Text,Dimensions, TouchableOpacity } from "react-native";
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={{flexDirection:'row'}}>
        
        <View style={{flex:1,backgroundColor:'gray'}}>
        </View>

        <View style={{justifyContent:'space-around',flexDirection:'column',flex:2,backgroundColor:'white',height:Dimensions.get('window').height}}>
        <Text style={{fontSize:20,fontWeight:'300',alignSelf:'flex-end',marginRight:10}}>X</Text>
          <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginRight:20,fontSize:20,fontWeight:'bold'}}> پیاده‌چی</Text>
          </View>
          <View style={{flex:4,justifyContent:'center',alignItems:'flex-end'}}> 
            <View>
              <Text style={{marginBottom:10,marginRight:50,fontSize:20,fontWeight:'300'}}> دیوار</Text>
            </View>
            <View>
              <Text style={{marginBottom:10,marginRight:50,fontSize:20,fontWeight:'300'}}> پروژه</Text>
            </View>
            <View >
              <Text style={{marginBottom:10,alignSelf:'stretch',marginRight:50,fontSize:20,fontWeight:'bold'}}> چت</Text>
            </View>
            <View>
              <Text style={{marginBottom:10,marginRight:50,fontSize:20,fontWeight:'300'}}> پروفایل</Text>
            </View>
            <View>
              <Text style={{marginBottom:10,marginRight:50,fontSize:20,fontWeight:'300'}}> تنظیمات</Text>
            </View>



          </View>
          <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            
          </View>
        </View>


      </View>
    );
  }
}
