import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Container.css';

class Sort extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      country: ""
    }
  }

  onInputChange(event) {
    let files = event.target.files
    let file = null

    if (files.length !== 0) {
      file = files[0]
    }

    this.setState({
      image: file,
      country: this.state.country
    })
  }

  onDropdownChange(event) {
    let countryInput = event.target.value
    let newCountry = ""

    if (countryInput !== "Choose country...") {
      newCountry = countryInput
    }

    this.setState({
      image: this.state.image,
      country: newCountry
    })
  }

  onSort(event) {
    let data = new FormData()
    data.append('country', this.state.country)
    data.append('image', this.state.image)

    fetch("/api/sort", {
      method: "POST",
      body: data
    }).then(response => response.json())
    .then(data => this.handleSortResponse(data))
    .catch((err) => {
      console.error('Error:', err);
    })
  }

  handleSortResponse(data) {
    console.log(data)
  }

  render() {
    return (
      <div className="Sort">
        <Container>
          <Row className="row-margin">
            <Col>
              <h2>Upload picture of waste to find out which bin it belongs in!</h2>
            </Col>
          </Row>
          <Row className="row-margin">
            <Col>
              <Form onSubmit={(e) => this.onSort(e)}>
                <Form.Row>
                  <Col md={{ span: 3, offset: 2 }}>
                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Control as="select" defaultValue="Choose..." onChange={(e) => this.onDropdownChange(e)}>
                        <option>Choose country...</option>
                        <option>United States</option>
                        <option>Japan</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.File id="file-selector" onChange={(e) => this.onInputChange(e)} accept="image/*"/>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Button variant="primary" type="submit">Sort</Button>
                    </Form.Group>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Sort;
