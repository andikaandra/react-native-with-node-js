import React, { Component } from 'react';
import { Container,Left, Body, CheckBox, Right, Text, Icon, Content, List, Thumbnail, ListItem } from 'native-base';
import { connect } from 'react-redux';
import { fetchTodos, updateStatusTodos, deleteTodos } from "../../../actions/todoActions";
import SpinnerLoad from '../../spinner/SpinnerLoad';

class TodosDone extends Component {
    constructor(props) {
        super(props);
        props.dispatch(fetchTodos());
        this.state = {
            "todos" : []
        }
    }
 
    handleChangeStatus = (id) => {
        this.props.dispatch(updateStatusTodos(id));
    }

    handleDelete = (id) => {
        this.props.dispatch(deleteTodos(id));
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
        if (todos.length) {
            const listTodo = (
                todos.map(todo => {
                    let status = todo.status ? true : false;
                    datetime = (todo.time).split(';')
                    return(
                        <ListItem key={todo.id}>
                            <CheckBox checked={status} onPress={() => this.handleChangeStatus(todo.id)}/>
                            <Body>
                                <Text numberOfLines={1} ellipsizeMode="tail">{todo.title}</Text>
                                <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                            </Body>
                            <Icon name="md-trash" style={{color: '#c70000'}} onPress={() => this.handleDelete(todo.id) }/>
                        </ListItem>
                    )
                })
            );
            return(
                <Content>
                    <List>
                        {listTodo}
                    </List>
                </Content>
            );
        }
        else{
            return (
                <Content contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems: 'center', backroundColor: '#e6e6fa' }}>
                    <Icon name="ios-checkmark-circle-outline" style={{fontSize:50, color:'#929191' }}/>
                    <Text style={{fontSize:22,  textAlign: 'center', color:'#929191', fontWeight: '100' }}>No Done Todo</Text>
                </Content>
            );
        }
    }
}

const mapStateToProps = state => ({
    todos: (state.todos.items).filter(todo => { if (todo.status) return todo} ),
    loading: state.todos.loading,
    error: state.todos.error
});

export default connect(mapStateToProps)(TodosDone);
