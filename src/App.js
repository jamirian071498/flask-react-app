import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numClicks: 0,
      currentTime: 0
    }
  }

  componentDidMount() {
    fetch('/api/time').then(res => res.json()).then(data => this.setState({
      currentTime: data.time
    }))
  }

  increment() {
    this.setState({
      numClicks: this.state.numClicks + 1
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Trash Classifier</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#classify">Classify</Nav.Link>
            <Nav.Link href="#mytrash">My Trash</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Container fluid className="main-container">
          <Row>
            <Col>
            <button onClick={() => this.increment()}>Click me!</button>
            <p>Count: {this.state.numClicks}</p>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Col>
          </Row>
          <Row>
            <Col>
              Current time: {this.state.currentTime}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
