import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { IoLocation } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4" >
      <div className="container" >
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-2 text-center text-md-start" style={{display:"flex",flexDirection:"column"}}>
          <h5>Company</h5>
          <Row style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
          
        <Col xs style={{border:".1px solid grey",display:"flex",alignItems:"center",justifyContent:"space-around" ,border:"none"}}>
        <IoLocation /> New York, USA</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around" ,border:"none"}} >
        <BsFillTelephoneFill />+91 12345 67890</Col>
        <Col style={{border:"1px solid grey" ,display:"flex",alignItems:"center",justifyContent:"space-around" ,border:"none"}}>
        <MdOutlineMail />mail@domain.com</Col>
      </Row>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 text-center">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Packages</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4 text-center text-md-end">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-2">Facebook</a>
            <a href="#" className="text-light me-2">Twitter</a>
            <a href="#" className="text-light">Instagram</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3" style={{marginLeft:"50%"}}>
          <p className="mb-0">&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
