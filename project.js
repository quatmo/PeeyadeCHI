import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ListView,
    Image,
    TouchableHighlight,
    Alert,
    Dimensions,
    scrollView,Text
  } from 'react-native';
  var device_width = Dimensions.get('window').width;
  import { Container, Content,Title,Tab,Tabs,TabHeading, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';
    
 import MyScrollView from './scrolview'; 
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Container>
       {/*  <Header hasTabs/> */}
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
        <Tabs>
        <Tab heading={ <TabHeading><Icon name="help" /></TabHeading>}>
            <View style={{}}>
            </View>
          </Tab>

        <Tab heading={ <TabHeading><Icon name="alarm" /></TabHeading>}>
            <View style={{}}>
            </View>
        </Tab>
          
          <Tab heading={ <TabHeading><Icon name="reorder" /></TabHeading>}>
            <View style={{}}>
            </View>
          </Tab>

          <Tab heading={ <TabHeading><Icon name="chatboxes" /></TabHeading>}>
            <View style={{}}>
            </View>
          </Tab>
          
          <Tab heading={ <TabHeading><Icon name="add" /></TabHeading>}>
            <View style={{flex:1}}>
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
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
