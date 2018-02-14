
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  Button,
  TouchableHighlight
} from 'react-native';

let styles = StyleSheet.create({
 
});

class Notes extends React.Component{

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

  renderRow(rowData) {
    return (
    <TouchableHighlight
      underlayColor='rgba(192,192,192,1,0.6)'
      onPress={this.viewNote.bind(this, rowData)} >
        <View>
            <View style={{height:40,backgroundColor:'#f0f0f0'}}>
                <Text style={{height:30,backgroundColor:'#00ff33'}}> {rowData} </Text>
            </View>
        </View>
    </TouchableHighlight>
    )
  }
  viewNote(rowData) {
    this.props.navigator.push({
      title: 'The Note',
      component: ViewNote,
      passProps: {
        noteText: rowData,
        noteId: this.noteId(rowData),
      }
    });
  }
  
  render() {
    return (
      <View style={{}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    )
  }
};

export default Notes;
