import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Classify from './Classify';
import Recent from './Recent';
import Statistics from './Statistics';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Trash Classifier</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/classify">Classify</Nav.Link>
              <Nav.Link as={Link} to="/recent">Recent</Nav.Link>
              <Nav.Link as={Link} to="/stats">Statistics</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/classify">
              <Classify/>
            </Route>
            <Route path="/recent">
              <Recent/>
            </Route>
            <Route path="/stats">
              <Statistics/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
