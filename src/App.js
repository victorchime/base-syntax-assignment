import React, { Component } from 'react';

import UserOutput from './User/UserOutput'
import './App.css';

class App extends Component {
  state = {
      username: "user"
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username}>Hello This is the first paragragh</UserOutput>
        <UserOutput username={this.state.username}>Hello This is the second paragragh</UserOutput>
        <UserOutput username={this.state.username}>Hello This is the third paragragh</UserOutput>
      </div>
    );
  }
}

export default App;
