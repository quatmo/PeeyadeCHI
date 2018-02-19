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
  Alert,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#b43a55' ,height:30} ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7',height:30 } ]} />;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width/2,
};

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      bons:10,
      username:'-----',
      bestphoto:'',
      index: 0,
      routes: [
        { key: 'first', title: 'حساب من ' },
        { key: 'second', title: 'خبرها' },
      ],
    };
    this.addOne = this.addOne.bind(this)
    this.setdata=this.setdata.bind(this)
    //this.componentDidMount = this.componentDidMount.bind(this)
    


  }
  setdata=(res)=>{
    this.setState({bons:res.data.mainRole})
    this.setdata(pic:res.data.prefi)
  }
   addOne=()=> {
        try {
          let ress='xxx'
          fetch(
            'https://peeyade.com/api/pch/v1/users/profile/',{  
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
              },
            
            }).then((response) => response.json())
            .then((res)=>{
              console.log(res);
              this.setdata(res)
              //this.state.bons= res.data.points
        
            
            }).catch((err)=>{console.error(err)});

         
        } catch (error) {
          console.log("Arash ::: "+error);
        }


    }





  

  




  componentDidMount(){
    
    this.addOne();

  }
  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });



      render() {
        return (
<View style={styles.container}>  
              <View style={{alignItems:'center',marginTop:10}}>
                <Image
                  style={styles.photo}
                  resizeMode={'stretch'}
                  source={require('./image/testlogo.png')}/>

                <Text style={{height:60,alignItems:'center',marginTop:10}}>
                {this.state.username}
                </Text>
            </View>

              <Text style={{marginHorizontal: 40,fontSize:10,alignItems:'center',padding:10,textAlign:'center'}}>
      {this.state.username}
              </Text>


              <View style={{flex:3,flexDirection:'row',alignContent:'center',marginTop:10,maxHeight:80}}>
              
                <View style={{flex:1,alignItems:'center'}}>
                   <Text style={{height:30,alignItems:'center'}}>  36</Text>
                   <Text style={{height:30,alignItems:'center'}}> منتشر شده</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{height:30,alignItems:'center'}}>  {this.state.bons}</Text>
                  <Text style={{height:30,alignItems:'flex-end'}}> امتیاز</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                  <Text style={{height:30,alignItems:'center'}}> t ????</Text>
                  <Text style={{height:30,alignItems:'center'}}> مبلغ</Text>
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
    height: 60,
    width: 60,
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
