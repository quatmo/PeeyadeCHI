import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class ScreenThree extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome ${navigation.state.params.screen}`
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={{height:30,backgroundColor:'red',flex:1,flexDirection:'row',marginHorizontal:0}}>

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
    marginRight: 25,
    marginLeft: 25,
    marginTop: 20,
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