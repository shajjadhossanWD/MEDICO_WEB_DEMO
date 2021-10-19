import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Department from './Department/Department';
import './Departments.css';
import DepDoctor from './DepDoctor/DepDoctor';

const Departments = () => {
const [departments, setDepartments] = useState([]);

useEffect(()=>{
    fetch('./Department.json')
    .then(res => res.json())
    .then(data => setDepartments(data))
},[])

    return (
        <div className="departments">
          <div className="img_div">
            <h1 className="text-white titleName">Our <span>Departments</span> </h1>
          </div>
          <h1 className="my-5 titleName"> Main <span>Departments</span></h1>
          <Row xs={1} md={2} lg={3} className="g-4 container mx-auto"> 
          
              {
                 departments.map(department => <Department key={department.id} department={department}></Department>)
              }
           </Row>

           <div className="Head_Doctors">
              <DepDoctor></DepDoctor>
           </div>
        </div>
     
    );
};

export default Departments;