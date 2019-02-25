import React, {Component} from 'react';
import MainPage from './src/components/MainPage';
import SecondPage from './src/components/SecondPage';
import ThirdPage from './src/components/ThirdPage';
import {createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
  Todo: {
    screen: MainPage
  },
  Important: {
    screen: SecondPage
  },
  Done: {
    screen: ThirdPage
  }
});

const Stack = createStackNavigator({
  Home: {
    screen: Tabs
  }
});

const Apps = createAppContainer(Stack);

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