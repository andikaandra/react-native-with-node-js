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

    handleChangeStatus = (id) => {
        this.props.dispatch(updateStatusTodos(id));
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
                        <CheckBox checked={status} onPress={() => this.handleChangeStatus(todo.id)}/>
                        <Body>
                            <Text numberOfLines={1} ellipsizeMode="tail">{todo.title}</Text>
                            <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                        </Body>
                        <Text note>3:43 pm</Text>
                    </ListItem>
                )
            })
        ) : (
            <ListItem >
                <Left>
                    <Text>No Todo</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
        return (
            <Container >
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
