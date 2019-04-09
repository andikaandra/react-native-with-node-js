import React, { Component } from 'react';
import { Container,Left, Body, CheckBox, Right, Text, Icon, ListItem, } from 'native-base';
import { connect } from 'react-redux';
import { fetchTodos } from "../../../actions/todoActions";
import SpinnerLoad from '../../spinner/SpinnerLoad';

class TodosImportant extends Component {
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
                    <Text>Error</Text>
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
                let status = todo.status ? true : false;
                return(
                    <ListItem key={todo.id}>
                        <CheckBox checked={status} />
                        <Body>
                            <Text numberOfLines={1} ellipsizeMode="tail">{todo.title}</Text>
                            <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                        </Body>
                    </ListItem>
                )      
            })
        ) : (
            <ListItem>
                <Left>
                    <Text>Nothing Important</Text>
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
    todos: (state.todos.items).filter(todo => { if (todo.status==2) return todo} ),
    loading: state.todos.loading,
    error: state.todos.error
});

export default connect(mapStateToProps)(TodosImportant);
