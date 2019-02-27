import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List} from 'native-base';
import TodosDone from "../resource/TodosDone";


class TodoDonePage extends Component {
    render() {
        return (  
            <Container>
                <Header danger>
                    <Body>
                        <Title>Done Todo</Title>
                    </Body>
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
