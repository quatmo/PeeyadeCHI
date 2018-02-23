import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import {
    Platform,
    StyleSheet,
    View,
    ListView,
    Image,
    TouchableHighlight,
    Alert,
    Dimensions,
  } from 'react-native';

  
type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Container>
       {/*  <Header hasTabs/> */}
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
            <View style={{}}>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}