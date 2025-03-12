import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../css/Header.css'
import { GiButterfly } from "react-icons/gi";

const MyNavbar = () => {
    return (
        <>
        <div className="header">
            {/* <div className="container"> */}
            <Navbar expand="lg" col="3" bg="black" variant="dark" className="px-3 nav">
                <Container style={{gap:".3%"}}>
                    {/* Brand Name */}
                    <GiButterfly style={{color:"white",fontSize:"2rem"}}/>

                    <Navbar.Brand href="#" style={{fontFamily:"cursive"}}>WorldWander</Navbar.Brand>
                   

                    {/* Toggle Button */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* Collapsible Menu */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Packages</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    );
};

export default MyNavbar;
