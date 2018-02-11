import React, { Component } from 'react';

import {
  View,
  Text,

} from 'react-native';

export class Quote extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.QuoteText}</Text>
      </View>

    );
  }
}

export default Quote;