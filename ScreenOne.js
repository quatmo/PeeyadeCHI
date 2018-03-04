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
import { Drawer, } from 'native-base';
import Draw from './drawer';
import { Container, Content, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';

class ScreenOne extends Component {
  static navigationOptions = { title: 'Welcome', header: null };
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


componentDidMount()
{
  //alert(PeeyadeJWT);
  
}
  render() {


     
    
//TODO imp drawer


    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Draw />}
      side={'left'}
      onClose={() => this.closeDrawer()} >
      <View style={{}}>

      <Header>
          <Left>
              <Button transparent    >
                <Icon name="camera" onPress={() => this.props.navigation.navigate("DrawerOpen")}/>
              </Button>
          </Left>
          
          <Body>
            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
            <Icon name='arrow-down' />
              <ModalDropdown 
                defaultValue={'درخواست‌ها'}
                style={{}} 
                dropdownStyle={{alignItems:'center',
                width:Dimensions.get('window').width+30,
                marginLeft:-Dimensions.get('window').width/2,
                }}
                  options={['فعال‌ها', ' در انتظار انتشار','منتشر شده ']}/>
            </View>
          </Body>
          <Right>
              <Button transparent    >
                <Icon name="arrow-back" onPress={() => this.props.navigation.navigate("ScreenOne")}/>
              </Button>
          </Right>
        </Header>
      <View>
       <ScrollView contentContainerStyle={{ }}>
      
      

       {/*  <TouchableHighlight
            onPress={() => {this.props.navigation.navigate("DrawerOpen")}}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
            <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight> */}
        <TouchableHighlight
          onPress={() => navigate("Reqaddplace", {screen: "Reqaddplace  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Reqaddplace 🤓</Text>
        </TouchableHighlight>

        {/* <TouchableHighlight
          onPress={() => navigate("webview", {screen: "webview"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>webview 🎃</Text>
        </TouchableHighlight> */}
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
            style={styles.buttonText}>wall☠️</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight
          onPress={() => navigate("details", {screen: "details  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>details👀 </Text>
        </TouchableHighlight> */}


         {/* <TouchableHighlight
          onPress={() => navigate("scrolview", {screen: "scrolview"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>scrolview 🙅 </Text>
        </TouchableHighlight> */}

        <TouchableHighlight
          onPress={() => navigate("Project", {screen: "Project  "})}
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
          onPress={() => navigate("ChatList", {screen: "ChatList  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ChatList 👻👻</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => navigate("message2Wall", {screen: "message2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>message2Wall </Text>
        </TouchableHighlight>

        {/* <TouchableHighlight
          onPress={() => navigate("suggest2Wall", {screen: "suggest2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>suggest2Wall </Text>
        </TouchableHighlight> */}
       
        
       {/*  <TouchableHighlight
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
        </TouchableHighlight> */}

         {/* <TouchableHighlight
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
        </TouchableHighlight> */}
        {/* <TouchableHighlight
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
        </TouchableHighlight> */}
        {/* <TouchableHighlight
          onPress={() => navigate("Aicons", {screen: "Aicons"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Aicons </Text>
        </TouchableHighlight> */}
        <TouchableHighlight
          onPress={() => navigate("imagevideo", {screen: "imagevideo"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Image Video </Text>
        </TouchableHighlight>
        {/* <TouchableHighlight
          onPress={() => navigate("drawer", {screen: "drawer  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Drawer </Text>
        </TouchableHighlight> */}

        
        {/* <TouchableHighlight
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
        </TouchableHighlight>*/}
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
       
       
        {/* <TouchableHighlight
          onPress={() => navigate("ScreenThree", {screen: "ScreenThree  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ButtonTypes </Text>
        </TouchableHighlight> */}
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "ScreenTwo  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Map </Text>
        </TouchableHighlight>
        {/* <TouchableHighlight
          onPress={() => navigate("MainPage", {screen: "MainPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>MainPage </Text>
        </TouchableHighlight> */}
        
       {/*  <TouchableHighlight
          onPress={() => navigate("Details", {screen: "Details  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Details </Text>
        </TouchableHighlight> */}
        <TouchableHighlight
          onPress={() => navigate("Message", {screen: "Message  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Message </Text>
        </TouchableHighlight>
       
       {/*  <TouchableHighlight
          onPress={() => navigate("SplashPage", {screen: "SplashPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>SplashPage </Text>
        </TouchableHighlight> */}
       
     
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