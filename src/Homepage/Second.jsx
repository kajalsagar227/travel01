import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import '../css/Second.css'

function Second() {
  return (
    <div className='row second' >
       <img
        src="./Public/Images/image12.png"
        alt="Example"
        className="img-fluid" style={{ width: "45%", padding:"90px" }} 
      />
      <Card className='col-lg-3' style={{width: "30%", marginTop: "4%" , border: "none", marginLeft: "10%" }}>
      <Card.Header style={{
        fontFamily: "cursive",fontWeight: "bold", fontSize: "2rem"
      }}>About Us</Card.Header>
      <Card.Body>
        <Card.Title style={{fontFamily: "cursive",fontWeight: "bold", color:"grey"}}>Welcome to Tourist</Card.Title><br />
        <Card.Text style={{fontFamily: "cursive"}}>
        Are you looking to book a tour or just exploring options? Let me know how I can help! <br />
        Finding the best travel deals has never been easier. Compare flights from top airlines, book comfortable hotels, and plan exciting activities—all with a few clicks.
        </Card.Text>
        <br />
        <ListGroup as="ol" numbered >
      <ListGroup.Item as="li">First Class Flights</ListGroup.Item>
      <ListGroup.Item as="li">24/7 Service</ListGroup.Item>
      <ListGroup.Item as="li">150 Premium City Tours</ListGroup.Item>
      <ListGroup.Item as="li">5 Star Accommodationss</ListGroup.Item>
    </ListGroup><br /><br />
        <Button variant="dark">Read More</Button>
      </Card.Body>
      <br /><br /><br />
    </Card>
    
    </div>
  )
}

export default Second
