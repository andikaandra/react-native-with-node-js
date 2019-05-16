import React, { Component } from 'react';
import { Button, Icon } from 'native-base';

export default class OpenDrawer extends Component {
  render() {
    return (
        <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
          <Icon name="md-menu" style={{ color: "#fff" }}/>
        </Button>
    );
  }
}