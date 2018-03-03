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
  Image,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';

const instructions = Platform.select({
  ios: 'کدی را که از طرف پیاده برای شما ارسال شده \n' +
    'را میتوانید اینجا وارد کنید',
  android: 'کدی را که از طرف پیاده برای شما ارسال شده \n' +
  'را میتوانید اینجا وارد کنید',
});

type Props = {};

export default class Login extends Component<Props> {
 
      constructor(props) {
          super(props);

         

       
        
        //  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          code:'',
          bg:'gray',
          };
        }
  async setAS(val)
  {
    try{
      await AsyncStorage.setItem('@PeeyadeCHI_!@#:key',String(val));
    }catch(e){
      alert(e.message);
    }

  }
  checkCode()
  {
    alert(this.props.navigate.phone);
    console.log(this.props.navigation.state.params);
    fetch(
      'https://peeyade.com/api/pch/v1/users/recieveVerification',{  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone:this.props.navigation.state.params.phoneNumber ,
          code:this.state.code,
        })
      }).then((resj)=>{return resj.json()})
      .then((res)=>{
        if(res.success)
        {
          alert('شما با موفقیت وارد شدید');
          this.setAS(res.token);
          this.props.navigation.navigate('ScreenOne');
        }
        else
        {
          alert(res.message);
        }
      }).catch( (error)=>
      {
        alert(error.message)
      });
  }
 
  componentWillMount() {
    console.log('Yes mount complete');
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
            onChangeText={(t)=>this.setState({code:t})}
            />
       <TouchableHighlight
            //onPress={() => navigate("ScreenOne", {screen: "ScreenOne"})}
            onPress={this.checkCode.bind(this)}
            style={{height:40,marginTop:20,marginLeft:40,marginRight:40,backgroundColor: this.state.bg,alignItems:'center',justifyContent:'center'}}>
            <Text style={{}}>وارد کردن کد</Text>
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