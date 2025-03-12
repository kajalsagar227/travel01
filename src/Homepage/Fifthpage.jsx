import React from 'react'
import { Button, ButtonGroup, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { FaStar, FaUser } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { SlCalender } from 'react-icons/sl';
import '../css/Fifthpage.css'
function Fifthpage() {
  return (
    <div className='flex'>
      <Card style={{ display: "flex", alignItems: "center",border:"none" }}>
        <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Packages</Card.Header>
        <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Awesome Packages</Card.Title>
      </Card><br /><br /><br />

      <div className="container mt-10">
        <div className="row g-4" style={{
          display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
        }}>
          <div className="col-lg-20" style={{
            display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
          }}>
             </div>
             <Card className='f ' style={{ width: '20rem',border:"none"}}>
      <Card.Img variant="top" src="./Public/Images/india3.png" />
      <Container>
      <Row >
        <Col xs style={{border:".1px solid grey",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <IoLocation />Malaysia</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}} >
        <SlCalender />3 days</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <FaUser />2Person</Col>
      </Row>
    </Container>  
      <Card.Body >
        <Card.Title>$149.00</Card.Title>
        
        <Card.Text style={{fontFamily:"cursive"}}>
        Diverse Food Scene – Nasi lemak, satay, laksa, and roti canai.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </ListGroup.Item>
      </ListGroup>
      <Card.Body style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"5%"}}>
        <Button variant="dark" >Read More</Button>
        <Button variant="dark" >Book Now</Button>
      </Card.Body>
    </Card>
            
    <Card className='f ' style={{ width: '20rem',border:"none" }}>
      <Card.Img variant="top" className='img' src="./Public/Images/india.png" />
      <Container>
      <Row >
        <Col xs style={{border:".1px solid grey",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <IoLocation />India</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}} >
        <SlCalender />3 days</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <FaUser />2Person</Col>
      </Row>
    </Container>  
      <Card.Body>
        <Card.Title>$139.00</Card.Title>
        <Card.Text style={{fontFamily:"cursive"}}>
        Bali – Famous for its beaches, temples, and rice terraces.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></ListGroup.Item>
      </ListGroup>
      <Card.Body style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"5%"}}>
        <Button variant="dark" >Read More</Button>
        <Button variant="dark" >Book Now</Button>
      </Card.Body>
    </Card>

    <Card className='f ' style={{ width: '20rem',border:"none" }}>
      <Card.Img variant="top" src="./Public/Images/india2.png" />
      <Container>
      <Row >
        <Col xs style={{border:".1px solid grey",display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <IoLocation />Thailand</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}} >
        <SlCalender />3 days</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <FaUser />2Person</Col>
      </Row>
    </Container>
      <Card.Body>
        <Card.Title>$189.00</Card.Title>
        <Card.Text style={{fontFamily:"cursive"}}>
        Bangkok & Grand Palace – A vibrant city with stunning temples.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></ListGroup.Item>
      </ListGroup>
      <Card.Body style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"5%"}}>
        <Button variant="dark" >Read More</Button>
        <Button variant="dark" >Book Now</Button>
      </Card.Body>
      
    </Card>

    
          
          </div>

        </div>
      </div>
  )
}

export default Fifthpage
