/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './src/reducers/AppReducer';

class ReduxApp extends React.Component {
    store = createStore(AppReducer, applyMiddleware(thunk));
  
    render() {
      return (
        <Provider store={this.store}>
          <App />
        </Provider>
      );
    }
  }

AppRegistry.registerComponent(appName, () => ReduxApp);
