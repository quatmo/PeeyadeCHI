import React from 'react';

import { StackNavigator } from 'react-navigation';
//import ScreenZero from './ScreenZero';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const App = StackNavigator({
   // ScreenZero: { screen: ScreenZero},
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree}
})

export default App_;
//export default App;