import React, { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import AOS from "aos";
import "aos/dist/aos.css";

function Eighthpage() {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1000, once: true });
    }
  }, []);

  return (
    <>
      <br /><br /><br /><br /><br />
      <Container fluid style={{ position: "relative", textAlign: "center", backgroundColor: "#f8f9fa" }}>
        <Image 
          src="/Images/images2.png" 
          fluid 
          style={{ filter: "brightness(40%)", height: "100vh", objectFit: "cover" }} 
          data-aos="fade-in"
        />
        <div 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "30px",
            borderRadius: "10px",
            width: "90%",
            maxWidth: "500px",
            color: "white",
          }} 
          data-aos="zoom-in"
        >
          <h2 className="text-uppercase fw-bold fs-1" style={{ fontFamily: 'cursive', fontWeight: "bold", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}>
            Book Now
          </h2>

          <Form data-aos="fade-up">
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

            <Button type="submit" variant='primary' className="w-100" style={{ background: "none", border: "2px solid black" }}>
              Book Now
            </Button>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Eighthpage;
