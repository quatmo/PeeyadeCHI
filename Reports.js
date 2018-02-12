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
          dataSource: ds.cloneWithRows([
            {ff:'این پارک',name:'آرش آقاجانی',score:'120'},
            {ff:'این پارک',name:'آرشام ',score:'100'},
            {ff:'این پارک',name:'آرشیدا',score:'80'},
            {ff:'این پارک',name:'رشا',score:'60'},
            {ff:'این پارک',name:' میدوس آرش',score:'40'},
            {ff:'این پارک',name:'اوادا کاداورا',score:'20'}

          ]),
        };
      }



      render() {
        return (
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            renderRow={(data) => 
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#F5FCFF',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor:'black',
                borderRadius:1,
                borderBottomWidth:2,
                padding:20
              }}>
              <Text style={{fontSize:10}}>بیشتر</Text>
             
               
                <View>
                  <Text style={{fontSize:20}}>{data.score}</Text>
                  <Text>{'امتیاز'}</Text>
                </View>

                <View>
                  <Text style={{fontSize:20}}>{data.name}</Text>
                  <View style={{flexDirection:'row'}}>
                  <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
                <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
                <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
                <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
                  </View>
                </View>

              <Text style={{fontSize:20}}>{data.ff}</Text>

               
            </View>
            
          }
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
    height: 20,
    width: 20,
    borderRadius: 20,
    alignSelf: 'stretch',
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
