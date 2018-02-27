/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AsyncStorage,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';
const instructions = Platform.select({
  ios: 'کدی را که از طرف پیاده برای شما ارسال شده \n' +
    'را میتوانید اینجا وارد کنید',
  android: 'کدی را که از طرف پیاده برای شما ارسال شده \n' +
  'را میتوانید اینجا وارد کنید',
});

type Props = {};
 var STORAGE_KEY = '@PeeyadeCHI_!@#:key';
export default class Login extends Component<Props> {

  static  PeeyadeJWT='';
      constructor(props) {
          super(props);

         

       
        
        //  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          bg:'gray',
          phone:'0909',
          };
        }
  
  
  SendLogin() {
    //  bg:'gray',
      console.log(this.state.phone);
    
         fetch(
          'https://peeyade.com/api/pch/v1/users/sendVerification',{  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone:this.state.phone,
            })
          }).then((responseJson)=>{return responseJson.json()})
          .then((res)=>{
              console.log(res);
              // alert(this.state.phone);
              alert(res.message);
              if(res.success)
              {
                this.props.navigation.navigate('Login_confirm');

              }
              else

              console.log(responseJson.message);
          }).catch((error)=>{
            console.log("Arash ::: "+error);
            alert(error.message);
          });
  
    }
  componentWillMount() {
    this._loadInitialState().done();
    //console.log('Yes mount complete');
  }
  async _loadInitialState() {
    try {
      var value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null){
        //this.setState({selectedValue: value});
        
        
        
        alert('Added JWT SuccessFull');
        PeeyadeJWT=value;
        this.props.navigation.navigate('ScreenOne')
      } else {
        //this._appendMessage('Initialized with no selection on disk.');
        alert('JWT Not Registred');
      }
    } catch (error) {
      //this._appendMessage('AsyncStorage error: ' + error.message);
      alert(error.message);
    }
  }


  render() {
    


    
  
    const { state, navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:50
      }}>

        <Image
          style={{width: 200, height: 100,marginTop:20}}
          resizeMode={'stretch'}
          source={require('./image/favicon.png')}
        />
        
      <View > 
        <TextInput
            style={{textAlign:'center',height: 30,width:200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(t)=>this.setState({phone:t})}
            value={this.state.phone}
        />
       <TouchableHighlight
            //onPress={() => navigate("ScreenOne", {screen: "ScreenOne"})}
            onPress={this.SendLogin.bind(this)}
            style={{height:40,marginTop:20,marginLeft:40,marginRight:40,backgroundColor: this.state.bg,alignItems:'center',justifyContent:'center'}}>
            <Text style={{}}>ورود</Text>
        </TouchableHighlight>
      </View>

        
        <Text style={styles.instructions}>
          {instructions}
        </Text>
    
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