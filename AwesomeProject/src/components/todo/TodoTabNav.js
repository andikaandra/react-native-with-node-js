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
        AddTodo: {
            screen: AddTodoPage,
            navigationOptions: { 
                tabBarVisible: false,
                title: 'Add new todo',
                headerStyle: {
                    backgroundColor: '#3F51B5',
                },
                headerTitleStyle: {
                    fontWeight: "200",
                    fontSize: 17
                },
                headerTintColor: '#fff',                 
            },
        }
    },
    {
        initialRouteName: 'Todo',
    }
);

TodoStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "AddTodo") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }
    return {
      tabBarVisible
    };
  };

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