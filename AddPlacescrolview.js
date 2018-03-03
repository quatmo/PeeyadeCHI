import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
var device_width = Dimensions.get('screen').width;
//import Progre from './ProgressBar'
import {ButtonGroup} from 'react-native-elements'
export  class MyScrollView extends Component
{
  constructor()
  {
    super();
    this.state = { 
      selectedIndex:0,      
      progress:30,
      }
    this.updateIndex=this.updateIndex.bind(this)

}
  
  moveToPage()
  {
    ///let cc= (this.state.selectedIndex+1) % 3+1;
    ///this.setState({selectedIndex: cc });
    this.refs.scrollView.scrollTo({ x: (( (this.state.selectedIndex)  ) * device_width ), y: 0, animated: true });
    
  } 
  updateIndex (v) {
    //alert(v)
    console.log('Scrolling',v)
    this.setState({selectedIndex:v})
    //let cc= (this.state.selectedIndex+1) % 2+1;
    //this.setState({selectedIndex: cc });
    this.refs.scrollView.scrollTo({ x: (( (v)  ) * device_width ), y: 0, animated: true });
    
  }
  
  render()
  {
    const pchinfo = () => <Text>اطالاعات پیاده‌چی</Text>
    const places_ = () => <Text>اطلاعات مکان</Text>
    const reportinfo = () => <Text>اطلاعات گزارش</Text>

    const headersButton = [
      { element: reportinfo }, 
      { element: places_ }, 
      { element: pchinfo },
    ]

    return(
      <View style = { styles.container }>
        <View style={{flexDirection:'column'}}>
            
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          style={{borderRadius:50}}
          buttons={headersButton}
          innerBorderStyle={{borderRadius:300,color:'white'}}
          buttonStyle={{borderRadius:50}}
          containerBorderRadius={1}
          selectedButtonStyle={{borderRadius:50,backgroundColor:'gray'}}
          containerStyle={{borderRadius:300,height: 40,backgroundColor:'white'}}/>


        </View>
        <ScrollView ref = "scrollView" showsHorizontalScrollIndicator = { false } horizontal = { true } pagingEnabled = { true }>
          { this.props.children }
        </ScrollView>
        
        {
          (React.Children.count( this.props.children ) <= 1)
          ?
            null
          :
            (<View >
            <View style = {{} }>
              <TouchableOpacity activeOpacity = { 0.8 } 
                //onPress = { this.moveToPage.bind(this) } 
                onPress = { ()=>{this.props.onRegisterClick()} } 
                style = {{margin:0,justifyContent:'center',backgroundColor:'gray',height:50} }>
                <Text style = { {textAlign:'center'}}>ثبت و ارسال</Text>
              </TouchableOpacity>
            </View> 
          </View>
        
        
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  container:
  {
    flex: 1,
    position: 'relative',
    marginTop: (Platform.OS === 'ios') ? 0 : 0
  },

  View1:
  {
   // flex: 1,
    backgroundColor: '#EF5350',
    justifyContent: 'center',
    alignItems: 'center',
    width: device_width
  },

  View2:
  {
   // flex: 1,
    backgroundColor: '#AB47BC',
    justifyContent: 'center',
    alignItems: 'center',
    width: device_width
  },

  View3:
  {
   // flex: 1,
    backgroundColor: '#FF7043',
    justifyContent: 'center',
    alignItems: 'center',
    width: device_width
  },

  View4:
  {
    flex: 1,
    backgroundColor: '#66BB6A',
    justifyContent: 'center',
    alignItems: 'center',
    width: device_width
  },

  textInputButtonHolder:
  {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },

  insideHolder:
  {
   // position: 'relative',
    margin: 15
  },

  textInput:
  {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 40,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 20
  },

  button:
  {
    backgroundColor: '#26A69A',
    height: 39,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    right: 0,
    top: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
  },

  text:
  {
    fontSize: 30,
    color: 'white'
  }
});
export default MyScrollView;