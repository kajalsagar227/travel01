import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

function Seventh() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <br /><br /><br /><br />
            <div style={{ height: "auto", backgroundColor: "black", display: "flex", alignItems: "center", padding: "20px 0" }}>
                <Container>
                    <Row className="text-center d-flex justify-content-center align-items-center flex-wrap" data-aos="fade-in">
                        <Col xs={12} md={3} className="d-flex flex-column align-items-center justify-content-center">
                            <Card.Title style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "3rem" }}>36</Card.Title>
                            <Card.Text style={{ fontFamily: "sans-serif", color: "white", fontSize: "1.2rem" }}>Countries</Card.Text>
                        </Col>

                        {/* Center Line (Hidden on Small Screens) */}
                        <Col xs="auto" className="d-none d-md-flex align-items-center">
                            <div style={{ height: "80px", width: "2px", backgroundColor: "white" }}></div>
                        </Col>

                        <Col xs={12} md={3} className="d-flex flex-column align-items-center justify-content-center">
                            <Card.Title style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "3rem" }}>15 Years</Card.Title>
                            <Card.Text style={{ fontFamily: "sans-serif", color: "white", fontSize: "1.2rem" }}>of Experience</Card.Text>
                        </Col>

                        {/* Center Line (Hidden on Small Screens) */}
                        <Col xs="auto" className="d-none d-md-flex align-items-center">
                            <div style={{ height: "80px", width: "2px", backgroundColor: "white" }}></div>
                        </Col>

                        <Col xs={12} md={3} className="d-flex flex-column align-items-center justify-content-center">
                            <Card.Title style={{ fontFamily: "sans-serif", fontWeight: "bold", color: "white", fontSize: "3rem" }}>950</Card.Title>
                            <Card.Text style={{ fontFamily: "sans-serif", color: "white", fontSize: "1.2rem" }}>Airlines</Card.Text>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Seventh;
