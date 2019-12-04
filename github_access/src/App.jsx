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
//8d446116c177c98ac8b1936640e487d8c0802d10
handleClick(e) {
    let token = '8d446116c177c98ac8b1936640e487d8c0802d10';
    axios.get('https://api.github.com/users/LuckyLooka/repos', {headers:{"Authorization" : `Bearer ${token}`} })
    .then(response => this.setState({
      username: response.data.title,
      repoNames: response.data.name,
      info : JSON.stringify(response.data, undefined, 2)
    }));
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Profile Details</h1>
        </header>
        <p className="App-intro">
          Profile Repositories
        </p>
        <Button handleClick={this.handleClick}/>
        <p><b>Username:</b></p>
        <p>{this.state.username}</p>
        <p> {this.state.repoNames}</p>
        <b>Information:</b>
        <pre>{this.state.info}</pre>
      </div>
    );
  }
}

export default App;