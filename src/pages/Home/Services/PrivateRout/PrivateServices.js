import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PrivateServices = () => {
    const {serviceName} = useParams();
    const [singleService, setSingleService] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            const sigleData = data.find(service => service.name == serviceName)
            setSingleService(sigleData);
        })
     },[serviceName])

    return (
        <div>
           
           <h1>{singleService.name}</h1>
        </div>
    );
};

export default PrivateServices;