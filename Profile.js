/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' ,height:30} ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7',height:30 } ]} />;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width/2,
};

type Props = {};
export default class App extends Component<Props> {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'حساب من ' },
      { key: 'second', title: 'خبرها' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  /*constructor(props) {
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

          ])
          
        };
      }*/

  


      render() {
        return (
<View style={styles.container}>  
              <View style={{alignItems:'center'}}>
                <Image
                  style={styles.photo}
                  resizeMode={'stretch'}
                  source={require('./image/testlogo.png')}/>

                <Text style={{height:60,alignItems:'center'}}>
                  آرش آقاجانی
                </Text>
            </View>

              <Text style={{fontSize:10,alignItems:'center',padding:10,textAlign:'center'}}>
        جوانک جویای نام جاه طلب که در به دست آوردن آنچه مورد نیاز است تمام تلاش خود را مینماید
              </Text>


              <View style={{flex:3,flexDirection:'row',alignContent:'center',marginTop:10,maxHeight:80}}>
              
                <View style={{flex:1,alignItems:'center',backgroundColor:'#f0f0f0'}}>
                   <Text style={{height:60,alignItems:'center'}}>  36</Text>
                   <Text style={{height:60,alignItems:'center'}}> منتشر شده</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{height:60,alignItems:'center'}}>  450</Text>
                  <Text style={{height:60,alignItems:'center'}}> امتیاز</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{height:60,alignItems:'center'}}> t 3333331300</Text>
                  <Text style={{height:60,alignItems:'center'}}> مبلغ</Text>
                </View>

              </View>

 <TabViewAnimated
        style={{flex:1}}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />



</View>






);
      }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCF0',
  },
  listview: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,

  },
  photo: {
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
   // alignSelf: 'stretch',
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
