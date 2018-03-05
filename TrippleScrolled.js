
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,Dimensions
} from 'react-native';
import { Container, Content,Title,Tab,Tabs,TabHeading, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';
import MyScrollView from './scrolview'; 
var device_width = Dimensions.get('window').width;
type Props = {};
export default class App_1 extends Component<Props> {

  constructor(props) {
        super(props);

          //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          //dataSource: ds.cloneWithRows([]),
        };
      }
  
  

      render() {
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
                    <Text style = { {} }>
                        View #1
                    </Text>
                    </View>

                    <View style = {  {backgroundColor:'green',flex:1,width:device_width}}>
                    <Text style = { {} }>
                        View #2
                    </Text>
                    </View>

                    <View style = {  {backgroundColor:'yellow',flex:1,width:device_width} }>
                    <Text style = { {} }>
                        View #3
                    </Text>
                    </View>
                </MyScrollView>
          </View>
          
        );
      }



}

