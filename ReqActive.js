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
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
            {ff:'این پارک',name:'آرش آقاجانی',pubdate:'۱۱/۳/۹۶',more:'بیشتر',score:'100'},
          

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
                backgroundColor: 'gray',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderColor:'black',
                borderRadius:1,
                borderBottomWidth:2,
                padding:20
              }}>
              <Text style={{fontSize:20}}>{data.more}</Text>
             
               <View>
               <Text style={{textAlign:'center',alignItems:'stretch',justifyContent:'center',fontSize:20}}>{'امتیاز'+data.score}</Text>
                  <Text>{'تاریخ انتشار'+data.pubdate}</Text>
                </View>


                <View style={{justifyContent:'center',alignItems:'center'}}>
                  <Text style={{textAlign:'center',alignItems:'stretch',justifyContent:'center',fontSize:20}}>{'کاربران'}</Text>
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


                <View>
                  <Text style={{fontSize:20,fontWeight:'900',backgroundColor:'gray',borderRadius:1}}>{data.ff}</Text>
                </View>
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
    borderRadius: 10,
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
