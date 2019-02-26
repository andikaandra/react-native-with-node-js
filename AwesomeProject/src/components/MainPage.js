import React, { Component } from 'react';
import { Container } from 'native-base';
import TodoPage from './todo/TodoPage';

class MainPage extends Component {
    static navigationOptions = {
        title: 'Todo'
    };

    render() {
        return (
            <Container>
                <TodoPage />
            </Container>
        );
    }
}

export default (MainPage);
