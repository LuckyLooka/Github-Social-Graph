import React, { Component } from 'react';
import Button from './components/Button.jsx';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'No username',
      info: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

handleClick(e) {
  const username = "LuckyLooka"
  con
    axios.get('https://api.github.com/users/LuckyLooka')
    .then(response => this.setState({
      username: response.data.login,
      info : JSON.stringify(response.data, undefined, 2)
    }));
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Analytics</h1>
        </header>
        <p className="App-intro">
          Watch this space...
        </p>
        <Button handleClick={this.handleClick}/>
        <p><b>Username:</b></p>
        <p>{this.state.username}</p>
        <b>Information:</b>
        <pre>{this.state.info}</pre>
      </div>
    );
  }
}

export default App;