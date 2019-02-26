import React, { Component } from 'react';
import { Container, Content, List} from 'native-base';
import TodosImportant from "../Resource/TodosImportant";


class TodosImportantPage extends Component {
    render() {
        return (  
            <Container>
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
