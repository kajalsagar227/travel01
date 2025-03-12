import React, { useState } from 'react';
import { Button, Card, Form, InputGroup, ThemeProvider } from 'react-bootstrap';
import '../css/Section.css';
import Image from 'react-bootstrap/Image';



function Section() {
    // const [objstyle,SetObjstyle] = useState(<Styleing/>)
  return (
    
    <div className='section'>
      <Card className="text-center position-relative d-md-block ">
  <div className="position">
    <Image src="./Public/Images/india3.png" className="w-100 img-filter"/>
    <div className="position-absolute top-50 start-50 translate-middle text-white" style={{marginTop:"-10%"}}>
      <h1 className="h1" data-aos="fade-up" style={{marginLeft:"-25%"}}>Enjoy Your Vacation With Us</h1>
      <h2 className="h2" data-aos="fade-up" style={{marginTop:"5  %"}}>The world is too big to stay in one place.</h2>
    </div>
    <Card.Body>
    <InputGroup className="mb-3" style={{marginTop:"-25%"}}>
      <Form.Control
        placeholder="Eg: India"
        aria-label="Eg: India"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2" style={{ backgroundColor: "black" }}>
        Search
      </Button>
    </InputGroup>
  </Card.Body>
  </div>

  
</Card>


    
    </div>
  )
}

export default Section
