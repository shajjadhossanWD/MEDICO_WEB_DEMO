import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {img, name, spatial, age} = props.doctor;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} className="w-100 mx-auto" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <h4>{spatial}</h4>
              <p>Age: {age}</p>
            </Card.Text>

          </Card.Body>
        </Card>
      </Col>
    );
};

export default Doctor;