import React, { Component } from 'react';
import Button from './components/Button.jsx';
import axios from 'axios';

import ProfileDetails from './components/ProfileDetails.jsx';
import SortedList from './components/SortedList.jsx';
class App extends Component {
  constructor() {
    super();
    this.state = {
      gitusername: 'No username',
      infoclean: '',
      commits: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
//8d446116c177c98ac8b1936640e487d8c0802d10


handleClick(e) {
    let token = '8d446116c177c98ac8b1936640e487d8c0802d10';
    axios.get('https://api.github.com/users/LuckyLooka', {headers:{"Authorization" : `Bearer ${token}`} })
    .then(response => this.setState({
      gitusername: response.data.login,
      infoclean: response.data,
    })).catch((err) => { console.log(err); });
    axios.get('https://api.github.com/repos/LuckyLooka/Github-Social-Graph/commits', {headers:{"Authorization" : `Bearer ${token}`} })
    .then(response => this.setState({
      commits : response.data,
    })).catch((err) => { console.log(err); });
  };

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
        <p>{this.state.gitusername}</p>
        <hr></hr>
        Profile Details:
        <ProfileDetails infoclean={this.state.infoclean}/>
        <p><b>Private repo: Github Social Graph</b></p>
        <hr></hr>
        Commits sorted by most recent :
        <SortedList repitems={this.state.commits}/>

        <p>{this.state.info}</p>
      </div>
    );
  }
}

export default App;