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
  Image,Dimensions,TouchableHighlight
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import {ButtonGroup} from 'react-native-elements'
import { Container, Content, Icon,FooterTab, Footer,Button,Header, Left, Body, Right } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';
type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([]),
          selectedIndex:1,
          Pdrpdwn:false,
        };
        this.updateIndex=this.updateIndex.bind(this)
      }

setdata=(res)=>{
        // this.setState({bons:res.data.user.bons})
        // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
        // this.setState({username:res.data.user.username})
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
        // this.setState({pinnedMessages:res.data.pinnedMessages});
        this.setState({dataSource:ds.cloneWithRows(res.data)});
       
      
      
      }
    componentDidMount()
       {
         this.loadData();
       }
    loadData=()=>{
        try {
          let ress='xxx'
          fetch(
            'https://peeyade.com/api/pch/v1/request',{  
              method: 'GET',
              headers: {
               // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODkxYmMyZTU0NjgxODQ5ZDAyZGZmZDYiLCJ1c2VyIjoi2YXYrdmF2K_Ysdi22Kcg2LHYrduM2YXbjNin2YYg2q_ZhNiu2YbYr9in2YbbjCJ9.-a5T7RyCp25GIwVrf3j9JoDA8lwUtLbmIvzcA3Ad-pI'
              },
            
            }).then((response) => response.json())
            .then((res)=>{
              console.log(res);
              //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
              this.setdata(res);
              //this.state.bons= res.data.points
        
            
            }).catch((err)=>{console.error(err)});
    
         
        } catch (error) {console.log("Arash ::: "+error);}
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})
      console.log('update Index is :',this.state.selectedIndex)
      try {
        let ress='xxx'
        fetch(
          this.state.selectedIndex==0?
          'https://peeyade.com/api/pch/v1/request':
          'https://peeyade.com/api/pch/v1/request/host',{  
            method: 'GET',
            headers: {
             // 'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODkxYmMyZTU0NjgxODQ5ZDAyZGZmZDYiLCJ1c2VyIjoi2YXYrdmF2K_Ysdi22Kcg2LHYrduM2YXbjNin2YYg2q_ZhNiu2YbYr9in2YbbjCJ9.-a5T7RyCp25GIwVrf3j9JoDA8lwUtLbmIvzcA3Ad-pI'
            },
          
          }).then((response) => response.json())
          .then((res)=>{
            console.log(res);
            //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
            this.setdata(res);
            //this.state.bons= res.data.points
      
          
          }).catch((err)=>{console.error(err)});
  
       
      } catch (error) {console.log("Arash ::: "+error);}
    
    
    }

    

      render() {
        return (
          <Container>
             <Header>
              <Left>
                <Button transparent    >
                  <Icon name="arrow-back" onPress={() => this.props.navigation.navigate("ScreenOne")}/>
                </Button>
              </Left>
              <Body>

                <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <Icon name='arrow-down' />
                    <ModalDropdown 
                    defaultValue={'درخواست‌ها'}
                    style={{}} 
                    dropdownStyle={{alignItems:'center',
                    width:Dimensions.get('window').width+30,
                    marginLeft:-Dimensions.get('window').width/2,
                    //padding:30 ,
                  }}
                    options={['فعال‌ها', ' در انتظار انتشار','منتشر شده ']}/>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Icon name="menu" />
                </Button>
              </Right>
            </Header>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={this.state.selectedIndex}
              style={{borderRadius:50}}
              buttons={[{ element: () =><View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                  <Text style={{color:'red',marginRight:10}}>*</Text>
                 <Text>       ارسالی</Text>
                </View> },{ element: () => <Text> دریافتی</Text> }]}
              innerBorderStyle={{borderRadius:300,color:'white'}}
              buttonStyle={{borderRadius:50}}
              containerBorderRadius={1}
              selectedButtonStyle={{borderRadius:50,backgroundColor:'gray'}}
              containerStyle={{borderRadius:300,backgroundColor:'white'}}
            />
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
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("AcceptRecjectRequest", {_rid:data._id})}>
                
                <Text
                  style={{fontSize:20}}>بیشتر</Text>
              </TouchableHighlight>
             
               <View>
               <Text style={{textAlign:'center',alignItems:'stretch',justifyContent:'center',fontSize:10}}>{'بیشترین امتیاز : '+data.project.maxPoint}</Text>
                  <Text>{'تاریخ انتشار'+String(data.project.deadline).substring(0,10)}</Text>
                </View>


                <View>
                  <Text style={{fontSize:10,fontWeight:'900',backgroundColor:'gray',borderRadius:1}}>{data.project.title}</Text>
                </View>
            </View>
            
          }
          />
            <Footer>
                <View style={{alignItems:'center',flexDirection:'row'}}>
                  <Icon name={this.state.Pdrpdwn?'arrow-down':'arrow-up'} style={{marginRight:10}}/>
                  <ModalDropdown 
                    defaultValue={'درخواست خبر'}
                    style={{justifyContent:'center'}} 
                    dropdownStyle={{alignItems:'center',
                    width:Dimensions.get('window').width+30,
                    marginLeft:-Dimensions.get('window').width/2,
                  }}
                  onDropdownWillShow={()=>{this.setState({Pdrpdwn:true})}}
                  onDropdownWillHide={()=>{this.setState({Pdrpdwn:false})}}
                    options={['درخواست خبر', 'درخواست رویداد ','درخواست مکان']}/>

                  </View>
            </Footer>
          </Container>
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
