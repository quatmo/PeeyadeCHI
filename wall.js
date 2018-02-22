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

export default class wall extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
          return {
            title: `Welcome ${navigation.state.params.screen}`,
          }
        };
  
      constructor(props) {
        super(props);
        this.state = {}
      }
  
 
  componentWillMount() {
    //console.log('Yes mount complete');
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