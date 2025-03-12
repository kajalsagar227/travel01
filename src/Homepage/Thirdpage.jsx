import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/Thirdpage.css'
import { BsHouseDoorFill } from "react-icons/bs";
import { FaHotel, FaTruckMonster, FaUser } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import { MdCardTravel, MdMedicalServices } from 'react-icons/md';
import { SiFoursquarecityguide } from 'react-icons/si';

function Thirdpage() {
  return (
    <div className='glass-effect' style={{ backgroundColor: "rgb(253, 247, 247)" }}>
      <Card style={{ display: "flex", alignItems: "center", border: "none" }}>
        <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Services</Card.Header>
        <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>Our Services</Card.Title>
      </Card><br /><br /><br />
      <div className="container mt-8">
        <div className="row g-3" style={{
          display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
        }}>
          <div className="col-lg-15" style={{
            display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
          }}>
            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <BsHouseDoorFill style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Flight Booking</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Search & compare flights from multiple airlines <br />✅ Real-time price updates & discounts</p>

            </div>
            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <FaHotel style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Hotel Reservation</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Listings of hotels, resorts, hostels, and vacation rentals <br />
                ✅ Price comparisons & exclusive deals<br /></p>

            </div>

            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <FaUser style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Tour Packages</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Pre-planned tour packages (honeymoon, adventure, luxury)  <br />✅ Group tours & private tour options</p>

            </div>

            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <IoIosSettings style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Travel Insurance</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Medical & trip cancellation coverage <br />
                ✅ Lost baggage & emergency assistance</p>

            </div>

          </div>

        </div>
      </div><br /><br />

      <div className="container mt-8">
        <div className="row g-3" style={{
          display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
        }}>
          <div className="col-lg-15" style={{
            display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
          }}>
            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <MdCardTravel style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Luxury Travel</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Luxury yacht rentals & private charters <br />
                ✅ All-inclusive resort stays & VIP experiences</p>

            </div>

            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <SiFoursquarecityguide style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Tour Guides</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Personal travel stories & user-generated content <br />
                ✅ Safety and travel advisory updates</p>

            </div>

            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <MdMedicalServices style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>24/7 Service</h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Assistance with trip modifications & cancellations <br />
                ✅ Local emergency helplines</p>

            </div>

            <div className="box border p-4 shadow rounded text-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
              <FaTruckMonster style={{ fontSize: "4rem" }} />
              <h3 style={{ fontWeight: "bold" }}>Adventure Booking </h3>
              <p style={{ textAlign: "start", color: "gray" }}>✅ Adventure sports (scuba diving, skydiving, trekking, etc.) <br />
                ✅ Cultural experiences & city tours</p>

            </div>
          </div>

        </div>
      </div><br /><br /><br /><br /><br />


    </div>
  )
}

export default Thirdpage
