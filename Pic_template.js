
import React, { Component } from 'react';
//import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown';
//import ActionButton from 'react-native-circular-action-menu';
//import Icon from 'react-native-vector-icons';
//import ActionButton from 'react-native-circular-action-menu';
//import Icon from 'react-native-vector-icons/Ionicons';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TextInput,
  TouchableHighlight,
  NativeModules,
} from 'react-native';
import { Container, Header, Title, Content, Button, Right, Body, Left, Picker, Form, H3, Item as FormItem } from "native-base";
import Video from 'react-native-video';
var ImagePicker = NativeModules.ImageCropPicker;



const Item = Picker.Item;



type Props = {};
export default class App extends Component<Props> {

  constructor(props) 
  {
        super(props);

        this.state = {
            selected1: "key1",
            image: null,
          };

  }
  pickSingle(cropit, circular=false) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 640,
      compressImageMaxHeight: 480,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  renderVideo(video) {
    return (<View style={{height: 300, width: 300}}>
      <Video source={{uri: video.uri, type: video.mime}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onError={e => console.log(e)}
         onLoad={load => console.log(load)}
         repeat={true} />
     </View>);
  }

  renderImage(image) {
    return <Image style={{width: 100, height: 100,borderRadius:20, resizeMode: 'stretch'}} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    return this.renderImage(image);
  }




      render() {
        let data = [{
          value: 'Banana',
        }, {
          value: 'Mango',
        }, {
          value: 'Pear',
        }];

        return (

            <View style={{backgroundColor:'blue',padding:20}}>

              <View style={{alignItems:'flex-end',marginTop:-10}}>
                <TouchableHighlight
                  onPress={() => alert('close Option')}
                  style={[styles.button,]}>
                  <Text style={styles.buttonText}>X</Text>
                </TouchableHighlight>
              </View>
              <Text style={{alignSelf:'flex-end'}}>
                نوشته اصلی
              </Text>
              <View style={{backgroundColor:'red',padding:10}}>
                <View style={{flexDirection:'column',justifyContent:'center'}}> 

                  <View style={{flexDirection:'row-reverse'}}>
                    
                    <TouchableHighlight
                      style={{flex:1,marginRight:20}}
                      onPress={() => this.pickSingle(false)}>
                      {this.state.image ? this.renderAsset(this.state.image) : 
                      <Image
                      style={styles.photo}
                      resizeMode={'stretch'}
                      source={require('./image/testlogo.png')}/>}
                     {/* <Text>1</Text> */}
                    </TouchableHighlight>

                    <View style={{flex:1}}></View>
                    
                    
                    <View style={{flex:2,flexDirection:'column'}}>
                      <View style={{alignItems:'flex-end'}}>
                        <Text >
                          عکاس
                        </Text>
                      </View>
                      <Dropdown style={{marginTop:0,backgroundColor:'yellow',textAlign:'center'}}
                      //  label='کتگوری اصلی'
                        data={data}
                      />           
                    </View >  

                  </View>  
                  <View style={{flexDirection:'column'}}>
                      <Text style={{alignSelf:'flex-end'}}>
                        نوشته
                      </Text>

                    <View style={{flexDirection:'column',backgroundColor:'gray'}}>
                      <TextInput style={{height:80,backgroundColor:'green'}}/>

                      
                    </View >  

                  </View> 
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
    backgroundColor: '#F5F1FF',
  },
  rtl:{
    //flex: 1,
    justifyContent: 'flex-start',
   // alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  log:{
    backgroundColor:'red'
  }
  ,
  listview: {
    backgroundColor:'#f2f2f2',
    //flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 0,

  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
