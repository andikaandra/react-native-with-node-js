import React, { Component } from 'react';
import { Container,Left, Body, CheckBox, Right, Text, Icon, ListItem, } from 'native-base';
import { connect } from 'react-redux';
import { fetchTodos, updateStatusTodos } from "../../../actions/todoActions";
import SpinnerLoad from '../../spinner/SpinnerLoad';

class Todos extends Component {
    constructor(props) {
        super(props);
        props.dispatch(fetchTodos());
        this.state = {
            ...props
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
                let status = todo.status ? true : false;
                return(
                    <ListItem key={todo.id}>
                        <CheckBox checked={status} onPress={() => this.props.dispatch(updateStatusTodos(todo.id))}/>
                        <Body>
                            <Text>{todo.title}</Text>
                            <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                        </Body>
                    </ListItem>
                )
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
    todos: (state.todos.items).filter(todo => { if (!todo.status) return todo} ),
    loading: state.todos.loading,
    error: state.todos.error
});

export default connect(mapStateToProps)(Todos);
