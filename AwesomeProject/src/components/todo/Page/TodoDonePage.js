import React, { Component } from 'react';
import { Container, Content, List} from 'native-base';
import TodosDone from "../Resource/TodosDone";


class TodoDonePage extends Component {
    render() {
        return (  
            <Container>
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
