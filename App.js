'use strict';
//import React from 'react';
import React, { Component } from "react";
import { StackNavigator,DrawerNavigator } from 'react-navigation';

//import MyListItem from './MyListItem'           
import ActionButton from './ActionButton';         
import webview from './webview';         
import SwipeoutExample from './SwipeoutExample'             
import ActionButtonItem from './ActionButtonItem'             
import NoNavigatorPage from './NoNavigatorPage'             
import Date_Time_Persian from './Date_Time_Persian'             
import TokenBox from './TokenBox'             
import AddingPCH from './AddingPCH'             
import Aicons from './Aicons'             
import ReqNews from './ReqNews'             
import data from './data'             
import Drawer from './drawer'             
import Login_confirm from './login_confirm'             
import imagevideo from './imagevideo'             
import Wall from './wall'              
import details from './Details'              
import Reqaddplace from './Reqaddplace'              
import FilterMenu from './FilterMenu'              
import Project from './project'              
import Requests_RS from './Requests_RS'              
import ChatList from './ChatList'              
//import FilterMenu from './FilterMenu'              
//import FilterMenu from './FilterMenu'              
//import FilterMenu from './FilterMenu'              
//import FilterMenu from './FilterMenu'              
//import FilterMenu from './FilterMenu'              
import Req_AddPCH from './Req_AddPCH'             
import login from './login'             
import Pic_template from './Pic_template'             
import ScreenOne from './ScreenOne'             
import message2Wall from './message2Wall'             
import ReqActive from './ReqActive'             
import Profile from './Profile'             
import ScreenThree from './ScreenThree'             
import ReqReport from './ReqReport'             
import score from './score'             
import Quote from './Quote'             
import ScreenTwo from './ScreenTwo'             
import Details from './Details'             
import styles from './styles'             
import Message from './Message'             
import RadiusButton from './RadiusButton'             
import SplashPage from './SplashPage'             
import suggest2Wall from './suggest2Wall'             
console.disableYellowBox = true;
const App = DrawerNavigator({
    // ScreenZero: { screen: ScreenZero},
    Reqaddplace: {screen: Reqaddplace},
    login: {screen: login},
    Login_confirm: {screen: Login_confirm},
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree},
    ActionButton: {screen: ActionButton},
    SwipeoutExample: {screen: SwipeoutExample},
    ActionButtonItem: {screen: ActionButtonItem},
    Drawer: {screen: Drawer},
    imagevideo: {screen: imagevideo},
    Wall: {screen: Wall},
    details: {screen: details},
    Project: {screen: Project},
    Requests_RS: {screen: Requests_RS},
    ChatList: {screen: ChatList},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    Date_Time_Persian: {screen: Date_Time_Persian},
    TokenBox: {screen: TokenBox},
    AddingPCH: {screen: AddingPCH},
    Aicons: {screen: Aicons},
    ReqNews: {screen: ReqNews},
    Req_AddPCH: {screen: Req_AddPCH},
    FilterMenu:{screen:FilterMenu},
    Pic_template: {screen: Pic_template},
    message2Wall: {screen: message2Wall},
    ReqActive: {screen: ReqActive},
    Profile: {screen: Profile},
    ScreenThree: {screen: ScreenThree},
    ReqReport: {screen: ReqReport},
    score: {screen: score},
    Quote: {screen: Quote},
    Details: {screen: Details},
    Message: {screen: Message},
    RadiusButton: {screen: RadiusButton},
    SplashPage: {screen: SplashPage},
    suggest2Wall: {screen: suggest2Wall},
    webview: {screen: webview},
    
   
},{ 
   // headerMode: 'none' , 
    drawerPosition: 'right',
    contentComponent: props => <Drawer {...props}
    />
})



export default App;
//export default App;