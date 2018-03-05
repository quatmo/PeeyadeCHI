
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,Dimensions,TextInput,WebView,ScrollView
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Container, Content,Title,Tab,Tabs,TabHeading, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';
import MyScrollView from './scrolview'
import Pic_template from './Pic_template'


var device_width = Dimensions.get('window').width;
type Props = {};
export default class App_1 extends Component<Props> {

  constructor(props) {
        super(props);

          //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
         
        };




      }
  componentDidMount()
  {
    

  }
  

      render() {

        let pt=[]
        pt.push(<Pic_template/>)
        pt.push(<Pic_template/>)
        pt.push(<Pic_template/>)
        pt.push(<Pic_template/>)
        pt.push(<Pic_template/>)



        return (
          <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Button transparent    >
                        <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                        <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                    <Text>پروژه خانه فرهنگ</Text>
                    </View>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>
                <MyScrollView>
                    <View style = { {backgroundColor:'red',flex:1,width:device_width} }>
                    
                        {/* Phase One */}
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>عنوان</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>



                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center'}}>    
                                    <Text style = { {} }>دسته بندی اصلی</Text>
                                </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                                
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center'}}>    
                                    <Text style = { {} }>دسته بندی فرعی</Text>
                                </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center'}}>    
                                    <Text style = { {} }>امتیاز</Text>
                                </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                                
                            <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{alignItems:'center'}}>    
                                <Text style = { {} }>نوع پست</Text>
                            </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                        </View>
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>مکان</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>تگ</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>

                    </View>

                    <View style = {  {backgroundColor:'green',flex:1,width:device_width}}>
                        <View style={{alignItems:'flex-end'}}>    
                                <Text style = { {} }>نوشته</Text>
                        </View>
                        <WebView
                            source={require('./ckeditor/index.html')}
                            style={{flex:10,marginTop: 20,direction:'rtl'}}
                            scrollEnabled={true}/>
                    </View>

                    <View style = {  {backgroundColor:'magenta',flex:1,width:device_width} }>
                        
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{alignItems:'center'}}>    
                                    <Text style = { {} }>امتیاز</Text>
                                </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                                
                            <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{alignItems:'center'}}>    
                                <Text style = { {} }>نوع پست</Text>
                            </View>
                                <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                                data={[{value:'1'},{value:'2'},{value:'3'}]}/>
                            </View>
                        </View>
                        
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>ساعت</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>قیمت</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>
                        <View style={{alignItems:'flex-end'}}>    
                            <Text style = { {} }>لینک</Text>
                        </View>
                        <TextInput
                            style={{
                            alignSelf: 'stretch',
                            flexDirection:'row',
                            height: 30,
                            borderColor: 'gray',
                            borderWidth: 1,
                            margin:10}}/>


                       
                        
                        
                    </View>
                    <View style = {  {backgroundColor:'gray',flex:1,width:device_width} }>
                        <ScrollView>
                            <Text>Pic_templte</Text>
                            {pt}
                        </ScrollView>
                    </View>
                    <View style = {  {backgroundColor:'red',flex:1,width:device_width} }>
                        <Text style = { {} }>
                            View #5
                        </Text>
                    </View>
                    <View style = {  {backgroundColor:'yellow',flex:1,width:device_width} }>
                        <Text style = { {} }>
                            View #6
                        </Text>
                    </View>
                </MyScrollView>
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
  