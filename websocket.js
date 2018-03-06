
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  ScrollView,TextInput
} from 'react-native';
import { Container, Content,Title,Tab,Tabs,TabHeading, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';
//import SocketIOClient from 'socket.io-client';
/* const io = require('socket.io-client');
const socket = io('ws://192.168.1.12:3000/chat?conversationId=5a79b35c2b7a4607f4f75ccf&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODkxYmMyZTU0NjgxODQ5ZDAyZGZmZDYiLCJ1c2VyIjoi2YXYrdmF2K_Ysdi22Kcg2LHYrduM2YXbjNin2YYg2q_ZhNiu2YbYr9in2YbbjCJ9.-a5T7RyCp25GIwVrf3j9JoDA8lwUtLbmIvzcA3Ad-pI', {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});

socket.on('connect', () => {
    alert('connect')
    //console.log('connected!');
});

socket.on('disconnect', () => {
    alert('disconnect')
    //console.log('connected!');
}); */


type Props = {};
export default class App_1 extends Component<Props> {

  /* constructor(props) 
  {
        super(props);
        this.state={
          messages:[],
          messageToSend:''

        }
           socket.on('/messages/5a79b35c2b7a4607f4f75ccf', (recvMSG) => {
            //alert(recvMSG.data.message)
            console.log("this is from web socket",recvMSG.data.message)
 Messages Formats 
"success": true,
    "message": "مکالمات",
    "data": {
        "__v": 0,
        "conversationId": "5a79b35c2b7a4607f4f75ccf",
        "message": "salam 765",
        "sender": "5891bc2e54681849d02dffd6",
        "attachment": {
            "_id": "5a9ea80fb0ebcf3e282305b8",
            "fileType": "image/jpeg",
            "video": null,
            "__v": 0,
            "createdAt": "139612151803",
            "address": {
                "prefix": "https://peeyade.com/cdn/photos/uploads/chats/5a79b35c2b7a4607f4f75ccf",
                "suffix": "1520347151247_9b64b477c989fa65b4a172318f69aea1.jpg"
            }
        },
        "_id": "5a9ea80fb0ebcf3e282305b9",
        "createdAt": "139612151803"
    }
}
             
          this.setState({messages:this.state.messages.concat(<Text style={{color:'red'}}>{recvMSG.data.message}</Text>)})
            
           
          });       
        
        
  }
 */

        
        sendToWS()
        {
          socket.emit('/messages/5a79b35c2b7a4607f4f75ccf',
          JSON.stringify({'message': this.state.messageToSend}))
          this.setState({messages:this.state.messages.concat(<Text style={{color:'blue'}}>{this.state.messageToSend}</Text>)})

        }  

      render() {
        return (
        <View style={{}}>


          <View style={{flexDirection:'row'}}>
            <TextInput
                  onChangeText={(ReportName) => this.setState({messageToSend:ReportName})}
                  value={this.state.messageToSend}
                  style={{
                    flex:10,
                    alignSelf: 'stretch',
                    flexDirection:'row',
                    height: 30,

                    textAlign:'right',
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin:10,
                    }}/>
            <TouchableHighlight
                style={{flex:2}}
                onPress={this.sendToWS.bind(this)}>
                <Text style={{}}>Send </Text>
            </TouchableHighlight>
          </View>
          <ScrollView>
            {this.state.messages}
          </ScrollView>


        </View>
          
        );
      }



}

