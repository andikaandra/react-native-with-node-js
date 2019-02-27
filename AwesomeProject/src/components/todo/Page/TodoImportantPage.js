import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, List} from 'native-base';
import TodosImportant from "../resource/TodosImportant";


class TodosImportantPage extends Component {
    render() {
        return (  
            <Container>
                <Header>
                    <Body>
                        <Title>Important Todo</Title>
                    </Body>
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
