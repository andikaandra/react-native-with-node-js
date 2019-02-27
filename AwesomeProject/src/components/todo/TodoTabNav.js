import React from 'react';
import TodoPage from './page/TodoPage';
import TodoPageDone from './page/TodoDonePage';
import TodoImportantPage from './page/TodoImportantPage';
import AddTodoPage from './page/AddTodoPage';
import Icon from 'react-native-vector-icons/Ionicons';
import SideBar from "../sidebar/Sidebar";
import {createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Todo') {
        iconName = `ios-close-circle${focused ? '' : '-outline'}`;
    } else if (routeName === 'Important') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    } else if (routeName === 'Done') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
    }
    return <IconComponent name={iconName} size={25} color={tintColor}/>;
};

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
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
            tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const DrawerNav = createDrawerNavigator({
        Todo: {
            screen: TodoNav,
        },
        Notifications: {
            screen: AddTodoPage,
        },
    },{
    contentComponent: props => <SideBar {...props} />
});
const TodoTabNav = createAppContainer(DrawerNav);

export default TodoTabNav;