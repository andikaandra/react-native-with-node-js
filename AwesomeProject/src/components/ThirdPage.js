import React, { Component } from 'react';
import { Container } from 'native-base';
import TodoPage from './todo/TodoPage';

class ThirdPage extends Component {
    render() {
        return (
            <Container>
                <TodoPage />
            </Container>
        );
    }
}

export default (ThirdPage);
