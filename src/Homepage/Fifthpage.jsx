import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { FaStar, FaUser } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { SlCalender } from 'react-icons/sl';
import { Image } from "react-bootstrap";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
function Fifthpage() {
  useEffect(() => {
        if (typeof window !== "undefined") {
          AOS.init({ duration: 1000, once: true });
        }
      }, []);
  return (
    <>
    <div>
    <Card style={{ display: "flex", alignItems: "center",border:"none" ,}} >
                 <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Gallery</Card.Header>
                 <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Our Gallery
                 </Card.Title>
               </Card><br /><br /><br />
     <Container data-aos="zoom-in">
      <Row>
        <Col><Image src="/Images/images2.png" thumbnail /></Col>
        <Col><Image src="/Images/india.png" thumbnail /></Col>
      </Row>

      <Row>
        <Col><Image src="/Images/image12.png" thumbnail /></Col>
        <Col><Image src="/Images/image7.png" thumbnail /></Col>
        <Col><Image src="/Images/image9.png" thumbnail /></Col>
      </Row>
    </Container>
    </div>
    <br />
    <br /><br />
    <br />  
    </>
  )
}

export default Fifthpage
