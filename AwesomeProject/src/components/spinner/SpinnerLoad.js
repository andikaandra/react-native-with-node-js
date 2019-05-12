import React, { Component } from 'react';
import { Container, Spinner, Content } from 'native-base';

export default class SpinnerLoad extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color='red' />
        </Content>
      </Container>
    );
  }
}