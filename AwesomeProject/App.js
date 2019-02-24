import React, {Component} from 'react';
import MainPage from './components/MainPage';

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
      <MainPage />
    )
  }
}

export default App;