import React from 'react';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Donate() {
  const [postId, setPostId] = useState(null);


  const addGlassDetails = () => {
    console.log("Add new glass details in inventory");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'muskan',
        job: "employee"
      })
    };
    fetch('http://localhost:9000/', requestOptions)
    .then(response => response.json())
    .then(response => {
      console.log("Data received after adding glass in inventory: ", response);
      setPostId(response.id);
      // show alert
    });
      

  }



  return (
    <Container className="mt-5">
      <Row className='mt-5'>
        <Col xs={2}></Col>
        <Col className='border rounded shadow-sm'>

          <Form className="p-5">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLensDetails">
                <Form.Label>Lens Details</Form.Label>
                <Form.Control type="text" placeholder="Enter lens details" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>Glass type</Form.Label>
                <Form.Select defaultValue="Choose glass type">
                  <option>Choose type</option>
                  <option>Spectacle</option>
                  <option>Only Frame</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select defaultValue="Choose status">
                  <option>Choose status</option>
                  <option>In box</option>
                  <option>Trusts</option>
                  <option>Damaged</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group controlId="formGridOffice">
                <Form.Label>Office address</Form.Label>
                <Form.Select defaultValue="Choose office">
                  <option>Choose office</option>
                  <option>Hyd Campus</option>
                  <option>Hyd SSKC</option>
                  <option>Noida 1</option>
                  <option>Noida 2</option>
                  <option>Bengalore 1</option>
                  <option>Bengalore 2</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit" onClick={addGlassDetails}>
              Submit
            </Button>
          </Form>

           
            
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
}


export default Donate;
