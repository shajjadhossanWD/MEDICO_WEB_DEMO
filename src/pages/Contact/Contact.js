import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="img_div">
                <h1 className="text-white">Contact Us</h1>
            </div>
            <div className="address container mx-auto my-5">
            <Row xs={1} lg={3} className="">  
               <Col>
               <Card className="address_card">
               <Card.Header><i className="fas fa-map-marked-alt fs-1"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>OUR ADDRESS </Card.Title>
                    <Card.Text>
                    <p><b>Dhanmondi-1287, Road No: 12</b></p>
                    <p><b>Dhaka Bangladesh</b></p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

               <Col>
               <Card  className="address_card">
               <Card.Header> <i className="fas fa-envelope-open-text fs-1"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>EMAIL ADDRESS </Card.Title>
                    <Card.Text>
                    <p><b>shajjadhossan124@gamil.com</b></p>
                    <p><b>medicohospital311@gamil.com</b></p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col>
                <Card className="address_card">
               <Card.Header> <i className="fas fa-blender-phone fs-1"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>CALL CENTER </Card.Title>
                    <Card.Text>
                    <p><b>Appointment: +88013131236433</b></p>
                    <p><b>Emergency: +88018243541433</b></p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                 </Col>
               </Row>

            <div className="contact_div my-5">
            <div className="contact_card">
            <h1 className="text-white">Please write your details information</h1>

                <div className="row">
                <div className="col-lg-6">
                    <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-100" alt="" />
                </div>
                <div className="col-lg-6 my-auto">
                    <input required type="email" placeholder="your email address" className="mt-3 p-2 w-100"/>
                    <input type="text" placeholder="your name" className="mt-3 p-2 w-100"/>
                    <textarea name="" id="" cols="30" rows="4" placeholder="Write your massage" className="mt-3 p-2 w-100"></textarea>
                  
                    <button className="mt-3 p-2 w-100 inputBtn">Send-Message</button>
                </div>
                </div>
            </div>
        </div> 
                    
                 
            </div>
        </div>
    );
};

export default Contact;