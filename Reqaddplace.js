import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import JalaliCalendarPicker from 'react-native-jalali-calendar-picker';
import { Container, Content,Title, Icon,Button, Footer,Header, Left, Body, Right } from 'native-base';
import MyScrollView from './AddPlacescrolview'
import MapView from 'react-native-maps';
import { Modal  as MM} from "react-native";
import TimePicker from 'react-native-simple-time-picker';
import {
  Platform,Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import TokenBox from './TokenBox';
import Modal from 'react-native-simple-modal';
import {Button as Btn ,SearchBar } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'


var device_width = Dimensions.get('window').width;
type Props = {};
export default class App extends Component<Props> {
  constructor () {
    super()
    this.state = {
      fruits : ['honda','kotlin','آرش توکلی', 'ساتوشی', 'ناکامورا','استیو وزنیاک', 'جابز امپرالیست', 'بیل گیتس'],
        selectedIndex: 2,
        selectedHours: 0,
        selectedMinutes: 0,
        selectedDead:null,
        selectedStartDate: null,
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
        contents:[],
        contentsIndex:0,
        openA:false,

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
    this.delphotogs = this.delphotogs.bind(this);




  }
  addAuthors()
  {
    this.state.authors.push(
    <TokenBox 
      name={this.state.authorsIndex} 
      key ={this.state.authorsIndex} 
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
    this.state.contents.push(
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
    let tmp=this.state.contents.slice()
    for (let index = 0; index < tmp.length; index++) {
          if(tmp[index].props.did==k)
          {
            tmp.splice(index,1);
          }
    }
    console.log('key',tmp);
    this.setState({contents:tmp   })
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

        <MyScrollView>
            <View style = { {justifyContent:'space-around',backgroundColor:'#F5FCFF',width:device_width} }>
              <View style = { {flex:1} }>{/*main compoenent*/}
              <Text style={{alignSelf:'flex-end'}}>
                نام گزارش
              </Text>
              <TextInput
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

            <View style = {  {justifyContent:'space-around',backgroundColor:'green',flex:1,width:device_width}}>
            <View style={styles.container}>
                  <Text style={{flex:1,marginTop:10}}>
                   نام مکان
                  </Text>
                  <TextInput
                    style={{
                    flex:1,
                    alignSelf: 'stretch',
                    flexDirection:'row',
                  //  height: 30,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginHorizontal:10
                  }}/>
                

                  <Text style={{flex:1,marginTop:10}}>
                   آدرس مکان
                  </Text>
                  <TextInput
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
                      latitude: 35.704981,
                      longitude: 51.416007,
                      latitudeDelta: 0.0022,
                      longitudeDelta: 0.0021,
                    }}
                   />

                  <Text style={{flex:1}}>
                  راهنمای تهیه گزارش
                  </Text> 
                  <TextInput
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

            <View style = {  {justifyContent:'space-around',backgroundColor:'yellow',flex:1,width:device_width} }>
           

            
              <View style={{}}>
                  <Text style={{alignSelf:'flex-end',marginRight:20}}>
                    اضافه کردن نویسنده
                  </Text>
                  <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                     {this.state.authors}
                  </View>
                  <TouchableHighlight
                        onPress={()=>{this.setState({openA: true}) }   }
                        
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
                     <View style={{}}>

                        <Header>
                          <Left>
                            <Button transparent    >
                              <Icon name="close" onPress={() => this.setState({openA:false})}/>
                            </Button>
                          </Left>
                          <Body>
                            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                            <Text>666</Text>
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

                        <Footer>
                        <Left>
                        </Left>
                        <Body>
                            <Btn
                            style={{}}
                              buttonStyle={styles.buttonStyle}
                              title="تایید"
                              onPress={()=>{}}/>
                        </Body>
                        <Right>
                        </Right>
                        </Footer>


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
                        onPress={this.addmoviems}
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
                    {this.state.contents}
                  </View>

                  <TouchableHighlight
                        onPress={this.addcontents}
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
                        onPress={this.addphotogs}
                        style={{alignItems:'center',
                                backgroundColor:'black',
                                marginHorizontal:10}}>
                        <Text style={{color:'white'}}>+</Text>
                    </TouchableHighlight>
                   
              </View>






            </View>
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
