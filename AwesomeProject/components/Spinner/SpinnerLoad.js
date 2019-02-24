import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';

export default class SpinnerLoad extends Component {
  render() {
    return (
      <Container>
          <Spinner color='red' />
      </Container>
    );
  }
}