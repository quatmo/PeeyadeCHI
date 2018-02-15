import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class ScreenOne extends Component {
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props is here");
    return (
      <View style={{}}>
      <ScrollView contentContainerStyle={{ }}>
        <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
            <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ScreenThree", {screen: "Screen  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Screen </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("SwipeoutExample", {screen: "SwipeoutExample"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>SwipeoutExample </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("NoNavigatorPage", {screen: "NoNavigatorPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>NoNavigatorPage </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ReqAddPlace", {screen: "ReqAddPlace  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqAddPlace </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ReqActive", {screen: "ReqActive"})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqActive </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("TokenBox", {screen: "TokenBox  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>TokenBox </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("AddingPCH", {screen: "AddingPCH  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>AddingPCH </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Notes", {screen: "Notes  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Notes </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ReqNews", {screen: "ReqNews  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ReqNews </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Req_AddPCH", {screen: "Req_AddPCH  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Req_AddPCH </Text>
        </TouchableHighlight>
       
        <TouchableHighlight
          onPress={() => navigate("login", {screen: "login  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>login </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Pic_template", {screen: "Pic_template  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Pic_template </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("message2Wall", {screen: "message2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>message2Wall </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Profile", {screen: "Profile  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Profile(Instagram) </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ScreenThree", {screen: "ScreenThree  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>ScreenThree </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("ScreenTwo", {screen: "ScreenTwo  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Map </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("MainPage", {screen: "MainPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>MainPage </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("score", {screen: "score  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>score </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Details", {screen: "Details  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Details </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("Message", {screen: "Message  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>Message </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("RadiusButton", {screen: "RadiusButton  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>RadiusButton </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("SplashPage", {screen: "SplashPage  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>SplashPage </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate("suggest2Wall", {screen: "suggest2Wall  "})}
          style={[styles.button, {backgroundColor: '#FCDE33'}]}>
          <Text
            style={styles.buttonText}>suggest2Wall </Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
});
export default ScreenOne;