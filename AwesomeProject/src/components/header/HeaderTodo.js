import React, { Component } from 'react';
import { Header, Left, Right, Body, Button, Icon, Title } from 'native-base';
import OpenDrawer from './OpenDrawer';

export default class HeaderTodo extends Component {
  render() {
    const headerTitle = this.props.navigation.state.routeName;
    return (
        <Header>
            <Left>
                <OpenDrawer navigation={this.props.navigation}/>
            </Left>
            <Body>
                <Title>{headerTitle}</Title>
            </Body>
            <Right>
                <Button transparent onPress={() => this.props.navigation.navigate('AddTodo')}>
                    <Icon name='add' />
                </Button>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>
    );
  }
}