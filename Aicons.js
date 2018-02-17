import React, { Component } from 'react';
import { Container, Header, Content, Icon } from 'native-base';
export default class IconExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Icon name='home' />
          <Icon name='keypad' />
          <Icon name='alarm' />
          <Icon name='medkit' />
          <Icon name='refresh' />
          <Icon name='cog' />
          <Icon ios='ios-menu' android="md-menu" style={{fontSize: 20, color: 'red'}}/>
        </Content>
      </Container>
    );
  }
}