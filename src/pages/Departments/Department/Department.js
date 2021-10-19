import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Department.css';

const Department = (props) => {
    const {img, name, details} = props.department;
    return (
        <div>
            <Col>
            <Card className="deparmentCard">
              <Card.Img variant="top" src={img} className="w-50 mx-auto pt-3" />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {details}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </div>
    );
};

export default Department;