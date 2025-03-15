import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';




function Section() {
  return (
    <>
<div className="position-relative">
  <Image 
    src="/Images/india3.png" 
    className="custom-img w-100" 
    alt="India Image"
    style={{
      height: "100vh",
      objectFit: "cover",
      filter: "brightness(60%)"
    }}
  />
  <div className="position-absolute top-50 start-50 translate-middle text-white text-center mt-1">
    <h1 className="text-uppercase fw-bold responsive-text fs-1" style={{ fontFamily: 'cursive',fontWeight:"bold",textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"  }}>
      Enjoy Your Vacation With Us
    </h1>
    <p className="text-uppercase fw-bold" style={{ fontFamily: 'cursive',fontWeight:"bold",textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"  }}>
      Explore the beauty of the world
    </p>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
  </div>
  
</div>
<br />
<br />
<br />
<br />
    </>
  );
}

export default Section;
