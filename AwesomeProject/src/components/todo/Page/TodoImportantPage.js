import React, { Component } from 'react';
import { Container, Content, List, Header, Left, Right, Body, Button, Icon, Title, StyleProvider} from 'native-base';
import TodosImportant from "../resource/TodosImportant";
import OpenDrawer from '../../header/OpenDrawer';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';

class TodosImportantPage extends Component {
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
                    <TodosImportant />
                </Container>
            </StyleProvider>
        );
    }
}

export default (TodosImportantPage);
