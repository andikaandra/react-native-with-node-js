import React from 'react';
import TodoPage from './page/TodoPage';
import TodoPageDone from './page/TodoDonePage';
import TodoImportantPage from './page/TodoImportantPage';
import AddTodoPage from './page/AddTodoPage';
import SideBar from "../sidebar/Sidebar";
import FooterTodo from '../footer/FootersTodo';
import {createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

const TodoStack = createStackNavigator(
    {
        Todo: { screen: TodoPage },
        AddTodo: { screen: AddTodoPage }
    },
    {
        initialRouteName: 'Todo',
    }
);

const TodoNav = createBottomTabNavigator(
    {
        Todo: {
            screen: TodoStack
        },
        Important: {
            screen: TodoImportantPage
        },
        Done: {
            screen: TodoPageDone
        }
    },{
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarComponent: props => <FooterTodo {...props} />
});

const DrawerNav = createDrawerNavigator({
        Todo: {
            screen: TodoNav,
        }
    },{
    contentComponent: props => <SideBar {...props} />
});
const TodoTabNav = createAppContainer(DrawerNav);

export default TodoTabNav;