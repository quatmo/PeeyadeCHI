/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,Alert
} from 'react-native';
import fetching from './fetchapi';
import renderIf from './renderif';
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
          pic:"https://facebook.github.io/react-native/docs/assets/favicon.png",
          firstName:'---',

          dataSource: ds.cloneWithRows([]),
        };
        this.addOne = this.addOne.bind(this)
        this.setdata=this.setdata.bind(this)
      }
      setdata=(res)=>{
       // this.setState({bons:res.data.user.bons})
       // this.setState({pic:'https://peeyade.com'+res.data.user.bestPhoto.prefix+res.data.user.bestPhoto.suffix})
       // this.setState({username:res.data.user.username})
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({dataSource:ds.cloneWithRows(res.data)});
       
        //this.setState({pic:'peeyade.com/'+res.data.prefix+res.data.possix})
    
      }
      addOne=()=> {
          fetching("https://peeyade.com/api/pch/v1/scoreboard","GET")
          .then((res)=>{this.setdata(res)})
      }

componentDidMount()
{
  this.addOne();
}

      render() {
        return (
          <ListView
            style={styles.listview}
            dataSource={this.state.dataSource}
            renderRow={(data, sectionID, rowID) => 
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
                 {renderIf(Number(rowID)==0, 
                    <Image
                      style={{height:40,width:40}}
                      resizeMode={'stretch'}
//                      source={{uri:'http://'+data.user.bestPhoto.prefix+data.user.bestPhoto.suffix}}
                      source={{uri:'https://peeyade.com'+data.user.bestPhoto.prefix+data.user.bestPhoto.suffix}}
                      //source={{uri:this.state.pic}}
                      
                    />
                )}
                {renderIf(Number(rowID)!=0, 
                    <Image
                      style={styles.photo}
                      resizeMode={'stretch'}
                     // source={{uri:'http://'+data.user.bestPhoto.prefix+data.user.bestPhoto.suffix}}
                      source={{uri:'https://peeyade.com'+data.user.bestPhoto.prefix+data.user.bestPhoto.suffix}}
                    />
                )}

        
                <View>
                 
                {renderIf(data.ff==1, 
                     <Text style={{fontSize:30}}>{data.points}</Text>
                )}
                   
                {renderIf(data.ff!=1, 
                     <Text style={{fontSize:20}}>{data.points}</Text>
                )}

                
                  <Text>{'امتیاز'}</Text>
                </View>

                <View>
                  <Text style={{fontSize:20}}>{data.user.profile.firstName}</Text>
                  <Text>{'پیاده چی کتاب'}</Text>
                </View>


                <View>
                     
                {renderIf(Number(rowID)==0, 
                       <Text style={{fontWeight:'500',fontSize:30,backgroundColor:'white',borderRadius:1}}>{Number(rowID)+1}</Text>
                )}
                      
                {renderIf(Number(rowID)!=0, 
                       <Text style={{fontSize:20,backgroundColor:'white',borderRadius:1}}>{Number(rowID)+1}</Text>
                )}
                
                </View>
            </View>
            
          }
          />
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
  listview: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,

  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
