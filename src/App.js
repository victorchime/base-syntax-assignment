import React, { Component } from 'react';

import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput';
import './App.css';
import { userInfo } from 'os';

class App extends Component {
  state = {
    username: "userInfo"
  }

  event_Handler = (anevent) => {
    this.setState({
      username: anevent.target.value
    })
  }

  render() {

    const style = {
      width: "40%",
      margin: "auto",
      border: "1px solid #eee",
      boxShadow: "0 2px 10px #ccc",
      padding: "16px",
      textAlign: "center"
  }

  return(
      <div className = "App" >
      <UserOutput  style={style} username={this.state.username}>Hello This is the first paragragh</UserOutput>
      <UserOutput style={style} username={this.state.username}>Hello This is the second paragragh</UserOutput>
      <UserOutput style={style} username={this.state.username}>Hello This is the third paragragh</UserOutput>
      <UserInput username={this.state.username} inputChange={this.event_Handler}></UserInput>
      </div>
    );
  }
}

export default App;
