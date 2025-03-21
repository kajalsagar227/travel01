import React from 'react'
import { Button, Card, Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { FaStar, FaUser } from 'react-icons/fa'
import { IoLocation } from 'react-icons/io5'
import { SlCalender } from 'react-icons/sl'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const testimonials = [
  {
    name: "John Doe",
    review: "Amazing service! Highly recommend.",
    image: "/Images/pass.png",
  },
  {
    name: "Sarah Smith",
    review: "Best experience ever! Loved it.",
    image: "/Images/pass2.png",
  },
  {
    name: "Mike Johnson",
    review: "Very professional and reliable.",
    image: "/Images/pass3.png",
  },
  
];
const testimonials1 = [
  {
    name: "John Doe",
    review: "Amazing service! Highly recommend.",
    image: "/Images/pass.png",
  },
  {
    name: "Sarah Smith",
    review: "Best experience ever! Loved it.",
    image: "/Images/pass2.png",
  },
  {
    name: "Mike Johnson",
    review: "Very professional and reliable.",
    image: "/Images/pass3.png",
  },
  
];
const testimonials2 = [
  {
    name: "John Doe",
    review: "Amazing service! Highly recommend.",
    image: "/Images/pass.png",
  },
  {
    name: "Sarah Smith",
    review: "Best experience ever! Loved it.",
    image: "/Images/pass2.png",
  },
  {
    name: "Mike Johnson",
    review: "Very professional and reliable.",
    image: "/Images/pass3.png",
  },
  
];

function Eighthpage() {
   useEffect(() => {
      if (typeof window !== "undefined") {
        AOS.init({ duration: 1000, once: true });
      }
    }, []);
  return (
    <div>
        <br /> <br /><br />
      
      <Card style={{ display: "flex", alignItems: "center", border: "none" }} >
                <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Testimonial</Card.Header>
                <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Our Clients Say!!!</Card.Title>
                <br />
            </Card><br />
            <Carousel data-bs-theme="dark" controls={false} indicators={true}>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="./Public/Images/image5.png"
          alt="First slide"
        /> */}

<div className="container my-5" >
      <h2 className="text-center mb-4"></h2>
      <div className="row" data-aos="zoom-in">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center shadow p-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">"{testimonial.review}"</p>
                <h5 className="card-title">- {testimonial.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


        
      </Carousel.Item>
      <Carousel.Item>
      <div className="container my-5">
      <h2 className="text-center mb-4"></h2>
      <div className="row">
        {testimonials.map((testimonial1, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center shadow p-3">
              <img
                src={testimonial1.image}
                alt={testimonial1.name}
                className="rounded-circle mx-auto mb-3"
                style={{  width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">"{testimonial1.review}"</p>
                <h5 className="card-title">- {testimonial1.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
       
      </Carousel.Item>
      <Carousel.Item>
      <div className="container my-5">
      <h2 className="text-center mb-4"></h2>
      <div className="row">
        {testimonials.map((testimonial2, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center shadow p-3">
              <img
                src={testimonial2.image}
                alt={testimonial2.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="card-body">
                <p className="card-text">"{testimonial2.review}"</p>
                <h5 className="card-title">- {testimonial2.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
       
          
       
      </Carousel.Item>
    </Carousel>
            <br />
            <br /><br />
    </div>
  )
}

export default Eighthpage
