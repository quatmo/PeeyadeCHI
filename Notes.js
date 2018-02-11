import React from 'react-native';

let {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight
} = React;

let styles = StyleSheet.create({
 
});

class Notes extends React.Component{
  renderRow(rowData) {
    return (
    <TouchableHighlight
      underlayColor='rgba(192,192,192,1,0.6)'
      onPress={this.viewNote.bind(this, rowData)} >
        <View>
            <View style={{height:40,backgroundColor:'#f0f0f0'}}>
                <Text style={{height:30,backgroundColor:'#00ff33'}}> {rowData} </Text>
            </View>
            <Separator />
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
