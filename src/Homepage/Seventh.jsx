import React from 'react'
import { Card, Form, InputGroup } from 'react-bootstrap'
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { IoLocation } from "react-icons/io5";
import { SlCalender } from 'react-icons/sl';
import '../css/Seventhpage.css'
import { BsHouseDoorFill } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

function Seventh() {
    return (
        <div className='seven'>
            <Card style={{ display: "flex", alignItems: "center", border: "none" }}>
                <Card.Header style={{ fontFamily: "cursive", fontWeight: "bold", color: "grey" }}>Process</Card.Header>
                <Card.Title style={{ fontFamily: "cursive", fontWeight: "bold", color: "black", fontSize: "2rem" }}>3 Easy Steps</Card.Title>
                <br />
            </Card><br /><br />
            <div className="container mt-8"><br />
                <div className="row g-3" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
                }}>
                    <div className="col-lg-15" style={{
                        display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row"
                    }}>
                        <div className="box border p-4 shadow rounded-circle text-center d-flex flex-column align-items-center justify-content-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive"}}>
                            <BsHouseDoorFill style={{ fontSize: "4rem" }} />
                            <h3 style={{ fontWeight: "bold" }}>Choose A Destination</h3>
                            

                        </div>
                        <div className="box border p-4 shadow rounded-circle text-center d-flex flex-column align-items-center justify-content-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
                               <FaUser style={{ fontSize: "4rem" }} />
                            <h3 style={{ fontWeight: "bold" }}>Pay Online</h3>
                           

                        </div>

                        <div className="box border p-4 shadow rounded-circle text-center d-flex flex-column align-items-center justify-content-center" style={{ width: "300px", height: "300px", display: "flex", alignItems: "self-start", justifyContent: "space-around", flexDirection: "column", fontFamily: "cursive" }}>
                          <IoIosSettings style={{ fontSize: "4rem" }} />
                            <h3 style={{ fontWeight: "bold" }}>Fly Today</h3>
                            

                        </div>



                    </div>

                </div>
            </div>

            <br /><br /><br />

        </div>


    )
}

export default Seventh
