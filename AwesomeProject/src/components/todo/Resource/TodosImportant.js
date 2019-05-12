import { connect } from 'react-redux';
import React, { Component } from 'react';
import { InteractionManager } from 'react-native';
import { Body, CheckBox, Text, Icon, Content, List, ListItem } from 'native-base';
import { fetchTodos, updateStatusTodos } from "../../../actions/todoActions";
import SpinnerLoad from '../../spinner/SpinnerLoad';

class TodosImportant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.dispatch(fetchTodos());
        });
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.todos !== this.props.todos
    }

    handleChangeStatus = (id) => {
        this.props.dispatch(updateStatusTodos(id));
    }

    render() {
        if (this.props.error) {
            return (
                <Content contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Error</Text>
                </Content>
            );
        }
        if (this.props.loading) {
            return (
                <SpinnerLoad />
            );            
        }
        let todos = this.props.todos;
        if (todos.length) {
            const listTodo = (
                todos.map(todo => {
                    datetime = (todo.time).split(';')
                    return(
                        <ListItem key={todo.id}>
                            <CheckBox checked={false} onPress={() => this.handleChangeStatus(todo.id)}/>
                            <Body>
                                <Text numberOfLines={1} ellipsizeMode="tail">{todo.title}</Text>
                                <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                            </Body>
                            <Text note>{datetime[1]}</Text>
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
                    <Text style={{fontSize:22,  textAlign: 'center', color:'#929191', fontWeight: '100' }}>Well, Nothing Important</Text>
                </Content>
            );
        }
    }
}

const mapStateToProps = state => ({
    todos: (state.todos.items).filter(todo => { if (!todo.status && todo.important) return todo} ),
    loading: state.todos.loading,
    error: state.todos.error
});

export default connect(mapStateToProps)(TodosImportant);
