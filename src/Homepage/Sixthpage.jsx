import { useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const Sixthpage = () => {
  const images = [
    { src: "/Images/image1.png", title: "Paris" },
    { src: "/Images/image3.png", title: "Thailand" },
    { src: "/Images/image7.png", title: "Greece" },
    { src: "/Images/image8.png", title: "Spain" },
    { src: "/Images/image9.png", title: "China" },
    { src: "/Images/image11.png", title: "Iceland" },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
<Card style={{ display: "flex", alignItems: "center",border:"none" }}>
                     <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Destination
                     </Card.Header>
                     <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Popular Destination
                     </Card.Title>
                   </Card><br /><br /><br />
    <Container >
      
      {images.map((img, index) =>
        index % 3 === 0 && (
          <Row key={index} className="mb-4">
            {images.slice(index, index + 3).map((item, subIndex) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <Col key={subIndex} md={4} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src={item.src}
                      thumbnail
                      style={{
                        transition: "transform 0.3s ease-in-out",
                        transform: isHovered ? "scale(1.1)" : "scale(1)",
                        boxShadow: isHovered
                          ? "0px 8px 16px rgba(0, 0, 0, 0.2)"
                          : "none",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    />
                  </div>
                  <Card.Title
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.4rem",
                      cursor: "pointer",
                    }}
                  >
                    {item.title}
                  </Card.Title>
                </Col>
              );
            })}
          </Row>
        )
      )}
    </Container>
    </div>
  );
};

export default Sixthpage;
