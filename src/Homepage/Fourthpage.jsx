import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../css/Fourthpage.css'

function Fourthpage() {
  return (
    <div>
      <Card style={{display:"flex", alignItems: "center",border:"none" }}>
        <Card.Header style={{fontFamily: "cursive",fontWeight: "bold", color:"grey"}}>Destination</Card.Header>
        <Card.Title style={{fontFamily: "cursive",fontWeight: "bold", color:"black", fontSize:"2rem"}}>Popular Destination</Card.Title>
        </Card><br /><br /><br />
        <Container className='image-con'>
      <Row style={{display:"flex", alignItems:"self-start", justifyContent:"end",gap:"0%"}}>
        <Col sm={8} >
        <img  className='con' src="./Public/Images/ind.png" alt="" style={{height:"50%",width:"50%",marginLeft:"13%"}}/>
        <Button variant="dark" style={{marginLeft:"-8%",marginTop:"43%"}}>India</Button>
        </Col>
        <Col sm={4}>
        <img className='con' src="./Public/Images/indo.png" alt=""style={{height:"70%",width:"170%",marginLeft:"-80%"}} />
        <Button variant="dark" style={{marginLeft:"65%",marginTop:"-20%"}}>Thailand</Button></Col>

        <Col sm={30}><img className='con' src="./Public/Images/new.png" alt="" style={{height:"2%",width:"33%", marginLeft:"8.7%",marginTop:"-29%"}}/>
        <Button variant="dark" style={{marginLeft:"-8%",marginTop:"-16%"}}>New York</Button></Col>

      </Row>
      
    </Container><br /><br /><br /><br /><br />
    </div>
  )
}

export default Fourthpage
