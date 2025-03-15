import { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { IoLocation } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUser, FaStar } from "react-icons/fa";

const Thirdpage = () => {
  const destinations = [
    {
      src: "/Images/india3.png",
      location: "Malaysia",
      price: "$149.00",
      description: "Diverse Food Scene – Nasi lemak, satay, laksa, and roti canai.",
    },
    {
      src: "/Images/india.png",
      location: "India",
      price: "$139.00",
      description: "Bali – Famous for its beaches, temples, and rice terraces.",
    },
    {
      src: "/Images/india2.png",
      location: "Thailand",
      price: "$189.00",
      description: "Bangkok & Grand Palace – A vibrant city with stunning temples.",
    },
  ];

  return (
    <Container className="mt-4" style={{ backgroundColor: "#f8f9fa" }}>
      <Card style={{ display: "flex", alignItems: "center",border:"none" }}>
                   <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Packages</Card.Header>
                   <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Our Packages
                   </Card.Title>
                   </Card>
                   <br /><br /><br />
      <Row className="g-4 justify-content-around">
        {destinations.map((item, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <Col key={index} md={4} className="d-flex justify-content-center">
              <Card style={{ width: "20rem", border: "none" }}>
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.src}
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      boxShadow: isHovered ? "0px 8px 16px rgba(0, 0, 0, 0.2)" : "none",
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  />
                </div>
                <Container>
                  <Row>
                    <Col xs style={colStyle}>
                      <IoLocation /> {item.location}
                    </Col>
                    <Col style={colStyle}>
                      <SlCalender /> 3 days
                    </Col>
                    <Col style={colStyle}>
                      <FaUser /> 2 Person
                    </Col>
                  </Row>
                </Container>
                <Card.Body>
                  <Card.Title>{item.price}</Card.Title>
                  <Card.Text style={{ fontFamily: "cursive" }}>{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body className="d-flex gap-2">
                  <Button variant="dark">Read More</Button>
                  <Button variant="dark">Book Now</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    
  );
};
const colStyle = {
  border: "1px solid grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
};


export default Thirdpage;
