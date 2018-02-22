//import React from 'react';

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
import FilterMenu from './FilterMenu'             
import drawer from './drawer'             
import Login_confirm from './login_confirm'             
import imagevideo from './imagevideo'             
import wall from './wall'              
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

const App = StackNavigator({
   // ScreenZero: { screen: ScreenZero},
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree},
    ActionButton: {screen: ActionButton},
    SwipeoutExample: {screen: SwipeoutExample},
    ActionButtonItem: {screen: ActionButtonItem},
    drawer: {screen: drawer},
    imagevideo: {screen: imagevideo},
    Login_confirm: {screen: Login_confirm},
    wall: {screen: wall},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    //NoNavigatorPage: {screen: NoNavigatorPage},
    Date_Time_Persian: {screen: Date_Time_Persian},
    TokenBox: {screen: TokenBox},
    AddingPCH: {screen: AddingPCH},
    Aicons: {screen: Aicons},
    ReqNews: {screen: ReqNews},
    Req_AddPCH: {screen: Req_AddPCH},
    login: {screen: login},
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

    
   
})

export default App;
//export default App;