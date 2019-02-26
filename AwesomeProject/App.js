import React, {Component} from 'react';
import TodoPage from './src/components/todo/Page/TodoPage';
import TodoPageDone from './src/components/todo/Page/TodoDonePage';
import TodoImportantPage from './src/components/todo/Page/TodoImportantPage';
import {createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Todo') {
      iconName = "book";
  } else if (routeName === 'Important') {
      iconName = "star";
  } else if (routeName === 'Done') {
      iconName = "done-all";
  }
  return <IconComponent name={iconName} />;
};

const Tabs = createBottomTabNavigator({
  Todo: {
    screen: TodoPage
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
});

const Apps = createAppContainer(Tabs);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading : true,
      name : "",
      dataSource : ""
    }
  }

  render() {
    return(
      <Apps />
    )
  }
}

export default App;