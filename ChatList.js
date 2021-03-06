
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
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from 'react-native-popup-menu';

import { Container, Content,FooterTab, Footer,Button,Header, Left, Body, Right,Picker,Item } from 'native-base';
type Props = {};
export default class App_1 extends Component<Props> {

  constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([
            {pic:'',onoff:'1',name:'آرشمیدس',msgs:'۲۳',role:'ادمین',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۱۲ بهمن',tim:'۰۰:۱۲'},
            {pic:'',onoff:'0',name:'لیلا',msgs:'۲۳',role:'ادمین',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۱۲ دی',tim:'۱۸:۳۴'},
            {pic:'',onoff:'0',name:'ممل',msgs:'۲۳',role:'سوپر ادمین',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۰۱ تیر',tim:'۱۲:۵۶'},
            {pic:'',onoff:'1',name:'حسن',msgs:'۲۳',role:'ویراستار',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۱۲ اسفند',tim:'۱۱:۳۴'},
            {pic:'',onoff:'0',name:'حسین',msgs:'۲۳',role:'ادمین',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۲۳ بهمن',tim:'۱۲:۳۴'},
            {pic:'',onoff:'1',name:'علی طلا',msgs:'۲۳',role:'ادمین',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۰۹ فروردین',tim:'۱۲:۳۴'},
            {pic:'',onoff:'1',name:'مملوک',msgs:'۲۳',role:'کاربر',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۱۸ خرداد',tim:'۱۷:۰۲'},
            {pic:'',onoff:'0',name:'سانتاژ',msgs:'۲۳',role:'عادی',lstmsg:'بیا بریم اونجا که شباش بوی تو داره تو هواش باد که میاد رد شه بره ',dat:'۲۴ بهمن',tim:'۲۰:۴۵'},
          
          
          
          
          
          ]),
        };
      }
  
 componentDidMount()
 {
  try{
    fetch(
      'https://peeyade.com/api/pch/v1/chat/conversations?limit=1',{  
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
        }
      
      }).then((response) => response.json())
        .then((res)=>{
        
        console.log('--------',res);
       
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource:ds.cloneWithRows(res.data)});

        /* Object.keys(res.data).forEach((key)=>{
          



        }); */
      
      }).catch((err)=>{console.error(err)});

   
  } catch (error) {
    console.log("Arash ::: "+error);
  }


 } 

      render() {
        return (
          <View style={{}}>




      


                <Header>
                  <Left>
                    <Button transparent    >
                      <Icon name="arrow-back" onPress={() => this.props.navigation.navigate("ScreenOne")}/>
                    </Button>
                  </Left>
                  <Body>

                    <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                        <Icon name='chat' />
                    </View>
                  </Body>
                  <Right>
                            
                            
                            <Button transparent>
                                  <View style={{}}>
                                      <Icon name="more-vert" style={{
                                        zIndex:-999 ,
                                        position:'absolute',
                                        right:0,
                                        top:0,

                                      }}/>
                                      <Picker
                                        style={{
                                          zIndex:999,
                                          position:'absolute',
                                          //right:0,
                                          top:-35,
                                          backgroundColor:'transparent',
                                        }}
                                        onValueChange={()=>{}}
                                        mode="dropdown">

                                        <Item label="Wallet" value="key0" />
                                        <Item label="ATM Card" value="key1" />
                                      </Picker>
                                  </View>  
                              </Button> 

                              

                        
                              

                              
                           
                    
                  </Right>
                </Header> 
 {/*   
                   <MenuProvider style={{backgroundColor:'red',flexDirection: 'column', padding: 30}}>
                       
                      <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                        <MenuTrigger>
                          <Button transparent>
                            <Icon name="more-vert" />
                          </Button>
                        </MenuTrigger>
                        

                        <MenuOptions>
                          <MenuOption value={1} text='One' />
                          <MenuOption value={2}>
                            <Text style={{color: 'red'}}>Two</Text>
                          </MenuOption>
                          <MenuOption value={3} disabled={true} text='Three' />
                        </MenuOptions>
                      </Menu>
                   </MenuProvider> */}


                    

                  

                <ListView
                  style={styles.listview}
                  dataSource={this.state.dataSource}
                  renderRow={(data, sectionID, rowID) => 
                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: '#F5FCFF',
                      //justifyContent: 'space-around',
                      alignItems: 'center',
                      borderColor:'black',
                      borderRadius:1,
                      borderBottomWidth:2,
                      padding:10}}>



                        <View style={{flexDirection:'column',flex:1,alignItems: 'center',}}>
                            <View>
                              <Text>{String('data.lastMessage.createdAt').substring(0,8)}</Text>
                              <Text>{String('data.lastMessage.createdAt').substring(8,12)}</Text>                      
                            </View>
                        </View>
                        
                        
                        <View style={{flexDirection:'column',flex:3}}>
                            <View style={{justifyContent:'space-between',flexDirection:'row',}}>
                              <Text>{'data.role'}</Text>
                              <Text>{'data.lastMessage.sender.profile.firstName'}</Text>
                              <View style={{paddingHorizontal:10,borderRadius:20,backgroundColor:'gray'}}>
                                <Text >{'data.msgs'}</Text>
                              </View>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text>{String('data.lastMessage.message').substr(0,30)+"..."}</Text>                          
                            </View>
                          </View>

                        
                        <View style={{flex:1,alignItems: 'center',}}>
                        <Image
                          style={{height:40,width:40,borderRadius:20}}
                          resizeMode={'stretch'}
                          source={{uri:'https://peeyade.com'+'data.lastMessage.sender.bestPhoto.prefix'+'data.lastMessage.sender.bestPhoto.prefix'}}/>
                          <View style={{position:'absolute',borderRadius:4,bottom:4,left:15,height:8,width:8,backgroundColor:data.onoff=='0'?'gray':'#00ff00'}}>
                          </View>
                        </View>
                    
                
                    </View>
            
                    }
                />


       
         
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
    justifyContent: 'flex-end',
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
    height: 40,
    width: 40,
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
