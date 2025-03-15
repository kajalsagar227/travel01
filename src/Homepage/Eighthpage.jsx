import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import { FaStar, FaUser } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { SlCalender } from 'react-icons/sl';
import Image from 'react-bootstrap/Image';


function Eighthpage() {
  return (
    <>
    <br /><br /><br /><br /><br />
    <Container fluid style={{ position: "relative", textAlign: "center" ,backgroundColor: "#f8f9fa"  }}>
    <Image src="/Images/images2.png" fluid style={{filter: "brightness(40%)",height: "100vh",
      objectFit: "cover",}}/>

      <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",// Dark transparent background
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "500px",
          color: "white",
        }}>
          <h2 className="text-uppercase fw-bold responsive-text fs-1" style={{ fontFamily: 'cursive',fontWeight:"bold",textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"  }}>Book Now</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" placeholder="Enter your destination" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Travel Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Button type="submit" variant='primary' className="w-100" style={{background:"none",border:"2px solid black"}}>
              Book Now
            </Button>
          </Form>
        </div>
    </Container>
    
    </>
      )
}

export default Eighthpage