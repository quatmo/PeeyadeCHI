import React, { Component } from 'react';
import {
    Alert
  } from 'react-native';
export  default  fetching=(url,type)=>
{
    //try {
       return fetch(
          url,{  
            method: type,
            headers: {
              'Accept': 'application/json',
               'Content-Type': 'application/json',
              'Authorization':'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YTg2ZDQ5ZGZhOTA2OTYyMDA5NWM2N2QiLCJ1c2VyIjoi2KLYsdi02YXbjNiv2LMifQ.dJloyq--dABpkcwRhw6OSBwH59z30ZKoLD6356Kozbk'
            },
          }).then((response) => { return response.json()})
          .catch((error)=>{Alert.alert('ERROR',error.message,{cancelable:false});})  
    
          //.then((res)=>{ return res });

         /*  var obj = {  
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': '',
              'Host': 'api.producthunt.com'
            },
            body: JSON.stringify({
              'client_id': '(API KEY)',
              'client_secret': '(API SECRET)',
              'grant_type': 'client_credentials'
            }) */
}
