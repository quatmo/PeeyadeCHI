//  include react-native-swipeout
import Swipeout from 'react-native-swipeout';
//  example row data (see for json structure)
import rows from './data';
//  example styles
import styles from './styles';
import ActionButton from './ActionButton';
import React, {Component} from 'react';
import {ScrollView,Dimensions,AppRegistry, StyleSheet,Image , ListView, Text,Alert, View, TouchableWithoutFeedback} from 'react-native';
import { Container, Content,Title, Icon, Footer,Button,Header, Left, Body, Right } from 'native-base';

//  example swipout app
class SwipeoutExample extends Component {
  
  constructor() {
    super();
    
    var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => true});
    this.state = {
      contentOffsetY: 0,
      dataSourceToday: ds.cloneWithRows([]),
      dataSourcePinned:ds.cloneWithRows([]),
      dataSourceOtherMessages:ds.cloneWithRows([]),
      sectionID: null,
      rowID: null,
      todayMessages:[],
      pinnedMessages:[],
      otherMessages:[],
      isLoading:true,
      refreshing: false,
    };
    
    this.loadData=this.loadData.bind(this);
    this.setdata=this.setdata.bind(this);
   // this._onScroll = this._onScroll.bind(this)
    
  }

setdata=(res)=>{
    // this.setState({bons:res.data.user.bons})
    // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
    // this.setState({username:res.data.user.username})
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
   // todayMessages=res.data.messages;
    //this.setState({todayMessages:res.data.messages});
    this.setState({pinnedMessages:res.data.pinnedMessages});
    this.setState({todayMessages:res.data.today});
    this.setState({otherMessages:res.data.messages});
   
   
    this.setState({dataSourceOtherMessages:ds.cloneWithRows(this.state.otherMessages)});
    this.setState({dataSourcePinned:ds.cloneWithRows(this.state.pinnedMessages)});
    this.setState({dataSourceToday:ds.cloneWithRows(this.state.todayMessages)});
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
          //this.setState({isLoading:true});
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
  //console.log(this.state.todayMessages);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  this.state.otherMessages.splice(rowID,1);
  this.setState({dataSourceOtherMessages:ds.cloneWithRows(this.state.otherMessages)});
}
pinIt=(rowID,id)=>
{
  //API.pinWallId(id)


  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  let tmp =this.state.otherMessages.splice(rowID,1);
  console.log('......');
  console.log(tmp);
  tmp[0].ispinned=true;
  this.state.pinnedMessages.push(tmp[0]);

  this.setState({dataSourcePinned:ds.cloneWithRows(this.state.pinnedMessages)});
  this.setState({dataSourceOtherMessages:ds.cloneWithRows(this.state.otherMessages)});

  //Alert.alert('dddd','dddd',[{text:'dfdsf'}],{cancelable:false});
  //console.log('$$$$$$$$$');
  //console.log(this.state.todayMessages);
  //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  //this.state.todayMessages.splice(rowID,1);
  //this.setState({dataSource:ds.cloneWithRows(this.state.todayMessages)});
}
edIt=(id)=>
{

  //API.editWallId(id)

  //Alert.alert('dddd','dddd',[{text:'dfdsf'}],{cancelable:false});
  //console.log('$$$$$$$$$');
  //console.log(this.state.todayMessages);
  //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
  //this.state.todayMessages.splice(rowID,1);
  //this.setState({dataSource:ds.cloneWithRows(this.state.todayMessages)});
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
      onPress: () => { this.pinIt(rowID,rowID._id) }
    },{
      text: 'O',
      backgroundColor: 'green',
      //underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.edIt(rowID._id) }
    }];
    //this.deleteNote=this.deleteNote.bind(this);
    return (
      <Swipeout
        close={!(this.state.sectionID === sectionID && this.state.rowID === rowID)}
        //left={rowData.left}
        autoClose={true}
        right={swipeBtns}
        rowID={rowID}
        sectionID={sectionID}
        //autoClose={rowData.autoClose}
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
        <View style={{flexDirection:'row-reverse', backgroundColor:rowData.ispinned?'gray':'white'}}>
          <View style={{flex:8,flexDirection:'row',height:80,justifyContent:'flex-end',alignItems:'center'}} >
          
           
            
            <Text style={styles.liText}>{String(rowData.text).substring(0,20)}</Text>
            <Text style={styles.liText}>{String(rowData.relatedUser.profile.firstName).substring(0,10)}</Text>
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
          <View style={{flex:1,flexDirection:'row',backgroundColor:'white',height:80,justifyContent:'flex-start',alignItems:'center'}}>
            <Text style={{alignItems:'flex-end'}}>{String(rowData.createdAt).substr(String(rowData.createdAt).length-5,5)}</Text>
          </View> 
           </View>
        </TouchableWithoutFeedback>
      </Swipeout>
    );
  }
  _loadMore()
  {
   // alert('load_more')
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
          //this.setState({isLoading:true});
          this.addMoreListView(res);
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {
      console.log("Arash ::: "+error);
    }

  }
  addMoreListView(res)
  {
    //alert("Faaar")
    console.log('////////');
   //if(!this.state.isLoading)
    {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });    
      this.setState({otherMessages:this.state.otherMessages.concat(res.data.messages)});
      console.log(res.data.messages);
      console.log('--------------');
      console.log(this.state.otherMessages);
      this.setState({dataSourceOtherMessages:ds.cloneWithRows(this.state.otherMessages)});
    }
    //this.setState({isLoading:!this.state.isLoading});
   
  }

  render() {
    //const { navigatio } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        
        <Header>
          <Left>
            <Button transparent    >
              <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()}/>
            </Button>
          </Left>
          <Body>
            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
           <Text>دیوار</Text>
          </View>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        {/* <ScrollView>        */}
         
        
            <ListView
              //Pinned
              //style={{flex:10}}
              scrollEnabled
              dataSource={this.state.dataSourcePinned}
              renderRow={this._renderRow.bind(this)}/>
          
              <Text>امروز</Text>
                <ListView
                  //Today list view
                  //style={{flex:10}}
                  scrollEnabled
                  dataSource={this.state.dataSourceToday}
                  renderRow={this._renderRow.bind(this)}/>
              <Text>سایر پیام‌ها</Text>

              <ListView
                //Today list view
                //style={{flex:1}}
                //style={{flex:10}}
                scrollEnabled
                dataSource={this.state.dataSourceOtherMessages}
                //onScroll={(e)=>{alert('ssss');this._onScroll(e)}}
                onEndReached={this._loadMore.bind(this)}
                //onEndReached={() => alert('Ok, I\'m @ the bottom')}
                //refreshing={this.state.refreshing}
                //onRefresh={this._onRefresh.bind(this)}
                renderRow={this._renderRow.bind(this)}/>
        {/* </ScrollView> */}
          

          <View style={{ backgroundColor: '#f3f3f3'}}>
            <ActionButton  
              style={{flex:1}}
              buttonColor="rgba(231,76,60,1)">
              
              <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Text>مکان</Text>
              </ActionButton.Item>
              
              <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                <Text>خبر</Text>
              </ActionButton.Item>

              
              <ActionButton.Item buttonColor='#3498db' title="Notifications"  
                onPress={() => this.props.navigation.navigate("ReqNews")}>
                <Text>رویداد</Text>
              </ActionButton.Item>

      
              <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                <Text>پیام</Text>
              </ActionButton.Item>


              <ActionButton.Item buttonColor='#3498db' radius={100} title="Notifications" onPress={() => {}}>
                <Text style={{fontSize:10}}>پیشنهاد</Text> 
                {/* <Icon name='home' /> */}

              </ActionButton.Item>


            </ActionButton>
          </View>
        
      </View>
    );
  }

}

export default SwipeoutExample;
