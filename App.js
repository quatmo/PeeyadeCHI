//import React from 'react';

import { StackNavigator } from 'react-navigation';

//ßimport MyListItem from './MyListItem'           
import ActionButton from './ActionButton';         
import SwipeoutExample from './SwipeoutExample'             
import ActionButtonItem from './ActionButtonItem'             
import NoNavigatorPage from './NoNavigatorPage'             
import ReqAddPlace from './ReqAddPlace'             
import TokenBox from './TokenBox'             
import AddingPCH from './AddingPCH'             
import Notes from './Notes'             
import ReqNews from './ReqNews'             
import data from './data'             
//persoimport PersonPage from './PersonPage'             
import Req_AddPCH from './Req_AddPCH'             
import login from './login'             
import Pic_template from './Pic_template'             
import ScreenOne from './ScreenOne'             
import message2Wall from './message2Wall'             
//import LoginPage from './LoginPage'             
import Profile from './Profile'             
import ScreenThree from './ScreenThree'             
//import MainPage from './MainPage'             
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
    NoNavigatorPage: {screen: NoNavigatorPage},
    ReqAddPlace: {screen: ReqAddPlace},
    TokenBox: {screen: TokenBox},
    AddingPCH: {screen: AddingPCH},
    Notes: {screen: Notes},
    ReqNews: {screen: ReqNews},
    Req_AddPCH: {screen: Req_AddPCH},
    login: {screen: login},
    Pic_template: {screen: Pic_template},
    message2Wall: {screen: message2Wall},
    // LoginPage: {screen: LoginPage},
    Profile: {screen: Profile},
    ScreenThree: {screen: ScreenThree},
    //MainPage: {screen: MainPage},
    score: {screen: score},
    Quote: {screen: Quote},
    Details: {screen: Details},
    Message: {screen: Message},
    RadiusButton: {screen: RadiusButton},
    SplashPage: {screen: SplashPage},
    suggest2Wall: {screen: suggest2Wall}
   
})

export default App;
//export default App;