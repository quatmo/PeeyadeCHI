
import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

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



      render() {
        return (
          <View style={{}}>
            <Text style={styles.title}>
             this Season
            </Text>
            <Text style={styles.subtitle}>
             the OS that is not os 
             is not os: may be this is not syntanx but is syncronize
             ma baker the most wanted woman in Uk
            </Text>

            <Text style={styles.rtl}>
               this Season
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
               سه شنبه ساعت ۱۲ و ۴۵ دقیقه
            </Text>

          <Text style={styles.rtl}>
          آدرس 
          </Text>
          <Text style={styles.log}>
          میدان انقلاب خیابان کارگر جنوبی کوچه‌ی ۶ پلاک ۸
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
                padding:20
              }}>
               
               <View style={{flexDirection:'row',alignItems:'center'}}> 
                  <Text>{'در انتظار تایید'}</Text>
                </View>


                <View>
                  <Text>{'نویسنده'}</Text>
                </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                  <Text>{'پیاده چی کتاب'}</Text>
                </View>

              <Image
                style={styles.photo}
                resizeMode={'stretch'}
                source={require('./image/testlogo.png')}
              />
              </View>

                
            </View>}
          />

          





          </View>
          
        );
      }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F1FF',
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
