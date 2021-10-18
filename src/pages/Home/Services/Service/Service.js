import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {img, name, shortdescription} = props.service;
    return (
          <Col>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {shortdescription}
                </Card.Text>
                <ButtonGroup className="buttongrp">Read More</ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default Service;