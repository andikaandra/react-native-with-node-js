import React, { Component } from 'react';
import { Container, Content, List, Header, Left, Right, Body, Button, Icon, Title} from 'native-base';
import TodosImportant from "../resource/TodosImportant";
import OpenDrawer from '../../header/OpenDrawer';

class TodosImportantPage extends Component {
    render() {
        const headerTitle = this.props.navigation.state.routeName;
        return (  
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
                <Content>
                    <List>
                        <TodosImportant />
                    </List>
                </Content>
            </Container>
        );
    }
}

export default (TodosImportantPage);
