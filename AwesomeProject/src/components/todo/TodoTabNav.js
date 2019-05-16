import React from 'react';
import TodoPage from './page/TodoPage';
import TodoPageDone from './page/TodoDonePage';
import TodoImportantPage from './page/TodoImportantPage';
import AddTodoPage from './page/AddTodoPage';
import CalendarsScreen from '../agenda/CalendarsScreen';
import AddNewAgenda from '../agenda/AddNewAgenda';
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
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontWeight: "200",
                    fontSize: 17
                },
                headerTintColor: '#ffffff',                 
            },
        }
    },{
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
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        transitionConfig : () => ({
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0,
            },
        }),
        tabBarComponent: props => <FooterTodo {...props} />
});

const AgendaStack = createStackNavigator(
    {
        Agenda: {
            screen: CalendarsScreen,
            navigationOptions: { 
                tabBarVisible: false,
                title: 'Agenda',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontWeight: "200",
                    fontSize: 17
                },
                headerTintColor: '#ffffff',
            },
        },
        AddAgenda: {
            screen: AddNewAgenda,
            navigationOptions: { 
                tabBarVisible: false,
                title: 'Add new agenda',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTitleStyle: {
                    fontWeight: "200",
                    fontSize: 17
                },
                headerTintColor: '#ffffff',                 
            },
        }
    },{
        initialRouteName: 'Agenda',
    }
);

const DrawerNav = createDrawerNavigator(
    {
        Todo: {
            screen: TodoNav,
        },
        Agenda: {
            screen: AgendaStack,
        },
    },{
    contentComponent: props => <SideBar {...props} />
});
const TodoTabNav = createAppContainer(DrawerNav);

export default TodoTabNav;