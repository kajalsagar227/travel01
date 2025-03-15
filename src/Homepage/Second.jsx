import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

function Second() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Container>
        <Row className="align-items-center">
          {/* ✅ Image in First Column */}
          <Col xs={12} md={6} data-aos="fade-right">
            <img src="/Images/indo.png" alt="Example" className="img-fluid" />
          </Col>
          <br />

          {/* ✅ Card in Second Column */}
          <Col xs={12} md={6} data-aos="fade-left">
            <Card style={{ width: "19rem", height: "26rem", border: "none" }}>
              <Card.Body>
                <Card.Title
                  className="text-uppercase fw-bold responsive-text fs-1"
                  style={{
                    fontFamily: 'cursive',
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(54, 51, 51, 0.5)",
                  }}
                >
                  About Us
                </Card.Title>
                <Card.Subtitle
                  className="text-uppercase fw-bold responsive-text fs-6"
                  style={{
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(216, 205, 205, 0.5)",
                    color: "grey",
                  }}
                >
                  Plan Your Trip with Tours
                </Card.Subtitle>
                <br />
                <Card.Text
                  className="text-uppercase responsive-text fs-6"
                  style={{ color: "black", fontFamily: "serif", fontWeight: "bold" }}
                >
                  Are you looking to book a tour or just exploring options? Let me know how I can help!
                  Finding the best travel deals has never been easier. Compare flights from top airlines, book
                  comfortable hotels, and plan exciting activities—all with a few clicks.
                </Card.Text>
                <Card.Link
                  href="#"
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px rgba(54, 51, 51, 0.5)",
                  }}
                >
                  First Class Flights
                </Card.Link>
                <Card.Link
                  href="#"
                  style={{
                    color: "black",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textShadow: "1px 1px 1px rgba(54, 51, 51, 0.5)",
                  }}
                >
                  24/7 Service
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Second;
