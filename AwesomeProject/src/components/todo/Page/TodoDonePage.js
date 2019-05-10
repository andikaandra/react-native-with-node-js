import React, { Component } from 'react';
import { Container, Header, Body, Title, Icon, Left, Right, Button, Content, List, StyleProvider} from 'native-base';
import TodosDone from "../resource/TodosDone";
import OpenDrawer from '../../header/OpenDrawer';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';

class TodoDonePage extends Component {
    render() {
        const headerTitle = this.props.navigation.state.routeName;
        return (  
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Left>
                            <OpenDrawer navigation={this.props.navigation}/>
                        </Left>
                        <Body>
                            <Title>{headerTitle}</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </Right>
                    </Header>
                    <TodosDone />
                </Container>
            </StyleProvider>
        );
    }
}

export default (TodoDonePage);
