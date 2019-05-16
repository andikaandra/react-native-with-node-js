import React, { Component } from 'react';
import { Button, Icon, Fab } from 'native-base';

export default class AgendaFabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'false'
    };
  }
  render() {
    return (  
      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        position="bottomRight"
        style={{ backgroundColor: '#007aff' }}
        onPress={() => this.props.navigation.navigate('AddAgenda')}>
        <Icon name="md-add" />
      </Fab>
    );
  }
}