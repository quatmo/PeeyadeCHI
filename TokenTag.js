
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,TextInput,TouchableHighlight
} from 'react-native';


import { Container, Content,Title,Tab,Tabs,TabHeading, Icon, Footer,Header, Left, Body, Right } from 'native-base';

type Props = {};
export default class TokenTAG extends Component<Props> {

  constructor(props) {
        super(props);

          //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            
            ttoken:'',
            tokens:[],
            tokensText:[],
          //dataSource: ds.cloneWithRows([]),
        };
        this.tokenPress=this.tokenPress.bind(this)
      }
  tokenPress(tex)
  {
      //alert(tex)
        let temparay=this.state.tokensText.slice()
        let tokenary=this.state.tokens.slice()
        for (let index = 0; index < temparay.length; index++) {
            //const element = this.state.tokensText[index];
            if(temparay[index]==tex)
            {
                temparay.splice(index,1)
                tokenary.splice(index,1)
            }
            
        }

        this.setState({tokensText:temparay})
        this.setState({tokens:tokenary})
        this.setState({ttoken:tex})
      //console.log(tex)
  }
  newToken(a)
  {
    //alert(a)
    let temp=[]
    if(a[String(a).length-1]=='-')
    {
        let strTmp=String(a).substring(0,String(a).length-1)
        temp.push(
            <TouchableHighlight
                style={{
                backgroundColor: '#FCDE33',
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                }}>
                <Text
                    onPress={()=>{
                        this.tokenPress(strTmp);
                    } }
                    style={{padding:10}}>{strTmp}
                </Text>
            </TouchableHighlight>)
        
        this.setState({ttoken:''})
        this.setState({tokens:this.state.tokens.concat(temp)})
        this.setState({tokensText:this.state.tokensText.concat(strTmp)})
    }
    else
    {
        this.setState({ttoken:a})
    }
    
  }

      render() {
        return (
          <View style={{flexDirection:'row',marginTop:10,flexWrap: 'wrap',}}>
            {this.state.tokens}
            <TextInput
                  onChangeText={this.newToken.bind(this)}
                  value={this.state.ttoken}
                  style={{
                    
                    maxWidth:'100%',
                    minWidth:'50%',
                    alignSelf: 'stretch',
                    flexDirection:'row',
                    height: 30,
                    textAlign:'right',
                    borderColor: 'gray',
                    borderWidth: 1,
                    margin:10,
                    }}/>
          </View>
          
        );
      }



}

