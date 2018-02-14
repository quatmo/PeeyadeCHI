
import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
//import ActionButton from 'react-native-circular-action-menu';
//import Icon from 'react-native-vector-icons';
//import ActionButton from 'react-native-circular-action-menu';
//import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TextInput
} from 'react-native';
import { Container, Header, Title, Content, Button, Right, Body, Left, Picker, Form, H3, Item as FormItem } from "native-base";
const Item = Picker.Item;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) 
  {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          selected1: "key1",
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

  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

      render() {
        let data = [{
          value: 'Banana',
        }, {
          value: 'Mango',
        }, {
          value: 'Pear',
        }];

        return (
          <View style={{backgroundColor:'red',padding:10}}>
              <Text style={{alignSelf:'flex-end'}}>
                نوشته اصلی
              </Text>
              <View style={{flexDirection:'column',justifyContent:'center'}}> 

                <View style={{flexDirection:'row-reverse'}}>
                  <Image
                      style={styles.photo}
                      resizeMode={'stretch'}
                      source={require('./image/testlogo.png')}/>

                  <View style={{flex:1,flexDirection:'column'}}>
                    <Text style={[styles.title,{}]}>
                      عکاس
                    </Text>
                    <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                    //  label='کتگوری اصلی'
                      data={data}
                    />
                   {/* <View style={{backgroundColor: '#f3f3f3'}}>
                     
                      <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                          <Icon name="android-create" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                          <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                          <Icon name="android-done-all" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                      </ActionButton>
        </View>*/}

           
                  </View >  

                </View>  
                <View style={{flexDirection:'column'}}>
                    <Text style={{alignSelf:'flex-end'}}>
                      نوشته
                    </Text>

                  <View style={{flexDirection:'column',backgroundColor:'gray'}}>
                    <TextInput style={{height:80,backgroundColor:'green'}}/>

                    
                  </View >  

                </View> 
              </View>
          </View>
          
        );
      }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F1FF',
  },
  rtl:{
    //flex: 1,
    justifyContent: 'flex-start',
   // alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  log:{
    backgroundColor:'red'
  }
  ,
  listview: {
    backgroundColor:'#f2f2f2',
    //flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 0,

  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
