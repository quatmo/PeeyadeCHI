import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Picker,
  Dimensions
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Drawer } from 'native-base';
import { Container, Header, Content, Icon, Footer,Button } from 'native-base';

class ScreenOne extends Component {
  static navigationOptions = {
    title:"+++",
    headerRight: <TouchableHighlight ><Icon ios='ios-menu' android="md-menu"></Icon></TouchableHighlight>,
  }
  state={
    language:'arash',
  }
  constructor(props) {
    super(props);
        this.state = {
        
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
                  <TouchableHighlight   onPress={() => navigate("Requests_RS", {screen: "Requests_RS"})} ><Text style={styles.RightButton}>دیوار </Text></TouchableHighlight>
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

    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={draw}
      side={'right'}
      onClose={() => this.closeDrawer()} >
      <View style={{}}>
      <Header>
        <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
          <Icon name='arrow-down' />
          <ModalDropdown 
          defaultValue={'درخواست‌ها'}
          
          style={{}} 
          dropdownStyle={{alignItems:'center',
          width:Dimensions.get('window').width+30,
          marginLeft:-Dimensions.get('window').width/2,
          //padding:30 ,
        }}
          options={['فعال‌ها', ' در انتظار انتشار','منتشر شده ']}/>
        </View>
      </Header>
     
      <View>
       <ScrollView contentContainerStyle={{ }}>
      
      

        <TouchableHighlight
            onPress={() => {this.openDrawer()}}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
            <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Reqaddplace", {screen: "Reqaddplace  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Reqaddplace 🤓</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("webview", {screen: "webview"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>webview </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Requests_RS", {screen: "Requests_RS"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Requests_RS 😇 </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("SwipeoutExample", {screen: "SwipeoutExample"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>SwipeoutExample😊  </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("details", {screen: "details  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>details👀 </Text>
        </TouchableHighlight>

         <TouchableHighlight
          onPress={() => navigate("scrolview", {screen: "scrolview"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>scrolview 🙅 </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("project", {screen: "project  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>project 😈 </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("score", {screen: "score  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>score </Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => navigate("message2Wall", {screen: "message2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>message2Wall </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("suggest2Wall", {screen: "suggest2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>suggest2Wall </Text>
        </TouchableHighlight>
       
        
        <TouchableHighlight
          onPress={() => navigate("AddingPCH", {screen: "AddingPCH  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>AddingPCH </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("Profile", {screen: "Profile  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Profile(Instagram) </Text>
        </TouchableHighlight>

         <TouchableHighlight
          onPress={() => navigate("Login_confirm", {screen: "Login_confirm"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Login_confirm</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("login", {screen: "login  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>login </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("RadiusButton", {screen: "RadiusButton  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>RadiusButton </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ScreenThree", {screen: "Screen  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Send/Recv Buttons </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Aicons", {screen: "Aicons"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Aicons </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("imagevideo", {screen: "imagevideo"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Image Video </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("drawer", {screen: "drawer  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Drawer </Text>
        </TouchableHighlight>

        
        <TouchableHighlight
          onPress={() => navigate("Date_Time_Persian", {screen: "Date_Time_Persian"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Date_Time_Persian </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ReqActive", {screen: "ReqActive"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqActive </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("TokenBox", {screen: "TokenBox  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>TokenBox </Text>
        </TouchableHighlight>
       
      

        <TouchableHighlight
          onPress={() => navigate("ReqReport", {screen: "ReqReport  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqReport </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ReqNews", {screen: "ReqNews  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqNews </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Req_AddPCH", {screen: "Req_AddPCH  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Req_AddPCH </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("FilterMenu", {screen: "FilterMenu"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>FilterMenu </Text>
        </TouchableHighlight>
       
        
        <TouchableHighlight
          onPress={() => navigate("Pic_template", {screen: "Pic_template  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Pic_template </Text>
        </TouchableHighlight>
       
       
        <TouchableHighlight
          onPress={() => navigate("ScreenThree", {screen: "ScreenThree  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ButtonTypes </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "ScreenTwo  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Map </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("MainPage", {screen: "MainPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>MainPage </Text>
        </TouchableHighlight>
        
        <TouchableHighlight
          onPress={() => navigate("Details", {screen: "Details  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Details </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Message", {screen: "Message  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Message </Text>
        </TouchableHighlight>
       
        <TouchableHighlight
          onPress={() => navigate("SplashPage", {screen: "SplashPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>SplashPage </Text>
        </TouchableHighlight>
       
     
        </ScrollView>
       </View>
  
      </View>
      </Drawer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RightButton: {
    marginBottom:10,
    marginRight:50,
    fontSize:20,
    fontWeight:'300',
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default ScreenOne;