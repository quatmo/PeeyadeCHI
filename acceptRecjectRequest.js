
import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,Dimensions,TouchableOpacity
} from 'react-native';
import { Container, Content,Title, Icon,Button, Footer,Header, Left, Body, Right } from 'native-base';

type Props = {};
export default class App_1 extends Component<Props> {

  constructor(props) 
  {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = 
        {
          dataSource: ds.cloneWithRows([]),
          ReportName:'---',
          ReportHint:'---',
          selectedStartDate:'---',
          selectedHouseMinutes:'---',
          PlaceAddress:'---',
        
        
        };
        this.acceptInv=this.acceptInv.bind(this)
  }
  
  componentDidMount()
       {
         this.loadData();
       }
    loadData=()=>{
        try {
          fetch(
            'https://peeyade.com/api/pch/v1/request/'+this.props.navigation.state.params._rid,{  
              method: 'GET',
              headers: {
               // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODhjNDhmMWYxMDdjZjEyYzQ3MzI4ZGYiLCJ1c2VyIjoi2KLZhtinINmE2YjYpyJ9.VybFSOzlPY7tDWzcEN6c6R9L9yUI-FBhlVFzsZ5AFf0'
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
    acceptInv=(truefalse)=>
    {
        //peeyade.com/api/pch/v1/request/5a9a6f290a8b5754bb6df79c?accept=true
        try {
            fetch(
              'https://peeyade.com/api/pch/v1/request/'+this.props.navigation.state.params._rid+"?accept="+truefalse,{  
                method: 'PUT',
                headers: {
                 // 'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1ODhjNDhmMWYxMDdjZjEyYzQ3MzI4ZGYiLCJ1c2VyIjoi2KLZhtinINmE2YjYpyJ9.VybFSOzlPY7tDWzcEN6c6R9L9yUI-FBhlVFzsZ5AFf0'
                },
              
              }).then((response) => response.json())
              .then((res)=>{
                console.log(res);
                //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
                //this.setdata(res);
                //this.state.bons= res.data.points
                alert(res.message)
              
              }).catch((err)=>{console.error(err)});
      
           
          } catch (error) {console.log("Arash ::: "+error);}

    }
    setdata=(res)=>{
        // this.setState({bons:res.data.user.bons})
        // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
        // this.setState({username:res.data.user.username})
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true });
        // this.setState({pinnedMessages:res.data.pinnedMessages});
        this.setState({dataSource:ds.cloneWithRows(res.project.invitedPeople)});
        this.setState({ReportName:res.project.project.title})
        this.setState({ReportHint:res.project.project.description})
        this.setState({selectedStartDate:res.project.createdAt})
        this.setState({selectedHouseMinutes:res.project.createdAt})
        this.setState({PlaceAddress:res.project.project.address.fullAddress})
       //alert(this.state.PlaceAddress)
      
      } 

      render() {
        return (
        <View style={{backgroundColor:'#F5FCFF'}}>

            <Header>
              <Left>
                <Button transparent    >
                  <Icon name="close" onPress={()=>{this.props.navigation.navigate("Requests_RS")}}/>
                </Button>
              </Left>
              <Body>
                <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                <Text>جزییات</Text>
              </View>
              </Body>
              <Right>
              </Right>
            </Header>
            <View style={{height:Dimensions.get('window').height-90}}>
              <Text style={styles.title}>
                {this.state.ReportName}
              </Text>
              <Text style={styles.subtitle}>
                {this.state.ReportHint}
              </Text>

              <Text style={styles.rtl}>
                آیتم‌های مورد نیاز
              </Text>
              <Text style={styles.log}>
                  ۱ فیلم بردار
              </Text>
              <Text style={styles.log}>
                ۱ عکاس
              </Text>



              <Text style={styles.rtl}>
                روز و ساعت تهیه گزارش
              </Text>
              <Text style={styles.log}>
                {this.state.selectedStartDate+ 'دقیقه '+this.state.selectedHouseMinutes}
              </Text>

            <Text style={styles.rtl}>
            آدرس 
            </Text>
            <Text style={styles.log}>
                {this.state.PlaceAddress}
            </Text>

            <Text style={styles.rtl}>
            اعضای ویژه 
            </Text>


            <ListView
              style={styles.listview}
              dataSource={this.state.dataSource}
              renderRow={(data) => 
                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#F5FCFF',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderColor:'black',
                  borderRadius:1,
                  borderBottomWidth:2,
                  padding:20,
                }}>

                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text>{data.status}</Text>
                    <Icon name="md-watch" />
                  </View>
                  <View>
                    <Text>{data.role}</Text>
                  </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <View>
                    <Text>{data.invitedSuperuser.profile.firstName}</Text>
                  </View>

                <Image
                  style={styles.photo}
                  resizeMode={'stretch'}
                  source={String(data.invitedSuperuser.bestPhoto.prefix).length>5?{uri:'https://peeyade.com'+data.invitedSuperuser.bestPhoto.prefix+data.invitedSuperuser.bestPhoto.suffix}:require('./image/testlogo.png')}
                />
                </View>

                  
              </View>}/>
          </View>
          <View style={{height:30,flexDirection:'row'}}>
                <View style = {{width:'50%',position:'absolute',
                    left:0,bottom:0,margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                    <TouchableOpacity 
                    activeOpacity = { 0.8 } 
                    onPress = {()=>{this.acceptInv(true)}}>
                        <Text style = { {textAlign:'center'}}>قبول درخواست</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{width:'50%',position:'absolute',
                    right:0,bottom:0,margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                    <TouchableOpacity 
                    activeOpacity = { 0.8 } 
                    onPress = {()=>{this.acceptInv(false)}}>
                        <Text style = { {textAlign:'center'}}>رد درخواست</Text>
                    </TouchableOpacity>
                </View>
           
            
            
          </View>

        </View>
         

          
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
    rtl:{
      //flex: 1,
      //justifyContent: 'flex-end',
     // alignItems: 'flex-end',
     //alignSelf: 'flex-end',
     textAlign:'right',
     /// backgroundColor: '#F5FCFF',
    },
    log:{
      textAlign:'right',
     // alignSelf:'flex-end',
      backgroundColor:'#ddd'
    }
    ,
    listview: {
      backgroundColor:'#f2f2f2',
      //flex: 1,
      backgroundColor: '#F5FCFF',
      marginTop: 0,
  
    },
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    title: {
      fontSize: 20,
      //alignSelf:'flex-start',
      textAlign: 'center',
      margin: 10,
    },
    subtitle: {
      fontSize: 10,
     // alignSelf:'flex-end',
      textAlign: 'center',
      margin: 10,
    },
    buttonStyle:{
      backgroundColor: '#333333',
      alignSelf: 'stretch',
      flexDirection:'row',
      height:2,
      margin: 0,
      padding:8 ,
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
