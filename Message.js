import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'

export default class App extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar:  'https://facebook.github.io/react/img/logo_og.png',
          },
          
        },
        {
          _id: 3,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 4,
            name: 'React Native',
            avatar:  'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 5,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 6,
            name: 'React Native',
            avatar:  'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 7,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 8,
            name: 'React Native',
            avatar:  'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
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