import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'

export default class App extends React.Component {
  state = {
    messages: [],
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}
//export default  ScreenZero