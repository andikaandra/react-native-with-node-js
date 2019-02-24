import React, { Component } from 'react';
import { Container, Header,Left, Body, Right, Footer, FooterTab, Title, Text, Button, Icon, Content, List} from 'native-base';
import Todos from "./Todos";


class TodoPage extends Component {
    render() {
        return (  
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Todo</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <Todos />
                    </List>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon name="book" />
                            <Text>Todo</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="star" />
                            <Text>Important</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="done-all" />
                            <Text>Done</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default (TodoPage);
