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

import renderIf from './renderif';
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
            {ff:'1',name:'آرش آقاجانی',score:'120'},
            {ff:'2',name:'آنا لاوا',score:'100'},
            {ff:'3',name:'کسرا وفایی',score:'80'},
            {ff:'4',name:'لنا وفایی',score:'60'},
            {ff:'5',name:' میدوس آرش',score:'40'},
            {ff:'6',name:'اوادا کاداورا',score:'20'}

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
                 {renderIf(data.ff==1, 
                    <Image
                      style={{height:40,width:40}}
                      resizeMode={'stretch'}
                      source={require('./image/testlogo.png')}
                    />
                )}
                {renderIf(data.ff!=1, 
                    <Image
                      style={styles.photo}
                      resizeMode={'stretch'}
                      source={require('./image/testlogo.png')}
                    />
                )}

        
                <View>
                 
                {renderIf(data.ff==1, 
                     <Text style={{fontSize:30}}>{data.score}</Text>
                )}
                   
                {renderIf(data.ff!=1, 
                     <Text style={{fontSize:20}}>{data.score}</Text>
                )}

                
                  <Text>{'امتیاز'}</Text>
                </View>

                <View>
                  <Text style={{fontSize:20}}>{data.name}</Text>
                  <Text>{'پیاده چی کتاب'}</Text>
                </View>


                <View>
                     
                {renderIf(data.ff==1, 
                       <Text style={{fontWeight:'500',fontSize:30,backgroundColor:'white',borderRadius:1}}>{data.ff}</Text>
                )}
                      
                {renderIf(data.ff!=1, 
                       <Text style={{fontSize:20,backgroundColor:'white',borderRadius:1}}>{data.ff}</Text>
                )}
                
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
