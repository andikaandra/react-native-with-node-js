import React, { Component } from 'react';
import { Container, Content, List} from 'native-base';
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
                <Content>
                    <List>
                        <Todos />
                    </List>
                </Content>
            </Container>
        );
    }
}

export default (TodoPage);
