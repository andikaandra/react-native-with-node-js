import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, InteractionManager } from 'react-native';
import { Body, CheckBox, Text, Icon, Content, List, ListItem, Button } from 'native-base';
import { fetchTodos, updateStatusTodos, deleteTodos } from "../../../actions/todoActions";
import SpinnerLoad from '../../spinner/SpinnerLoad';

class TodosDone extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            todos : [],
            basic: true
        };
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

    handleDelete = (id) => {
        this.props.dispatch(deleteTodos(id));
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
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        if (todos.length) {
            return(
                <Content>
                    <List
                        rightOpenValue={-65}
                        dataSource={this.ds.cloneWithRows(todos)}
                        renderRow={todo =>
                            <ListItem style={{paddingLeft: 18}}>
                                <CheckBox checked={true} onPress={() => this.handleChangeStatus(todo.id)}/>
                                <Body>
                                    <Text numberOfLines={1} ellipsizeMode="tail">{todo.title}</Text>
                                    <Text note numberOfLines={1} ellipsizeMode="tail">{todo.body}</Text>
                                </Body>
                            </ListItem>
                        }
                        renderRightHiddenRow={ todo =>
                            <Button full danger onPress={() => this.handleDelete(todo.id)}>
                                <Icon active name="trash" />
                            </Button>
                        }
                    />
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
