import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './PrivateService.css';

const PrivateServices = () => {
    const {serviceName} = useParams();
    const [singleService, setSingleService] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            const sigleData = data.find(service => service.name === serviceName)
            setSingleService(sigleData);
        })
     },[serviceName])

    return (
        <div className='serviceDiv'>
           <div className="row container mx-auto py-5 ">
               <div className="col-lg-6 description">
                   <h1>{singleService.name}</h1>
                   <p>{singleService.description}</p>
                   <p><b>Service cost: $ {singleService.cost}</b></p>
                   <p>Doctor Name: {singleService.doctor}</p>
                   <button className="serviceButton">Add Service</button>
               </div>
               <div className="col-lg-6 ">
               <div className="serviceImg">
               <img src={singleService.img} alt="" />
               </div>
               </div>
           </div>
        </div>
    );
};

export default PrivateServices;