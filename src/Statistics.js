import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Statistics.css';

class Statistics extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Statistics">
        <Container fluid className="main-container vertical-center">
          <Row>
            <Col>
              Statistics under construction
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Statistics;
