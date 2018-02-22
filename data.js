import React from 'react';
import {Image} from 'react-native';


var rows = [
   {
    text: "onPress Callback",
    right: [
      {
        text: 'X',
        onPress: function(){ alert('button pressed') },
        backgroundColor: '#60ff88',
      },
      {
        text: 'O',
        onPress: function(){ alert('button pressed') },
        backgroundColor: '#ff6022',
      },
      {
        text: '∆',
        onPress: function(){ alert('button pressed') },
        backgroundColor: '#0060ff',
      }
    ],
  }
  
];

export default rows;
