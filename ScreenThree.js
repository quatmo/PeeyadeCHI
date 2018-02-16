import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import {ButtonGroup} from 'react-native-elements'
class ScreenThree extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.screen}`
  });
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  

  render() {
    const { params } = this.props.navigation.state;

    const component1 = () => <Text>اطالاعات پیاده‌چی</Text>
    const component2 = () => <Text>اطلاعات مکان</Text>
    const component3 = () => <Text>اطلاعات گزارش</Text>

    const component4 = () => <Text> دریافتی</Text>
    const component5 = () => 
    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
      <Text style={{color:'red',marginRight:10}}>*</Text>
     <Text>       ارسالی</Text>
    </View>

    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const buttons2 = [{ element: component5 }, { element: component4 }]


    return (
      <View >
        <View style={{marginVertical:10,alignContent:'center',justifyContent:'space-between',backgroundColor:'red',alignItems:'center',flexDirection:'row',marginHorizontal:0}}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}>اطلاعات گزارش</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}>اطلاعات مکان</Text>
          </TouchableHighlight>


          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.buttonText}>اطلاعات پیاده‌چی</Text>
          </TouchableHighlight>
        </View>
        <View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          style={{borderRadius:50}}
          buttons={buttons}
          innerBorderStyle={{borderRadius:300,color:'white'}}
          buttonStyle={{borderRadius:50}}
          containerBorderRadius={1}
          selectedButtonStyle={{borderRadius:50,backgroundColor:'gray'}}
          containerStyle={{borderRadius:300,height: 40,backgroundColor:'white'}}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          style={{borderRadius:50}}
          buttons={buttons2}
          innerBorderStyle={{borderRadius:300,color:'white',backgroundColor:'gray'}}
          buttonStyle={{borderRadius:50}}
          containerBorderRadius={1}
          selectedButtonStyle={{borderRadius:50,backgroundColor:'gray',}}
          containerStyle={{borderRadius:300,height: 40,backgroundColor:'white'}}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 22
  },
  button: {
    flex:1,
    alignSelf: 'stretch',
    margin:20,
    borderRadius: 20,
    width:70,
    backgroundColor: 'white',
    height: 20,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:10,
    color: 'black',
    //backgroundColor:'white',
    //fontSize: 18,
    alignSelf: 'center'
  }
})

export default ScreenThree;