import React, { Component } from 'react';
import { Container, Header,Left, Body, Right, Footer, FooterTab, Title, Text, Button, Icon, Content, List} from 'native-base';
import TodoPage from './Todo/TodoPage';

class MainPage extends Component {
    render() {
        return (
            <Container>
                <TodoPage />
            </Container>
        );
    }
}

export default (MainPage);
