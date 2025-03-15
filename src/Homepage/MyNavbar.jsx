import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiButterfly } from "react-icons/gi";

const MyNavbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar expand="sm" className="bg-dark navbar-dark fixed-top">
      <Container fluid>
        <Navbar.Brand onClick={() => handleScroll("home")} className="text-white fw-bold" style={{ cursor: "pointer" }}>
          <GiButterfly className="me-2 text-warning" size={30} />
          WorldWander
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleScroll("home")} className="text-white" style={{ cursor: "pointer" }}>Home</Nav.Link>
            <Nav.Link onClick={() => handleScroll("about")} className="text-white" style={{ cursor: "pointer" }}>About</Nav.Link>
            <Nav.Link onClick={() => handleScroll("destinations")} className="text-white" style={{ cursor: "pointer" }}>Destinations</Nav.Link>
            <Nav.Link onClick={() => handleScroll("tours")} className="text-white" style={{ cursor: "pointer" }}>Tours</Nav.Link>
            <Nav.Link onClick={() => handleScroll("contact")} className="text-white" style={{ cursor: "pointer" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
