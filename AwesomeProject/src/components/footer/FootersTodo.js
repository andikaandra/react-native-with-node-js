import React, { PureComponent } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    black: {
        color: "#000000"
    },
    white: {
      color: "#ececec"
    },
    grey: {
      color: "#606060"
    },
});

class FooterTodo extends PureComponent {
  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: '#000'}}>
            <Button style={{backgroundColor: '#000'}} vertical 
              active={this.props.navigation.state.index === 0}
              onPress={() => this.props.navigation.navigate('Todo')}>
              <Icon name="md-paper-plane" style={this.props.navigation.state.index === 0 ? styles.white : styles.grey}/>
              <Text style={this.props.navigation.state.index === 0 ? styles.white : styles.grey}>Todo</Text>
            </Button>
            <Button style={{backgroundColor: '#000'}} vertical
              active={this.props.navigation.state.index === 1}
              onPress={() => this.props.navigation.navigate('Important')}>
              <Icon name="md-flash" style={this.props.navigation.state.index === 1 ? styles.white : styles.grey}/>
              <Text style={this.props.navigation.state.index === 1 ? styles.white : styles.grey}>Important</Text>
            </Button>
            <Button style={{backgroundColor: '#000'}} vertical
              active={this.props.navigation.state.index === 2}
              onPress={() => this.props.navigation.navigate('Done')}>
              <Icon name="md-done-all" style={this.props.navigation.state.index === 2 ? styles.white : styles.grey}/>
              <Text style={this.props.navigation.state.index === 2 ? styles.white : styles.grey}>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default FooterTodo;