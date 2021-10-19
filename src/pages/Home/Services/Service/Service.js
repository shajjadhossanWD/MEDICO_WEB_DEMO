import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {img, name, shortdescription} = props.service;
    return (
          <Col>
            <Card className="serviceCard">
              <Card.Img variant="top" src={img} />
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{name}</Card.Title>
                <Card.Text>
                  {shortdescription}
                </Card.Text>
                <Link to={`/services/${name}`}>
                <ButtonGroup className="buttongrp">Read More</ButtonGroup>
                </Link>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Service;