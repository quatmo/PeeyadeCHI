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
  ListView,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }



      render() {
        return (
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            renderRow={(data) => 
            <View style={{backgroundColor:'#ff00ff'}}>
              <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
                <View>
                  <Text>{'just for test'}</Text>
                  <Text>{'just for test'}</Text>
                </View>
                <View>
                  <Text>{'just for test'}</Text>
                  <Text>{'just for test'}</Text>
                </View>
                <View>
                  
                </View>
            </View>}
          />
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
  listview: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,

  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
