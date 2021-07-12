import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                  <Form.Text className="text-muted">
                    We'll never share your email.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Your Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>

          <Card className="mb-3" style={{color: '#000'}}>
            <Card.Img src='https://picsum.photos/200/50' />
            <Card.Body>
              <Card.Title>
                Card Example
              </Card.Title>
              <Card.Text>
                This is an example of react bootstrap card.
              </Card.Text>
              <Button variant="primary">read more</Button>
            </Card.Body>
          </Card>
        </Container>
      </header>
    </div>
  )
}