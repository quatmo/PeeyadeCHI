import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Icon,
  TextInput,
  ListView,
  Alert,
  Dimmensions,
//  Button
} from 'react-native';
import { ButtonGroup } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
import { Button,SearchBar } from 'react-native-elements';
import { Container, Header, Item, Input } from 'native-base';
import SelectMultiple from 'react-native-select-multiple'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      
      fruits : ['honda','kotlin','آرش توکلی', 'ساتوشی', 'ناکامورا','استیو وزنیاک', 'جابز امپرالیست', 'بیل گیتس'],
      selectedFruits: [],
      selectedIndex: 2,
      name:'',
      desiredRole: 'author',
      mainRole: 'admin',
      mainCatogry:'',
      skills:'',
      text:'جستجو',
      pic:"https://facebook.github.io/react-native/docs/assets/favicon.png",
      dataSource: ds.cloneWithRows([
        {ff:'1',name:'آرش آقاجانی',score:'120'},
        {ff:'2',name:'آنا لاوا',score:'100'},
        {ff:'3',name:'کسرا وفایی',score:'80'},
        {ff:'4',name:'لنا وفایی',score:'60'},
        {ff:'5',name:' میدوس آرش',score:'40'},
        {ff:'6',name:'اوادا کاداورا',score:'20'}
      ]),
    };
    this.addOne = this.addOne.bind(this)
    this.setdata=this.setdata.bind(this)
    this.onSelectedSearchName=this.onSelectedSearchName.bind(this)
    this.onSelectedSearchSkills=this.onSelectedSearchSkills.bind(this)
  }
  setdata=(res)=>{
   // this.setState({bons:res.data.user.bons})
   // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
   // this.setState({username:res.data.user.username})
   //fruits=res.data.profile.firstName;
   let temps=[]
   Object.keys(res.data).forEach((key)=>{
     //console.log(dd)
     temps.push(res.data[key].profile.firstName)
   });
   this.setState({fruits : temps})
   
   //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   //this.setState({dataSource:ds.cloneWithRows(res.data)});
   //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})
    //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})

  }
  addOne=()=> {
    try {
      if(this.state.name=='' && this.state.skills=='' )
      {
        Alert.alert(
          'خطا',
          'لطفا حداقل یکی از موارد جستجو را پر کنید',
          [
            /* {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, */
/*             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
 */            {text: 'باشه', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        );
        return;
      }
      let ress='xxx'
      fetch(
        'https://peeyade.com/api/pch/v1/users/search?limit=10,offset=0',{  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
          },
          body: JSON.stringify({
            activityTags: '',
            mainActivity: this.state.mainActivity,
            name: this.state.name,
            desiredRole: this.state.desiredRole,
            mainRole: this.state.mainRole,

          })
        
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

componentDidMount(){
  //this.addOne();
}

  onSelectionsChange = (selectedFruits,item) => {
    this.setState({ selectedFruits })
  }

  onSelectedSearchName = (selectedSearchName) => {this.setState({ name:selectedSearchName })}
  //onSelectedSearchMainRole = (changedText) => {this.setState({ mainRole:changedText })}
  //onSelectedSearchMainCatogry = (changedText) => {this.setState({ mainActivity:changedText })}
  onSelectedSearchSkills = (changedText) => {this.setState({ mainActivity:changedText })}

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = ['تایید']
    const { selectedIndex } = this.state
    let data = [{value: 'Banana',}, {value: 'Mango',}, {value: 'Pear',}];
    let mainRoles = [{value: 'Banana',}, {value: 'Mango',}, {value: 'Pear',}];
    let catogries = [{value: 'Banana',}, {value: 'Mango',}, {value: 'Pear',}];
    let skills = [{value: 'Banana',}, {value: 'Mango',}, {value: 'Pear',}];

    return (
      <View style={{}}>

        <SearchBar
          icon={{ type: 'font-awesome', name: 'search' }}
          round
            lightTheme={true}
            onChangeText={this.onSelectedSearchName}
            onClearText={()=>{}}
            inputStyle={{textAlign:'center'}}
            containerStyle={{direction:'rtl'}}
            placeholder='جستجو' />


      
  
       {/*   <TextInput
            style={{borderRadius:300,textAlign:'center',backgroundColor:'grey',marginHorizontal:20,height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            onFocus={()=> this.setState({}) }
            value={this.state.text}/> */}
            
        
     
        <View style={{flexDirection:'row'}}>
        
        <SearchBar
        // icon={{ type: 'font-awesome', name: 'search' }}
         round
          lightTheme={true}
          onChangeText={()=>{}}
          onClearText={()=>{}}
          inputStyle={{textAlign:'center'}}
          containerStyle={{direction:'rtl',flex:10}}
          placeholder='نقش اصلی' />


          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
           نقش اصلی
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <SearchBar
         //icon={{ type: 'font-awesome', name: 'search' }}
         round
          lightTheme={true}
          onChangeText={()=>{}}
          onClearText={()=>{}}
          inputStyle={{textAlign:'center'}}
          containerStyle={{direction:'rtl',flex:10}}
          placeholder=' کتگوری اصلی ' />
          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
          کتگوری  
          </Text>
        </View>

        <View style={{flexDirection:'row'}}>

          <SearchBar
          style={{}}
          //icon={{ type: 'font-awesome', name: 'search' }}
          round
            lightTheme={true}
            onChangeText={this.onSelectedSearchSkills}
            onClearText={()=>{}}
            inputStyle={{textAlign:'center'}}
            containerStyle={{direction:'rtl',flex:10}}
            placeholder='مهارت ها' />
          <Text style={{flex:2,alignSelf:'flex-end',padding:10}}>
           مهارت ها
          </Text>
        </View>
       
        <Button
             buttonStyle={styles.buttonStyle}
             title="جستجو"
             onPress={()=>this.addOne()}
        />
       
      <View style={{flexDirection:'row'}}>  
        <Text style={{flex:2,alignSelf:'flex-start',}}>
        پیاده‌چی ها 
        </Text>
        <Text style={{flex:1,alignSelf:'center',}}>
        پیاده‌چی ها 
        </Text>
      </View>  
      <View style={{}}>
      <SelectMultiple
          style={{direction:'rtl',height: 300}}
          items={this.state.fruits}
          selectedItems={this.state.selectedFruits}
          selectedLabelStyle={{color:'white'}}
          selectedRowStyle={{backgroundColor:'gray'}}
          onSelectionsChange={this.onSelectionsChange} />
        </View>
       <Button
            style={{flex:1}}
             buttonStyle={styles.buttonStyle}
             title="تایید"
             onPress={()=>{}}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchIcon: {
    padding: 10,
  },
  buttonStyle:{
  backgroundColor: '#333333',
  height:30
  //borderColor: 'red',
 // borderWidth: 5,
  //borderRadius: 15
  }
  ,
  passwordContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 10,
   },
  inputStyle: {
    flex: 1,
   },
  persianLayout:{
   
    direction: "rtl",
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
