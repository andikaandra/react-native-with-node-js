import React, { PureComponent } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTodo extends PureComponent {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical 
              active={this.props.navigation.state.index === 0}
              onPress={() => this.props.navigation.navigate('Todo')}>
              <Icon name="md-paper-plane" />
              <Text>Todo</Text>
            </Button>
            <Button vertical
              active={this.props.navigation.state.index === 1}
              onPress={() => this.props.navigation.navigate('Important')}>
              <Icon name="md-flash" />
              <Text>Important</Text>
            </Button>
            <Button vertical
              active={this.props.navigation.state.index === 2}
              onPress={() => this.props.navigation.navigate('Done')}>
              <Icon name="md-done-all" />
              <Text>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}