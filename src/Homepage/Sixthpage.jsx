import React from 'react'
import { Button, Card, Col, Dropdown, DropdownButton, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'
import '../css/Sixthpage.css'

function Sixthpage() {
  return (
    <div className='six'>
        <Card className='image-bg'>

    <Row style={{width:"50%",marginLeft:"2%",marginTop:"10%"}}>
      <h1 className='hh'>  Book A Tour</h1>
      <Row className="g-2" >
      <Col md >
        <FloatingLabel  controlId="floatingInputGrid" label="Your Name" >
          <Form.Control  style={{backgroundColor:"transparent"}} type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
      <Col md>
         <FloatingLabel controlId="floatingInputGrid" label="Your Email">
          <Form.Control style={{backgroundColor:"transparent"}} type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
    </Row>
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Date">
          <Form.Control  style={{backgroundColor:"transparent"}} type="email" placeholder="00-00-0000" />
        </FloatingLabel>
      </Col>
      <Col md>
         
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Destination
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"> Destination 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> Destination 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> Destination 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       
      </Col>
    </Row>
    <Row className="g-2">
    <FloatingLabel controlId="floatingInputGrid" label="Special Request">
          <Form.Control style={{backgroundColor:"transparent"}} type="email" placeholder="name@example.com" />
        </FloatingLabel>
    </Row>
    
      </Row>
      <Row className="g-2">
      <Button variant="outline-secondary" style={{width:"49%",height:"70%",marginLeft:"2.3%",marginTop:"3%",fontSize:"2rem",fontFamily:'cursive'}}>Book Now</Button>
      </Row>
      
      
    </Card>

    
    </div>
  )
}

export default Sixthpage
