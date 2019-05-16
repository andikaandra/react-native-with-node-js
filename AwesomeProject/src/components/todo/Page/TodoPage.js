import React, { Component } from 'react';
import { Container } from 'native-base';
import { StatusBar } from 'react-native';
import Todos from "../resource/Todos";
import HeaderTodo from '../../header/HeaderTodo';

class TodoPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <HeaderTodo navigation={navigation} />
        };
    };

    render() {
        return (
            <Container>
                <Todos />
            </Container>
        );
    }
}

export default (TodoPage);
