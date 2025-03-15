import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsHouseDoorFill } from "react-icons/bs";
import { FaHotel, FaTruckMonster, FaUser } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdCardTravel, MdMedicalServices } from 'react-icons/md';
import { SiFoursquarecityguide } from 'react-icons/si';
import { useState } from "react";

function Fourthpage() {
  const [bgColor, setBgColor] = useState("white");
  return (
    <>
    <br />
    <br />
    <br /><br /><br />
     <div className='flex' >
           <Card style={{ display: "flex", alignItems: "center",border:"none" }}>
             <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Services</Card.Header>
             <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Our Services
             </Card.Title>
           </Card><br /><br /><br />
           <Container  >
      <Row className="g-4"> {/* Increased gap for better spacing */}
        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}> {/* Equal height */}
            <Card.Body className="d-flex flex-column justify-content-between">
              <BsHouseDoorFill style={{ fontSize: "4rem"}} />
              <Card.Title style={{fontFamily:"cursive"}}>Flight Booking</Card.Title>
              <Card.Text>
                ✅ Search & compare flights from multiple airlines  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <FaHotel style={{ fontSize: "4rem" }} />
              <Card.Title style={{fontFamily:"cursive"}}>Hotel Reservation</Card.Title>
              <Card.Text>
                ✅ Listings of hotels, resorts, hostels, and vacation rentals  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <FaUser style={{ fontSize: "4rem" }} />
              <Card.Title style={{fontFamily:"cursive"}}> Tour Packages</Card.Title>
              <Card.Text>
                ✅ Pre-planned tour packages (honeymoon, adventure, luxury)  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <IoIosSettings style={{ fontSize: "4rem" }} />
              <Card.Title style={{fontFamily:"cursive"}}>Travel Insurance</Card.Title>
              <Card.Text>
                ✅ Medical & trip cancellation coverage  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <MdCardTravel style={{ fontSize: "4rem" }} />
              <Card.Title style={{fontFamily:"cursive"}}>Luxury Travel</Card.Title>
              <Card.Text>
                ✅ Luxury yacht rentals & private charters  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <SiFoursquarecityguide style={{ fontSize: "4rem" }} />
              <Card.Title>Tour Guides</Card.Title>
              <Card.Text style={{fontFamily:"cursive"}}>
                ✅ Personal travel stories & user-generated content  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
            <MdMedicalServices style={{ fontSize: "4rem" }} />
              <Card.Title>24/7 Service</Card.Title>
              <Card.Text style={{fontFamily:"cursive"}}>
                ✅ Assistance with trip modifications & cancellations  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Card className="h-100" style={{ backgroundColor: bgColor, transition: "0.3s ease-in-out" }}
      onMouseEnter={() => setBgColor("#f8f9fa")}
      onMouseLeave={() => setBgColor("white")}>
            <Card.Body className="d-flex flex-column justify-content-between">
              <FaTruckMonster style={{ fontSize: "4rem" }} />
              <Card.Title>Adventure Booking</Card.Title>
              <Card.Text style={{fontFamily:"cursive"}}>
                ✅ Adventure sports (scuba diving, skydiving, trekking, etc.)  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    <br />
    <br /><br />
    <br />
    </>
  )
}

export default Fourthpage
