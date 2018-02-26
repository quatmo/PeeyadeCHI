import React from "react";
import { StyleSheet,AppRegistry,TouchableHighlight, Image,View,Text,Dimensions, TouchableOpacity } from "react-native";
import {
  Button,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "BlankPage2"];
type Props = {};
export default class Drawer extends React.Component<Props> {
  static navigationOptions = { title: 'Welcome', header: null };
  constructor(props) {
  super(props);
  //this.closeDrawer = this.closeDrawer.bind(this); 
  this.state = { };
}
 
  render() {
   // const { state, navigate } = this.props.navigation;
    return (
      <View style={{flexDirection:'row'}}>
        <View style={{justifyContent:'space-around',flexDirection:'column',flex:2,backgroundColor:'white',height:Dimensions.get('window').height}}>
        <TouchableHighlight
        style={{alignItems:'flex-start',margin:20}}
        onPress={() => this.props.navigation.navigate("DrawerClose")}>
          <Text>X</Text>
        </TouchableHighlight>

         <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginRight:20,fontSize:20,fontWeight:'bold'}}> پیاده‌چی</Text>
          </View>
          <View style={{flex:4,justifyContent:'center',alignItems:'flex-end'}}> 
            <View>
<TouchableHighlight onPress={() => this.props.navigation.navigate("wall")}><Text style={styles.RightButton}>دیوار </Text></TouchableHighlight>
           </View>
            <View>
<TouchableHighlight onPress={() => this.props.navigation.navigate("Chat")}><Text style={styles.RightButton}>پروژه </Text></TouchableHighlight>
            </View>
            <View >
<TouchableHighlight onPress={() => this.props.navigation.navigate("Message")}><Text style={styles.RightButton}>چت </Text></TouchableHighlight>
            </View>
            <View>
<TouchableHighlight onPress={() => this.props.navigation.navigate("Profile")}><Text style={styles.RightButton}>پروفایل </Text></TouchableHighlight>
            </View>
            <View>
<TouchableHighlight onPress={() => {}}><Text style={styles.RightButton}>تنظیمات </Text></TouchableHighlight>
            </View>



          </View>

          <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            
          </View>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  RightButton: {
    marginBottom:10,
    marginRight:50,
    fontSize:20,
    fontWeight:'300',
  },
  listview: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,

  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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