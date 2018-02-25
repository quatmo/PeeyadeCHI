import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,Alert,TouchableHighlight,Dimensions
  } from 'react-native';



 export default class App extends Component {

    constructor(props) {
    super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows([]),
        
        };
       
        this.openDrawer=this.openDrawer.bind(this);
        this.closeDrawer=this.closeDrawer.bind(this);
    
    
    
    }
    closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
  render() {
    
    const draw=(
        <View style={{flexDirection:'row'}}>
        <View style={{justifyContent:'space-around',flexDirection:'column',flex:2,backgroundColor:'white',height:Dimensions.get('window').height}}>
        <TouchableHighlight onPress={()=>{this.closeDrawer()}}>
          <Text style={{margin:10}} >X</Text>
        </TouchableHighlight>

         <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
            <Text style={{marginRight:20,fontSize:20,fontWeight:'bold'}}> پیاده‌چی</Text>
          </View>
          <View style={{flex:4,justifyContent:'center',alignItems:'flex-end'}}> 
            <View>
                    <TouchableHighlight   onPress={() => this.navigate("Requests_RS", {screen: "Requests_RS"})} ><Text style={styles.RightButton}>دیوار </Text></TouchableHighlight>
           </View>
            <View>
                    <TouchableHighlight onPress={() => {}}><Text style={styles.RightButton}>پروژه </Text></TouchableHighlight>
            </View>
            <View >
                    <TouchableHighlight onPress={() => {}}><Text style={styles.RightButton}>چت </Text></TouchableHighlight>
            </View>
            <View>
                    <TouchableHighlight onPress={() => {}}><Text style={styles.RightButton}>پروفایل </Text></TouchableHighlight>
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



    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={draw}
        side={'right'}
        onClose={() => this.closeDrawer()} >
     <View>

        
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <Text>1234</Text>
         <TouchableHighlight
          onPress={() => {this.openDrawer()}}>
          <Text>webview </Text>
        </TouchableHighlight>
     </View>
      </Drawer>
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