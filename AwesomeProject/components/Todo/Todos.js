import React, { Component } from 'react';
import { Container,Left, Body, Toast, CheckBox, Right, Text, Icon, ListItem, } from 'native-base';
import { connect } from 'react-redux';
import { fetchTodos } from "../../action/todoActions";
import SpinnerLoad from '../Spinner/SpinnerLoad';

class Todos extends Component {
    constructor(props) {
        super(props);
        props.dispatch(fetchTodos());
        this.state = {
            "todos" : []
        }
    }

    render() {
        let error = this.props.error;
        if (error) {
            return (
                <Container>
                    <Text>Error wkwk</Text>
                </Container>
            );
        }
        let loading = this.props.loading;
        if (loading) {
            return (
                <Container>
                    <SpinnerLoad />
                </Container>
            );            
        }
        let todos = this.props.todos;
        const listTodo = todos.length ? (
            todos.map(todo => {
                if (todo.status) {
                    return(
                        <ListItem key={todo.id}>
                            <CheckBox checked={true} />
                            <Body>
                                <Text>{todo.title}</Text>
                            </Body>
                        </ListItem>
                    )                    
                } else {
                    return(
                        <ListItem key={todo.id}>
                            <CheckBox checked={false} onPress={() => alert("This is Card Header")}/>
                            <Body>
                                <Text>{todo.title}</Text>
                            </Body>
                        </ListItem>
                    )
                }
            })
        ) : (
            <ListItem>
                <Left>
                    <Text>Simon Mignolet</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
        return (
            <Container>
                {listTodo}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.items,
    loading: state.todos.loading,
    error: state.todos.error
});

export default connect(mapStateToProps)(Todos);
