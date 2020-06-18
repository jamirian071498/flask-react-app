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
        Fateh-joonet!
      </div>
    )
  }
}

export default App;
