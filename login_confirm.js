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
  static navigationOptions = ({ navigation }) => {
          return {
            title: `Welcome ${navigation.state.params.screen}`,
          }
        };
  
      constructor(props) {
          super(props);

         

       
        
        //  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          bg:'gray',
          gg: async function getMoviesFromApi() {
          //  bg:'gray',
            console.log('get movies from api requested');
         
            try {
              let response = await fetch(
                'https://peeyade.com/api/pch/v1/users/sendVerification',{  
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    phone: '989120617453',
                  })
                })
              let responseJson = await response.json();
              //console.log(responseJson.movies);
              console.log(responseJson.message);
              //return responseJson.movies;
            } catch (error) {
              console.log("Arash ::: "+error);
              //console.error('OOps that was error happedned');
            }
          },
           bb:function bing()
           {
             let _this=this;

            this.setState({bg:'red'});
            //this.bg='#ff00aa';
             Alert.alert(
               'Alert Title',
               'My Alert Msg',
               [
                 {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'OK', onPress: () => console.log('OK Pressed')},
               ],
               { cancelable: false }
             );
           }
          };
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
            value={'09120617453'}
        />
       <TouchableHighlight
            //onPress={() => navigate("ScreenOne", {screen: "ScreenOne"})}
            onPress={()=>this.state.gg()}
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