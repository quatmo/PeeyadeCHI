//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
//  example row data (see for json structure)
import rows from './data';
//  example styles
import styles from './styles';

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, ListView, Text, View, TouchableWithoutFeedback} from 'react-native';

//  example swipout app
class SwipeoutExample extends Component {

  constructor() {
    super();

    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
    this.state = {
      dataSource: ds.cloneWithRows(rows),
      sectionID: null,
      rowID: null,
    };
    this.loadData=this.loadData.bind(this);
    this.setdata=this.setdata.bind(this);
  }


setdata=(res)=>{
    // this.setState({bons:res.data.user.bons})
    // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
    // this.setState({username:res.data.user.username})
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
    this.setState({dataSource:ds.cloneWithRows(res.data.messages)});
    
     //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})
 
   }
   componentDidMount()
   {
     this.loadData();
   }
loadData=()=>{
    try {
      let ress='xxx'
      fetch(
        'https://peeyade.com/api/pch/v1/wall/global?limit=3&offset=0',{  
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
          },
        
        }).then((response) => response.json())
        .then((res)=>{
          console.log(res);
          //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
          this.setdata(res)
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {
      console.log("Arash ::: "+error);
    }
}
  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        //left={rowData.left}
        right={[
          {
            text: 'X',
            onPress: function(){ alert('button pressed') },
            backgroundColor: '#60ff88',
          },
          {
            text: 'O',
            onPress: function(){ alert('button pressed') },
            backgroundColor: '#ff6022',
          },
          {
            text: '∆',
            onPress: function(){ alert('button pressed') },
            backgroundColor: '#0060ff',
          }
        ]}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={rowData.autoClose}
        backgroundColor={rowData.backgroundColor}
        onOpen={(sectionID, rowID) => {
          this.setState({
            sectionID,
            rowID,
          })
        }}
        onClose={() => console.log('===close') }
        scroll={event => console.log('scroll event') }
      >
        <TouchableWithoutFeedback onPress={() => console.log('press children')}>
          <View style={{backgroundColor:'white',height:30,justifyContent:'center',alignItems:'flex-end'}} >
            <Text style={styles.liText}>{rowData.text}</Text>
          </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}/>
        <View style={styles.navbar}><Text style={styles.navbarTitle}>Swipeout</Text></View>
        <ListView
          scrollEnabled
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={styles.listview}
        />
      </View>
    );
  }

}

export default SwipeoutExample;
