import React, { Component } from 'react';
import { Container, Content, List, StyleProvider} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import Todos from "../resource/Todos";
import HeaderTodo from '../../header/HeaderTodo';
import getTheme from '../../../../native-base-theme/components';
import material from '../../../../native-base-theme/variables/material';

class TodoPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: <HeaderTodo navigation={navigation} />
        };
    };

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Todos />
                </Container>
            </StyleProvider>
        );
    }
}

export default (TodoPage);
