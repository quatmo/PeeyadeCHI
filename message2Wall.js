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
  TextInput,
  Dimensions,
  Alert,
  TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
  };
  constructor(props) {
    super(props);

    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //dataSource: ds.cloneWithRows([]),
    this.state = {
      title_:"-------",
      text_:"----",
    };
    this.send2wall=this.send2wall.bind(this);
    this.checkit=this.checkit.bind(this);
       
          



      
  //this.sndwl=this.sndwl
  
  
  }
  send2wall=()=>
  {
    try {
      //let ress='xxx'
      if(this.state.title_=='' || this.state.text_=='')
      {
        Alert.alert('empty not allowed',res.data.success,{text:'got it'},  { cancelable: false });
          
      }

      fetch(
        'https://peeyade.com/api/pch/v1/wall/global/item',{  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODhjNDhmMWYxMDdjZjEyYzQ3MzI4ZGYiLCJ1c2VyIjoi2KLZhtinINmE2YjYpyJ9.VybFSOzlPY7tDWzcEN6c6R9L9yUI-FBhlVFzsZ5AFf0',
          },
          body:
            JSON.stringify({
              title:this.state.title_,
              text:this.state.text_,
            })
           
          
        
        }).then((response) => response.json())
        .then((res)=>{
          console.log(res);
          ///console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
          this.checkit(res);
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {
      console.log("Arash ::: "+error);
    }


  
  
  
    }
  
checkit=(res)=>
{
  console.log(res.data);
    if(String(res.success))
    {
      Alert.alert('حله!',String(res.success),[{text:'اوکی'}],  { cancelable: false });
    }
    else
    {
      Alert.alert('خطا',String(res.success),[{text:'اوپپپس'}],  { cancelable: false });

    }

  }
  

render() {
    
    
    return (
      <View style={{flex: 1}}>
        <View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height-100}}>
        <Text 
       // onChangeText={(title) => this.setState({title})}
        style={styles.welcome}>
          تیتر
        </Text>
        <TextInput
        style={styles.inputstyle}
        onChangeText={(e) => this.setState({ title_:e})}
        />

        
        <TextInput
        onChangeText={(e) => this.setState({text_:e})}
        style={{
          alignSelf: 'stretch',
          flexDirection:'row',
          height: 150,
          borderColor: 'gray',
          borderWidth: 1,
          margin:10
        }}
        />


        </View>
        <View style={{justifyContent:'center',backgroundColor:'gray',alignItems:'center',width: Dimensions.get('window').width, height: 50}}>
          <TouchableHighlight
            onPress={()=>{
              this.send2wall()
             // Alert.alert('err','test',[{text:this.state.title_},{text:this.state.text_}],  { cancelable: false })
            }}
            style={[styles.button, {justifyContent:'center',backgroundColor: 'gray'}]}>
            <Text
              
              style={{marginTop:15,fontWeight:'800',justifyContent:'center',alignItems:'center',textAlign:'center',width: Dimensions.get('window').width, height: 50,alignSelf:'stretch'}}>ارسال </Text>
          </TouchableHighlight>

        </View>

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
    textAlign: 'right',
    margin: 10,
  },
  inputstyle:{
    alignSelf: 'stretch',
    flexDirection:'row',
    margin:10,
    height: 40, borderColor: 'gray', borderWidth: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
