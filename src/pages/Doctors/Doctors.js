import React from 'react';
import { Row } from 'react-bootstrap';
import useDoctors from '../../Hooks/UseDoctors';
import Awards from './Awards/Awards';
import Doctor from './Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const {doctors} = useDoctors();

    return (
        <div>
           <div className="doctorsImg">
               <h1 className="text-white titleName">Our <span>best Doctors</span></h1>
           </div>
           
           <h1 className="my-5 titleName">Our Best <br /> <span>Qualified Doctors</span></h1>
           <Row xs={1} md={2} lg={3} className="g-4 container mx-auto"> 
              {
                  doctors.map(doctor => <Doctor key = {doctor.id} doctor = {doctor}></Doctor>)
              }
           </Row>

           <div className="award_div">
               <Awards></Awards>
           </div>
        
        </div>
    );
};

export default Doctors;