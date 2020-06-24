import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Container.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTime: "",
      currentDate: ""
    }

    this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    setInterval(this.getTime, 750)
  }

  getTime() {
    fetch('/api/time').then(res => res.json()).then(data => this.setState({
      currentTime: data.time,
      currentDate: data.date
    }))
  }

  render() {
    return (
      <div className="Home">
        <Container fluid className="main-container vertical-center">
            <Row>
                <Col>
                    {this.state.currentDate + " " + this.state.currentTime}
                </Col>
            </Row>
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Home;
