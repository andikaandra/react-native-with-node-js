import React, { Component } from 'react';
import { Container, Content, List} from 'native-base';
import Todos from "../Resource/Todos";


class TodoPage extends Component {
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
