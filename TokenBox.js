import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image,
  Dimensions,

} from 'react-native';
//TODO override tokenbox del button
export class TokenBox extends Component {
  render() {
   //console.log('hey i am here',this.props.pic);
    return (
        <View style={{flexDirection:'row',
            backgroundColor:'#999999',
            width:Dimensions.get('window').width/3,
            marginRight:30,
            marginLeft:25,
            justifyContent:'center',
            alignItems:'center',
            //height:30
            }}>
            <Text style={styles.welcome}>{this.props.name}</Text>
             {/* <Text style={[styles.welcome,{color:'red'}]}>{this.props.did}</Text>  */}
                <Image
                    style={styles.photo}
                    resizeMode={'stretch'}
                    source={this.props.pic!=""?{uri:this.props.pic}:require('./image/testlogo.png')}
                    //source={{uri:this.props.pic}}
                  />
                
                <Button
                  buttonStyle={{backgroundColor:'#999999'}}
                  title="x"
                  onPress={()=>{this.props.kk(this.props.did)}}/>
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
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    buttonStyle:{
      backgroundColor: '#333333',
      alignSelf: 'stretch',
      flexDirection:'row',
    },
    welcome: {
      maxWidth: 60,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: 22,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
export default TokenBox;