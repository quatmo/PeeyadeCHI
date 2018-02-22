//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
//  example row data (see for json structure)
import rows from './data';
//  example styles
import styles from './styles';

import React, {Component} from 'react';
import {AppRegistry, StyleSheet,Image , ListView, Text,Alert, View, TouchableWithoutFeedback} from 'react-native';

//  example swipout app
class SwipeoutExample extends Component {

  constructor() {
    super();

    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      sectionID: null,
      rowID: null,
      all_messages:[],
    };
    this.loadData=this.loadData.bind(this);
    this.setdata=this.setdata.bind(this);
   // this.deleteNote=this.deleteNote.bind(this);
    //this._renderRow=this._renderRow.bind(this);
  //  this._del=this._del.bind(this);
  }


setdata=(res)=>{
    // this.setState({bons:res.data.user.bons})
    // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
    // this.setState({username:res.data.user.username})
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
   // all_messages=res.data.messages;
    //this.setState({all_messages:res.data.messages});
    this.setState({all_messages:res.data.today});
    this.setState({dataSource:ds.cloneWithRows(this.state.all_messages)});
    
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
        'https://peeyade.com/api/pch/v1/wall/global?limit=10&offset=0',{  
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
          this.setdata(res);
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {
      console.log("Arash ::: "+error);
    }
}
deleteNote=(rowID)=>
{
  //Alert.alert('dddd','dddd',[{text:'dfdsf'}],{cancelable:false});
  //console.log('$$$$$$$$$');
  //console.log(this.state.all_messages);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  this.state.all_messages.splice(rowID,1);
  this.setState({dataSource:ds.cloneWithRows(this.state.all_messages)});
}
pinIt=(rowID)=>
{
  //Alert.alert('dddd','dddd',[{text:'dfdsf'}],{cancelable:false});
  //console.log('$$$$$$$$$');
  //console.log(this.state.all_messages);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  this.state.all_messages.splice(rowID,1);
  this.setState({dataSource:ds.cloneWithRows(this.state.all_messages)});
}
edIt=(rowID)=>
{
  //Alert.alert('dddd','dddd',[{text:'dfdsf'}],{cancelable:false});
  //console.log('$$$$$$$$$');
  //console.log(this.state.all_messages);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  this.state.all_messages.splice(rowID,1);
  this.setState({dataSource:ds.cloneWithRows(this.state.all_messages)});
}
  _renderRow(rowData: string, sectionID: number, rowID: number) {
    let swipeBtns = 
    [{
      text: 'X',
      backgroundColor: 'red',
      //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.deleteNote(rowID) }
    },{
      text: '∆',
      backgroundColor: 'yellow',
      //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.pinIt(rowID) }
    },{
      text: 'O',
      backgroundColor: 'green',
      //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.edIt(rowID) }
    }];
    //this.deleteNote=this.deleteNote.bind(this);
    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        //left={rowData.left}
        right={swipeBtns}
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
          <View style={{flexDirection:'row',backgroundColor:'white',height:80,justifyContent:'flex-end',alignItems:'center'}} >
          
           
            <Text style={{alignItems:'flex-end'}}>{String(rowData.createdAt).substr(String(rowData.createdAt).length-5,5)}</Text>
            <Text style={styles.liText}>{String(rowData.relatedUser.profile.firstName).substring(0,10)}</Text>
            <Text style={styles.liText}>{String(rowData.text).substring(0,10)}</Text>
            <Image
                style={{
                  alignItems: 'center',
                  height: 60,
                  width: 60,
                  backgroundColor:'red',
                  borderRadius: 30,}}
                resizeMode={'stretch'}
                source={{
                  //uri:"https://facebook.github.io/react-native/docs/assets/favicon.png"
                  uri:'https://peeyade.com'+rowData.relatedUser.bestPhoto.prefix+rowData.relatedUser.bestPhoto.suffix,
          }}/>
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
