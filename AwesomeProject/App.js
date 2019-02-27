import React, {Component} from 'react';
import TodoTabNav from './src/components/todo/TodoTabNav';

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
      <TodoTabNav />
    )
  }
}

export default App;