import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Classify.css';

class Classify extends Component {
  constructor(props) {
    super(props)
  }

  onChange(event) {
    let files = event.target.files
    console.log(files)
  }

  render() {
    return (
      <div className="Classify">
        <Container fluid className="main-container vertical-center">
          <Row>
            <Col>
              <input type="file" onChange={(e) => this.onChange(e)} accept=".png,.jpeg,.jpg"></input>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Classify;
