import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_time: 0
    }
  }

  componentDidMount() {
    fetch('/api/time').then(res => res.json()).then(data => this.setState({
      current_time: data.time
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>The current time is {this.state.current_time}</p>
        </header>
      </div>
    )
  }
}

export default App;
