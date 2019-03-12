import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTodo extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical 
              active={this.props.navigation.state.index === 0}
              onPress={() => this.props.navigation.navigate('Todo')}>
              <Icon name="ios-close-circle-outline" />
              <Text>Todo</Text>
            </Button>
            <Button vertical
              active={this.props.navigation.state.index === 1}
              onPress={() => this.props.navigation.navigate('Important')}>
              <Icon name="ios-information-circle-outline" />
              <Text>Important</Text>
            </Button>
            <Button vertical
              active={this.props.navigation.state.index === 2}
              onPress={() => this.props.navigation.navigate('Done')}>
              <Icon name="ios-checkmark-circle-outline" />
              <Text>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}