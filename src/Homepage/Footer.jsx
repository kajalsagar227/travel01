import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          {/* About Us Section */}
          <Col md={4} className="text-center text-md-start">
            <h5>About Us</h5>
            <p>
              Explore the world with us. We offer the best travel packages and experiences. 
              Your next adventure starts here!
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="text-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Destinations</a></li>
              <li><a href="#" className="text-white text-decoration-none">Tours</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </Col>

          {/* Follow Us Section */}
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3 fs-4"><FaFacebookF /></a>
              <a href="#" className="text-white me-3 fs-4"><FaInstagram /></a>
              <a href="#" className="text-white me-3 fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaYoutube /></a>
            </div>
          </Col>
        </Row>

        {/* Horizontal Line */}
        <hr className="bg-light" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Travel Co. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
