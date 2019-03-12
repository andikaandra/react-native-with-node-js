import React, { Component } from 'react';
import { Container, Header, Body, Title, Icon, Left, Right, Button, Content, List} from 'native-base';
import TodosDone from "../resource/TodosDone";
import OpenDrawer from '../../header/OpenDrawer';

class TodoDonePage extends Component {
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
                        <TodosDone />
                    </List>
                </Content>
            </Container>
        );
    }
}

export default (TodoDonePage);
