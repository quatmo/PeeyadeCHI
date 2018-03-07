import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Content, Icon, Footer, Button, Header, Left, Body, Right } from 'native-base';
import {
  View, Text, StyleSheet, ScrollView, Alert,
  Image, TouchableOpacity, NativeModules, Dimensions
} from 'react-native';



const io = require('socket.io-client');

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
});


export default class App extends React.Component {
  constructor(props) 
  {
        super(props);
        this.state={
          messages:[],
          messageToSend:''

        }
          //On recceive data socketIO
          socket.on('/messages/5a79b35c2b7a4607f4f75ccf', (recvMSG) => {

            if ((recvMSG).data.attachment == null) 
            {
                this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: (recvMSG).data.message,
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name: recvMSG.data.sender.profile.firstName,
                      avatar: 'https://peeyade.com'+recvMSG.data.sender.bestPhoto.prefix+recvMSG.data.sender.bestPhoto.suffix,
                    },
                    sent: true,
                    received: true
                  }

                ),
              }))
            }
            else
            {
              console.log('inproccess',recvMSG["data"])
              //alert(recvMSG.data.attachment.address.prefix+recvMSG.data.attachment.address.suffix)
              //console.log("Object ...",Object.keys(recvMSG))
              this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, 
                  {
                    _id: Math.round(Math.random() * 1000000),
                    text: (recvMSG).data.message,
                    createdAt: new Date(),
                    user: {
                      _id: 2,
                      name:recvMSG.data.sender.profile.firstName,
                      avatar: 'https://peeyade.com'+recvMSG.data.sender.bestPhoto.prefix+recvMSG.data.sender.bestPhoto.suffix,
                    },
                    //text: recvMSG.data.message, 
                    image:  recvMSG.data.attachment.address.prefix+
                            recvMSG.data.attachment.address.suffix,
                    sent: true,
                    received: true,
                  }
                ),
              }))

            }
            
            /* Messages Formats 
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
            } */
          });      
        
        
  }
  

  componentWillMount() {
    this.setState({ messages:  [
      {
        _id: Math.round(Math.random() * 1000000),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        image: "https://github.com/airbnb/lottie-android/raw/master/gifs/Example1.gif",
        sent: true,
        received: true,
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'خخخخخ راستی برو تو www.peeyade.com',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdt-GuXf2fpzfFgKoreDDC8njOnKw-5fKw1qUjEYQgd-vO0Lo_',
        sent: true,
        received: true,
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'الان چی ....?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'چاکرم :)((:',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent: true,
        received: true,
        location: {
          latitude: 48.864601,
          longitude: 2.398704
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'عه چه جالب !!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'بنده ؟من یه تایپیست ساده عستم ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent: true,
        received: true
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: 'شما چه کاره هستید؟',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Developer',
        },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: "سلام به طوفان مغزی پروژه خوش آمدید",
        createdAt: new Date(),
        system: true,
      },
    ]});
  }

  onSend(v = []) {
        

    //alert(v[0].text)
    socket.emit('/messages/5a79b35c2b7a4607f4f75ccf',JSON.stringify({'message': v[0].text}))

     this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, 
      
                { 
                  _id: Math.round(Math.random() * 1000000),
                  text: v[0].text,
                  createdAt: new Date(),
                  user: {
                    _id:1,
                    name: 'React Native',
                  },
                  sent: true,
                  received: true
                }
      
              ),})) 
  }

  render() {
    return (
      <View style={{flex:1}}>
            <Header>
                <Left>
                  <Button transparent    >
                    <Icon name="arrow-back" onPress={() => this.props.navigation.navigate("ScreenOne")} />
                  </Button>
                </Left>

                <Body>
                  <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <Icon name='logo-github' />
                  </View>
                </Body>
                <Right>
                  <Button transparent    >
                    <Icon name="menu" onPress={() => this.props.navigation.navigate("DrawerOpen")} />
                  </Button>
                </Right>
            </Header>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
      </View>


    )
  }
}
//export default  ScreenZero