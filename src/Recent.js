import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Container.css';

class Recent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Recent">
        <Container fluid className="main-container vertical-center">
          <Row>
            <Col>
              Recent under construction
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Recent;
