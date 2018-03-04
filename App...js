
import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

type Props = {};
export default class App_1 extends Component<Props> {

  constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([]),
        };
      }
  
  

      render() {
        return (
          <View style={{}}>
          </View>
          
        );
      }



}

