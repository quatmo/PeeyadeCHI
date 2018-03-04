import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import JalaliCalendarPicker from 'react-native-jalali-calendar-picker';
import { Container, Content,Title, Icon,Button, Footer,Header, Left, Body, Right } from 'native-base';
import MyScrollView from './AddPlacescrolview'
import MapView from 'react-native-maps';
import { Modal  as MM,CheckBox as CC} from "react-native";
import TimePicker from 'react-native-simple-time-picker';
import {
  Platform,Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  ListView,Image,Alert
} from 'react-native';
import TokenBox from './TokenBox';
import Modal from 'react-native-simple-modal';
import {Button as Btn ,SearchBar, CheckBox } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'
import { Callout } from 'react-native-maps';



var device_width = Dimensions.get('window').width;
type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});    
   // alert(this.props.navigation.state.params.postType)
    this.state = {
      // fruits : ['honda','kotlin','آرش توکلی', 'ساتوشی', 'ناکامورا','استیو وزنیاک', 'جابز امپرالیست', 'بیل گیتس'],
        fruits : [],
        fruitsFull : [],

        selectedFindPlaces:[],
        findPlaces:[],
        placesFullInfo:[],
        _latitude:35.704981,
        _longitude:51.416007,
        region:
        {
          latitude: 35.704981,
          longitude: 51.416007,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        },

        setPlaceRequest:false,
        catogryType:0,

        ReportName:'',
        MaxMoney:'',
        Points:'',

        PlaceName:'',
        PlaceAddress:'',
        ReportHint:'',

        selectedIndex: 2,
        selectedHours: 0,
        selectedMinutes: 0,
        selectedDead:null,
        selectedStartDate: null,

        selectedIndex: 2,
        name:'',
        desiredRole: 'author',
        mainRole: 'admin',
        mainCatogry:'',
        skills:'',
        checked:false,


        pubDay: null,
        pubDate: null,
        openTime:false,
        openDate:false,
        openDead:false,
        detOrLib:true,
        
        
        
        
        authors:[],
        authorsIndex:0,
        moviems:[],
        moviemsIndex:0,
        photogs:[],
        photogsIndex:0,
        contents_:[],
        contentsIndex:0,
        selectedFruits: [],
        
        openA:false,
        checkFinalReview:false,
        findPlaceInfo:false,

        searchPlaceName:'',

    dataSource1: ds.cloneWithRows([
      {ff:'1',name:'آرش آقاجانی',score:'120'},
      {ff:'2',name:'آنا لاوا',score:'100'},
      {ff:'3',name:'کسرا وفایی',score:'80'},
      {ff:'4',name:'لنا وفایی',score:'60'},
      {ff:'5',name:' میدوس آرش',score:'40'},
      {ff:'6',name:'اوادا کاداورا',score:'20'}

    ]),

    }
    this.updateIndex = this.updateIndex.bind(this)
    this.onDateChange = this.onDateChange.bind(this);
    this.onDeadChange = this.onDeadChange.bind(this);

    this.addAuthors = this.addAuthors.bind(this);
    this.delAuthors = this.delAuthors.bind(this);

    this.addmoviems = this.addmoviems.bind(this);
    this.delmoviems = this.delmoviems.bind(this);

    this.addphotogs = this.addphotogs.bind(this);
    this.delphotogs = this.delphotogs.bind(this);

    this.addcontents = this.addcontents.bind(this);
    this.delcontents = this.delcontents.bind(this);

    this.onSelectedSearchName=this.onSelectedSearchName.bind(this)
    this.onSelectedSearchSkills=this.onSelectedSearchSkills.bind(this)


    this.addOne = this.addOne.bind(this)
    this.setdata=this.setdata.bind(this)



    this.logFruitsFull=this.logFruitsFull.bind(this)
    this.RegisterRequest=this.RegisterRequest.bind(this)
    this.sendToServer=this.sendToServer.bind(this)
    this.searchPlaceChange=this.searchPlaceChange.bind(this);
    this.callBackPlaceInfo=this.callBackPlaceInfo.bind(this)
    this.onRegionChange=this.onRegionChange.bind(this)
  }


  onRegionChange(region) {
    this.setState({ region });
  }

  RegisterRequest=()=>{
    //alert('now must have detains show');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});    
    let tmp=[];
    for (let index = 0; index < this.state.authors.length; index++) {
      const element = this.state.authors[index];
      tmp.push({role:'نویسنده',username:element.props.name,pic:element.props.pic})
      
    }
    for (let index = 0; index < this.state.contents_.length; index++) {
      const element = this.state.contents_[index];
      tmp.push({role:'محتوا',username:element.props.name,pic:element.props.pic})
      
    }
    for (let index = 0; index < this.state.moviems.length; index++) {
      const element = this.state.moviems[index];
      tmp.push({role:'فیلمبردار',username:element.props.name,pic:element.props.pic})
      
    }
    for (let index = 0; index < this.state.photogs.length; index++) {
      const element = this.state.photogs[index];
      tmp.push({role:'عکاس',username:element.props.name,pic:element.props.pic})
      
    }
    
    
    this.state.dataSource1= ds.cloneWithRows(tmp)

    this.setState({checkFinalReview:true});

  }
  sendToServer=()=>{
   // alert('//TODO Task');
    try {


      let authorTMP=[]
      let videoTMP=[]
      let photoTMP=[]
      let adminTMP=[]
      //console.log(this.state.authors[0].props.did)


      for (let index = 0; index < this.state.authors.length; index++)
        authorTMP.push(this.state.authors[index].props.did);

      for (let index = 0; index < this.state.moviems.length; index++) 
        videoTMP.push( this.state.moviems[index].props.did);

      for (let index = 0; index < this.state.photogs.length; index++)
      photoTMP.push(this.state.photogs[index].props.did);
      
      for (let index = 0; index < this.state.contents_.length; index++)
      adminTMP.push(this.state.contents_[index].props.did);
      //console.log('photo tmp',photoTMP)


      //alert(this.props.navigation.state.params.postType)
      fetch(
        'https://peeyade.com/api/pch/v1/request/',{  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
          },
          body: JSON.stringify({
            place:this.state.placeID,
            title:this.state.ReportName,
            description:this.state.ReportHint,
            deadline:this.state.selectedDead,
            reportTime:this.state.selectedStartDate,
            price:this.state.MaxMoney,
            maxPoint:this.state.Points,
            photographerCount:2,
            photographerNeeded:true,
            videographerCount:2,
            videographerNeeded:true,
            postType:this.props.navigation.state.params.postType,//news,event
            author:authorTMP,
            videographer:videoTMP,
            photographer:photoTMP,
            admin:adminTMP,
            setPlaceRequest:this.state.setPlaceRequest,
            placeName:this.state.PlaceName,
            placeDescription:this.state.ReportHint,
            lat:this.state._latitude,
            lon:this.state._longitude,

          })
        
        }).then((response) => response.json())
          .then((res)=>{
          //console.log(res);
          //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
          if(res.success)
          {
            alert(res.message)
            alert(this.props.navigation.state.params.postType)
            console.log('Project review',res)
          }
          else           
            alert('somthing wrong');
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {console.log("Arash ::: "+error);}



  }


  onSelectionsChange = (selectedFruits,item) => {
    this.setState({ selectedFruits })
  }
  onFindPlaceChange=(selectedFindPlaces,item)=>{
    //this.state.selectedFindPlaces=[item]
    this.setState({selectedFindPlaces})
    //this.setState({selectedFindPlaces:item})
  }
  chkunchk=()=>{
    this.setState({checked:!this.state.checked})
     if(!this.state.checked)
     {
       this.setState({selectedFruits:this.state.fruits})
     } else
     {
       this.setState({selectedFruits:[]})
       
     }
  }

  setdata=(res)=>{
    // this.setState({bons:res.data.user.bons})
    // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
    // this.setState({username:res.data.user.username})
    //fruits=res.data.profile.firstName;
    let temps=[]
    this.state.fruitsFull=[]
      Object.keys(res.data).forEach((key)=>{
      temps.push(res.data[key].profile.firstName)
      
      this.state.fruitsFull.push(res.data[key])
    });
    this.setState({fruits : temps})
    
    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //this.setState({dataSource:ds.cloneWithRows(res.data)});
    //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})
     //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})
 
   }
  logFruitsFull=()=>{
      //console.log('selected ----------',this.state.selectedFruits)
      let tmp=[]
      this.state.fruitsFull.forEach((el1)=>{
        this.state.selectedFruits.forEach((el2)=>{
            if(el2.label==el1.profile.firstName)
            {
              tmp.push(el1);

            }
                                                })     
                                        })  
      // console.log(tmp)                   
      switch (this.state.catogryType) 
      {
        case 1:
          for (let index = 0; index < tmp.length; index++) 
          {
            const el = tmp[index];
            this.state.authors.push(
            <TokenBox 
              name={el.profile.firstName} 
              key ={this.state.authorsIndex} 
              pic={String(el.bestPhoto.prefix).length<5?'':'https://peeyade.com'+el.bestPhoto.prefix+el.bestPhoto.suffix}
              did ={el._id}
              kk  ={this.delAuthors}/>);
            //console.log(el.bestPhoto.prefix)  
            this.setState({authorsIndex:this.state.authorsIndex+1})
          }
          this.setState({openA:false})

          break;
        case 2:
          for (let index = 0; index < tmp.length; index++) 
          {
            const el = tmp[index];
            this.state.moviems.push(
            <TokenBox 
              name={el.profile.firstName} 
              key ={this.state.moviemsIndex} 
              pic={String(el.bestPhoto.prefix).length<5?'':'https://peeyade.com'+el.bestPhoto.prefix+el.bestPhoto.suffix}
              did ={el._id}
              kk  ={this.delmoviems}/>);
            //console.log(el.bestPhoto.prefix)  
            this.setState({moviemsIndex:this.state.moviemsIndex+1})
          }
          this.setState({openA:false})
          break;
        case 3:
        
          for (let index = 0; index < tmp.length; index++) 
          {
            const el = tmp[index];
            this.state.contents_.push(
            <TokenBox 
              name={el.profile.firstName} 
              key ={this.state.contentsIndex} 
              pic={String(el.bestPhoto.prefix).length<5?'':'https://peeyade.com'+el.bestPhoto.prefix+el.bestPhoto.suffix}
              did ={el._id}
              kk  ={this.delcontents}/>);
            //console.log(el.bestPhoto.prefix)  
            this.setState({contentsIndex:this.state.contentsIndex+1})
          }
          this.setState({openA:false})

          break;
        case 4:
            for (let index = 0; index < tmp.length; index++) 
            {
              const el = tmp[index];
              this.state.photogs.push(
              <TokenBox 
                name={el.profile.firstName} 
                key ={this.state.moviemsIndex} 
                pic={String(el.bestPhoto.prefix).length<5?'':'https://peeyade.com'+el.bestPhoto.prefix+el.bestPhoto.suffix}
                did ={el._id}
                kk  ={this.delphotogs}/>);
              this.setState({photogsIndex:this.state.photogsIndex+1})
            }
            this.setState({openA:false})
          break;
        default:
          break;
      }
          //console.log(tmp)
      this.setState({fruits:[]})
  }
  callBackPlaceInfo=()=>
  {
    for (let index = 0; index < this.state.placesFullInfo.length; index++) {
      const el = this.state.placesFullInfo[index];
      if(el.name==this.state.selectedFindPlaces[0].label)
      {
        
        console.log('logfromplace',this.state.selectedFindPlaces[0].label,
        el.summary.address.geo.coordinates[0],
        el.summary.address.geo.coordinates[1],
        )
        this.setState({PlaceName:el.name})
        this.setState({PlaceAddress:el.summary.address.fullAddress})
        this.setState({region:{
          latitude: el.summary.address.geo.coordinates[1],
          longitude: el.summary.address.geo.coordinates[0],
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }})
        this.setState({_latitude:el.summary.address.geo.coordinates[1]});
        this.setState({_longitude:el.summary.address.geo.coordinates[0]});
        this.setState({placeID:el._id});
        console.log('Mapview :::: ',this.state.region);
      }
    }
    this.setState({findPlaceInfo:false});
  }
  onSelectedSearchName = (selectedSearchName) => {this.setState({ name:selectedSearchName })}
  searchPlaceChange=(scp)=>{
    this.setState({searchPlaceName:scp})
    try {
     
      fetch(
        'https://peeyade.com/api/pch/v1/search/places?name='+scp+'&limit=5&offset=0',{  
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
          }
        }).then((response) => response.json())
          .then((res)=>{
            this.state.findPlaces=[]
            Object.keys(res.data).forEach((key)=>{
                    this.state.findPlaces.push(res.data[key].name)
                  });
            this.setState({placesFullInfo:res.data});
        }).catch((err)=>{console.error(err)});
    } catch (error) {
      console.log("Arash ::: "+error);
    }
  }
  
  onSelectedSearchSkills = (changedText) => {this.setState({ mainActivity:changedText })}
  addOne=()=> {
    try {
      if(this.state.name=='' && this.state.skills=='' )
      {
        Alert.alert(
          'خطا',
          'لطفا حداقل یکی از موارد جستجو را پر کنید',
          [
           {text: 'باشه', onPress: () => console.log('OK Pressed')},
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
         // console.log(res);
          //console.log('https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix)
          this.setdata(res)
          //this.state.bons= res.data.points
    
        
        }).catch((err)=>{console.error(err)});

     
    } catch (error) {
      console.log("Arash ::: "+error);
    }


}

  addAuthors()
  {
    this.state.authors.push(
    <TokenBox 
      name={this.state.authorsIndex} 
      key ={this.state.authorsIndex} 
      pic={''}
      did ={this.state.authorsIndex}
      kk  ={this.delAuthors}/>);
    this.setState({authorsIndex:this.state.authorsIndex+1})
  }
  addmoviems()
  {
    this.state.moviems.push(
    <TokenBox 
      name={this.state.moviemsIndex} 
      key={this.state.moviemsIndex}
      pic={''} 
      did={this.state.moviemsIndex}
      kk={this.delmoviems}/>);
    this.setState({moviemsIndex:this.state.moviemsIndex+1})
  }
  addphotogs()
  {
    this.state.photogs.push(
    <TokenBox 
      name={this.state.photogsIndex} 
      key={this.state.photogsIndex} 
      did={this.state.photogsIndex}
      kk={this.delphotogs}/>);
    this.setState({photogsIndex:this.state.photogsIndex+1})
  }
  addcontents()
  {
    this.state.contents_.push(
    <TokenBox 
      name={this.state.contentsIndex} 
      key={this.state.contentsIndex} 
      did={this.state.contentsIndex}
      kk={this.delcontents}/>);
    this.setState({contentsIndex:this.state.contentsIndex+1})
  }
  delAuthors(k)//aka key
  {
    alert('با موفقیت حذف شد')
    let tmp=this.state.authors.slice()
    for (let index = 0; index < tmp.length; index++) {
          if(tmp[index].props.did==k)
          {
            tmp.splice(index,1);
          }
    }
    console.log('key',tmp);
    this.setState({authors:tmp   })
  }
  delmoviems(k)//aka key
  {
    alert('با موفقیت حذف شد')
    let tmp=this.state.moviems.slice()
    for (let index = 0; index < tmp.length; index++) {
          if(tmp[index].props.did==k)
          {
            tmp.splice(index,1);
          }
    }
    console.log('key',tmp);
    this.setState({moviems:tmp   })
  }
  delphotogs(k)//aka key
  {
    alert('با موفقیت حذف شد')
    let tmp=this.state.photogs.slice()
    for (let index = 0; index < tmp.length; index++) {
          if(tmp[index].props.did==k)
          {
            tmp.splice(index,1);
          }
    }
    console.log('key',tmp);
    this.setState({photogs:tmp   })
  }
  delcontents(k)//aka key
  {
    alert('با موفقیت حذف شد')
    console.log('key',this.state.contents_);
    let tmp=this.state.contents_.slice()
    for (let index = 0; index < tmp.length; index++) {
          if(tmp[index].props.did==k)
          {
            tmp.splice(index,1);
          }
    }
    this.setState({contents_:tmp   })
  }
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  onDeadChange(date) {
    this.setState({
      selectedDead: date.format('jYYYY/jM/jD'),
    });
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Hello', 'World']
    const { selectedHours, selectedMinutes } = this.state;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.format('jYYYY/jM/jD [is] YYYY/M/D') : '';
 
    return (
      <Container style={{}}>
          
          <Header>
            <Left>
              <Button transparent    >
                <Icon name="arrow-back" onPress={() => this.props.navigation.navigate("ScreenOne")}/>
              </Button>
            </Left>
            <Body>
              <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
            <Text>گزارش مکان</Text>
            </View>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>

        <MyScrollView 
        onRegisterClick={this.RegisterRequest}
        >

            <View style = {  {justifyContent:'space-around',backgroundColor:'green',flex:1,width:device_width}}>
              {/*PCH info*/}
              <View style = { {flex:1} }>{/*main compoenent report info */}
                <Text style={{alignSelf:'flex-end'}}>
                  نام گزارش
                </Text>
                <TextInput
                onChangeText={(ReportName) => this.setState({ReportName})}
                style={{
                
                alignSelf: 'stretch',
                flexDirection:'row',
                height: 30,
                textAlign:'right',
                borderColor: 'gray',
                borderWidth: 1,
                margin:10,
                }}
               />
            
          
                <Text style={{alignSelf:'flex-end'}}>
                    تاریخ تحویل 
                </Text>
                <TextInput
                    onFocus={() => this.setState({openDead: true})}
                    value={this.state.selectedDead}
                    style={{
                    alignSelf: 'stretch',
                    flexDirection:'row',
                    height: 30,
                    textAlign:'right',
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin:10,
                  }}/>
                <View style={{flexDirection:'row'}}>
                  
                <View style={{flex:1}}>
                  <Text style={styles.instructions}>
                  بیشترین امتیاز
                  </Text>

                  <TextInput
                      onChangeText={(Points) => this.setState({Points})}
                      style={{
                      alignSelf: 'stretch',
                      flexDirection:'row',
                      textAlign:'center',
                      height: 30,
                      borderColor: 'gray',
                      borderWidth: 1,
                      margin:10
                    }}/>
                </View>
              
                  <View style={{flex:1}}>
                    <Text style={styles.instructions}>
                      مبلغ
                    </Text>

                    <TextInput
                      onChangeText={(MaxMoney) => this.setState({MaxMoney})}
                      style={{
                      alignSelf: 'stretch',
                      flexDirection:'row',
                      height: 30,
                      textAlign:'center',
                      borderColor: 'gray',
                      borderWidth: 1,
                      margin:10
                    }}/>
                  </View>
               </View>



               <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                  <Dropdown 
                    label='انتخاب عکاس'
                    labelTextStyle={{alignItems:'center',textAlign:'center',justifyContent:'center'}}
                  style={{textAlign:'center'}}
                  data={[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"+4"}]}
                      />
                  
                </View>
            
                <View style={{flex:1}}>
                  <Dropdown 
                    label='انتخاب فیلمبردار'
                    labelTextStyle={{alignItems:'center',textAlign:'center',justifyContent:'center'}}
                  style={{textAlign:'center'}}
                  data={[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"+4"}]}
                      />
                </View>
                </View>






                <Text style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                            روز و ساعت تهیه گزارش 
                </Text>

                <View style={{flexDirection:'row',}}>
                  <View style={{flex:1}}>
                    <Text style={styles.instructions}>
                      تاریخ 
                    </Text>

                  <TouchableOpacity 
                    style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                    onPress={() => this.setState({openDate: true})}>
                    <Text>تنظیم تاریخ</Text>
                  </TouchableOpacity>
                  <Text>{selectedStartDate?selectedStartDate.format('jYYYY/jM/jD'):''}</Text>
                  </View>
              
                  <View style={{flex:1}}>
                    <Text style={styles.instructions}>
                      ساعت
                    </Text>
                    <TouchableOpacity 
                        style={{alignItems:'center',backgroundColor:'gray',borderRadius:30}}
                        onPress={() => this.setState({openTime: true})}>
                      <Text style={{alignItems:'center'}}>تنظیم ساعت</Text>
                    </TouchableOpacity>
                    <Text>{String(this.state.selectedHours)+':'+String(this.state.selectedMinutes)}</Text>
                  </View>
                </View>


                      
                
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:1}}>
                    <TouchableOpacity 
                      style={{alignItems:'center',
                      backgroundColor:this.state.detOrLib?'gray':'white'
                      }}
                      onPress={() => {
                        this.setState({detOrLib:true})
                      }}>
                      <Text>معین</Text>
                    </TouchableOpacity>
                  </View>
              
                  <View style={{flex:1}}>
                    <TouchableOpacity 
                      style={{alignItems:'center',
                      backgroundColor:this.state.detOrLib?'white':'gray',
                      }}
                      onPress={() => {
                        this.setState({detOrLib:false})
                      }}>
                    <Text>اختیاری</Text>
                  </TouchableOpacity>
                  </View>
                </View>
                
                <Modal
                    offset={this.state.offset}
                    open={this.state.openDate}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({openDate: false})}
                    style={{alignItems: 'center'}}>
                    <View style={{alignItems:'center'}}>
                      <Text style={{alignItems:'center',fontSize: 20, marginBottom: 10}}>انتخاب تاریخ</Text>
                    
                    <JalaliCalendarPicker
                    onDateChange={this.onDateChange}
                    />
              
                  <TouchableOpacity
                    style={{margin: 5,alignItems:'center'}}
                    onPress={() => this.setState({openDate: false})}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  </View>
                </Modal>
                <Modal
                    offset={this.state.offset}
                    open={this.state.openDead}
                    modalDidOpen={() => console.log('modal did open')}
                    modalDidClose={() => this.setState({openDead: false})}
                    style={{alignItems: 'center'}}>
                    <View style={{alignItems:'center'}}>
                      <Text style={{alignItems:'center',fontSize: 20, marginBottom: 10}}>انتخاب تاریخ</Text>
                      
                    <JalaliCalendarPicker
                    onDateChange={this.onDeadChange}
                    />
              
                  <TouchableOpacity
                    style={{margin: 5,alignItems:'center'}}
                    onPress={() => this.setState({openDead: false})}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  </View>
                </Modal>

                <Modal
                  offset={this.state.offset}
                  open={this.state.openTime}
                  modalDidOpen={() => console.log('modal did open')}
                  modalDidClose={() => this.setState({openTime: false})}
                  style={{alignItems: 'center'}}>
                  <View>
                    <Text style={{alignItems:'center',fontSize: 20, marginBottom: 10}}>انتخاب ساعت</Text>
                    <TimePicker
                        selectedHours={selectedHours}
                        selectedMinutes={selectedMinutes}
                        onChange={(hours, minutes) => this.setState({ selectedHours: hours, selectedMinutes: minutes })}
                      />
                    <TouchableOpacity
                      style={{margin: 5,alignItems:'center'}}
                      onPress={() => this.setState({openTime: false})}>
                      <Text>X</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>

              </View>



            </View>

            
            <View style = {  {justifyContent:'space-around',backgroundColor:'yellow',flex:1,width:device_width} }>
                {/*place info*/}
              <View style={styles.container}>
                    <Text style={{flex:1,marginTop:10}}>
                    نام مکان
                    </Text>
                    <TextInput
                     //onChangeText={(PlaceName) => this.setState({PlaceName})}
                      onFocus={()=>{ this.setState({findPlaceInfo:true})}}
                      value={this.state.PlaceName}
                      style={{
                      flex:1,
                      alignSelf: 'stretch',
                      flexDirection:'row',
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginHorizontal:10
                    }}/>
                  

                    <Text style={{flex:1,marginTop:10}}>
                      آدرس مکان
                    </Text>
                    <TextInput
                        onChangeText={(PlaceAddress) => this.setState({PlaceAddress})}
                        value={this.state.PlaceAddress}
                        style={{
                        flex:1,
                        alignSelf: 'stretch',
                        flexDirection:'row',
                      // height: 30,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginHorizontal:10
                      }}
                    />
                    <MapView style={{margin:10,flex:8,width:Dimensions.get('window').width,}}
                        initialRegion={{
                        latitude: this.state._latitude,
                        longitude: this.state._longitude,
                        latitudeDelta: 0.0022,
                        longitudeDelta: 0.0021,
                      }}
                      
                      showsUserLocation
                      region={this.state.region}
                      //onRegionChange={this.onRegionChange}
                      >

                     <MapView.Marker 
                     coordinate={{
                       latitude:this.state._latitude,
                       longitude: this.state._longitude,
                       latitudeDelta: 0.0022,
                       longitudeDelta: 0.0021,
                       
                       }}>
                        <MapView.Callout style={{width:250}}>
                          <View><Text>+</Text></View>
                        </MapView.Callout>
                      </MapView.Marker>
                    </MapView>

                    <Text style={{flex:1}}>
                      راهنمای تهیه گزارش
                    </Text> 
                    <TextInput
                     onChangeText={(ReportHint) => this.setState({ReportHint})}
                    style={{
                      flex:3,
                      alignSelf: 'stretch',
                      flexDirection:'row',
                      //height: 150,
                      borderColor: 'gray',
                      borderWidth: 1,
                      marginHorizontal:10,
                      marginBottom:10
                    }}
                    />
              </View>
            




            </View>


            <View style = { {justifyContent:'space-around',backgroundColor:'#F5FCFF',width:device_width} }>
              
              <View style={{}}>
                  <Text style={{alignSelf:'flex-end',marginRight:20}}>
                    اضافه کردن نویسنده
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                     {this.state.authors}
                  </View>
                  <TouchableHighlight
                        onPress={()=>{this.state.catogryType=1;this.setState({openA: true}) }   }
                        
                        style={{alignItems:'center',
                                backgroundColor:'black',
                                marginHorizontal:10}}>
                        <Text style={{color:'white'}}>+</Text>
                  </TouchableHighlight>
                  <MM
                    animationType="slide"
                    transparent={false}
                    visible={this.state.openA}
                    onRequestClose={() => {
                      alert('Modal has been closed.');
                    }}>
                     <View style={{backgroundColor:'#F5FCFF'}}>

                        <Header>
                          <Left>
                            <Button transparent    >
                              <Icon name="close" onPress={() => this.setState({openA:false})}/>
                            </Button>
                          </Left>
                          <Body>
                            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                            <Text>انتخاب افراد</Text>
                          </View>
                          </Body>
                          <Right>
                          </Right>
                        </Header>

                      
                        <SearchBar
                          icon={{ type: 'font-awesome', name: 'search' }}
                          round
                          lightTheme={true}
                          onChangeText={this.onSelectedSearchName}
                          onClearText={()=>{}}
                          inputStyle={{textAlign:'center'}}
                          containerStyle={{direction:'rtl'}}
                          placeholder='جستجو' />





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

                        <Btn
                            buttonStyle={{height:30}}
                            title="جستجو"
                            onPress={()=>this.addOne()}
                        />

                        <View style={{flexDirection:'row'}}> 
                            <View style={{flex:2,alignItems:'flex-start',}}>
                                
                              <CheckBox
                                title='انتخاب همه'
                                iconRight
                                style={{width:10,backgroundColor:'#FFFcFB'}}
                                onPress={this.chkunchk.bind(this)}
                                checked={this.state.checked}
                              />
                            </View>
                            <View style={{flex:2,alignItems:'flex-end',
                                          justifyContent:'center',
                                          }}>
                              
                              <Text>پیاده‌چی ها</Text>
                            </View>

                        </View>  

                          <SelectMultiple
                            style={{direction:'rtl',height:300}}
                            items={this.state.fruits}
                            selectedItems={this.state.selectedFruits}
                            selectedLabelStyle={{color:'white'}}
                            selectedRowStyle={{backgroundColor:'gray'}}
                            onSelectionsChange={this.onSelectionsChange} />

                    

                        <TouchableOpacity 
                          activeOpacity = { 0.8 } 
                          onPress = {this.logFruitsFull} 
                          style = {{width:'100%',alignSelf: 'stretch',position:'absolute',
                          bottom:-30,margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                          <Text style = { {textAlign:'center'}}>ثبت و بستن</Text>
                        </TouchableOpacity>


                     </View>
                  </MM>

              </View>
              
              <View>
                <Text style={{alignSelf:'flex-end',marginRight:20}}>
                    اضافه کردن فیلم بردار
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    {this.state.moviems}
                  </View>

                  <TouchableHighlight
                        onPress={()=>{this.state.catogryType=2;this.setState({openA: true}) } }
                        style={{alignItems:'center',
                                backgroundColor:'black',
                                marginHorizontal:10}}>
                        <Text style={{color:'white'}}>+</Text>
                    </TouchableHighlight>
                  
              </View>
              <View>
                <Text style={{alignSelf:'flex-end',marginRight:20}}>
                    اضافه کردن سرپرست محتوا
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    {this.state.contents_}
                  </View>

                  <TouchableHighlight
                        onPress={()=>{this.state.catogryType=3;this.setState({openA: true}) } }
                        style={{alignItems:'center',
                                backgroundColor:'black',
                                marginHorizontal:10}}>
                        <Text style={{color:'white'}}>+</Text>
                    </TouchableHighlight>
                  
              </View>
              <View>
                    <Text style={{alignSelf:'flex-end',marginRight:20}}>
                      اضافه کردن عکاس
                    </Text>
                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                      {this.state.photogs}
                    </View>

                    <TouchableHighlight
                        onPress={()=>{this.state.catogryType=4;this.setState({openA: true}) } }
                        style={{alignItems:'center',
                                backgroundColor:'black',
                                marginHorizontal:10}}>
                        <Text style={{color:'white'}}>+</Text>
                    </TouchableHighlight>
                   
              </View>

            </View>


            <MM
                    animationType="fade"
                    transparent={false}
                    visible={this.state.checkFinalReview}
                    onRequestClose={() => {
                      alert('Modal has been closed.');
                    }}>
                     <View style={{backgroundColor:'#F5FCFF'}}>

                        <Header>
                          <Left>
                            <Button transparent    >
                              <Icon name="close" onPress={() => this.setState({checkFinalReview:false})}/>
                            </Button>
                          </Left>
                          <Body>
                            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                            <Text>بازبینی نهایی</Text>
                          </View>
                          </Body>
                          <Right>
                          <Button transparent    >
                              {/* <Icon name="close" onPress={() => this.setState({checkFinalReview:false})}/> */}
                              <Text>ویرایش</Text>
                            </Button>
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
                            {this.state.selectedStartDate==null?'----/--/--':this.state.selectedStartDate.format('jYYYY/jM/jD')+ 'دقیقه '+selectedHours+':'+selectedMinutes}
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
                          dataSource={this.state.dataSource1}
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
                              padding:20
                            }}>
                          

                              <View>
                                <Text>{data.role}</Text>
                              </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                              <View>
                                <Text>{data.username}</Text>
                              </View>

                            <Image
                              style={styles.photo}
                              resizeMode={'stretch'}
                              source={String(data.pic).length>5?{uri:data.pic}:require('./image/testlogo.png')}
                            />
                            </View>

                              
                          </View>}
                        />
                      </View>
                      <View style={{height:30}}>
                        <TouchableOpacity 
                          activeOpacity = { 0.8 } 
                          onPress = {this.sendToServer} 
                          style = {{width:'100%',alignSelf: 'stretch',position:'absolute',
                          bottom:0,margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                          <Text style = { {textAlign:'center'}}>ارسال به سرور</Text>
                        </TouchableOpacity>
                      </View>

                     </View>
            </MM>
        
            <MM
                    animationType="slide"
                    transparent={false}
                    visible={this.state.findPlaceInfo}
                    onRequestClose={() => {
                      alert('Modal has been closed.');
                    }}>
                     <View style={{backgroundColor:'#F5FCFF'}}>

                        <Header>
                          <Left>
                            <Button transparent    >
                              <Icon name="close" onPress={() => this.setState({findPlaceInfo:false})}/>
                            </Button>
                          </Left>
                          <Body>
                            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                            <Text>جستجوی مکان </Text>
                          </View>
                          </Body>
                          <Right>
                          </Right>
                        </Header>
                        <View style={{height:Dimensions.get('window').height-90}}>
                          
                        <SearchBar
                          icon={{ type: 'font-awesome', name: 'search' }}
                          round
                          lightTheme={true}
                          onChangeText={this.searchPlaceChange}
                          onClearText={()=>{}}
                          inputStyle={{textAlign:'center'}}
                          containerStyle={{direction:'rtl'}}
                          placeholder='جستجو' /> 
                          <View style={{flex:3}}>
                            <SelectMultiple
                              style={{direction:'rtl',flex:8}}
                              items={this.state.findPlaces}
                              selectedItems={this.state.selectedFindPlaces}
                              selectedLabelStyle={{color:'white'}}
                              selectedRowStyle={{backgroundColor:'gray'}}
                              onSelectionsChange={this.onFindPlaceChange} />
                          </View>
                          <View style={{flex:1,flexDirection:'column'}}>
                            <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
                              <Text >درخواست مکان</Text>
                            </View>
                            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                                <Btn  buttonStyle={{marginHorizontal:10,flex:1,backgroundColor:this.state.setPlaceRequest?'black':'gray'}}  title=" ثبت مکان جدید"  onPress={()=>this.setState({setPlaceRequest:true})}/>
                                <Btn  buttonStyle={{marginHorizontal:10,flex:1,backgroundColor:this.state.setPlaceRequest?'gray':'black'}}  title="استفاده از درخواست فعلی" onPress={()=>this.setState({setPlaceRequest:false})}/>
                            </View>
                          </View>
                        
                      </View>
                      <View style={{height:30}}>
                        <TouchableOpacity 
                            activeOpacity = { 0.8 } 
                            onPress = {this.callBackPlaceInfo} 
                            style = {{width:'100%',alignSelf: 'stretch',position:'absolute',
                            bottom:0,margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                          <Text style = {{textAlign:'center'}}>تایید</Text>
                        </TouchableOpacity>
                      </View>

                     </View>
            </MM>
        
        
        </MyScrollView>
      </Container>
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
