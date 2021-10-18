import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className="footer">
        <div className="row">
            <div className="col-lg-4">
             <img src="" alt="" />
             <h1>Medico</h1>
             <p><b>Thank for visit our website.Saty with us. We will provide you our best services and all facilities that's you expected.</b></p>
              <h5>Social media link..</h5>
              <i className="fab fa-facebook-square fs-2 ms-3"></i>
              <i className="fab fa-twitter-square fs-2 ms-3"></i>
              <i className="fab fa-linkedin fs-2 ms-3"></i>
            </div>
            <div className="col-lg-4 mb-5 departments ">
              <h2 className="depCls">Departments</h2>
              <p><b>Pediatric</b></p>
              <p><b>Laboratory</b></p>
              <p><b>Odontology</b></p>
              <p><b>Physiotherapy</b></p>
              <p><b>Ophthalmology</b></p>
              <p><b>Cynecology</b></p>
            </div>
            <div className="col-lg-4 mb-4 Operation_time">
              <h2 className="timecls">Operation Hours</h2>
             <div className="row">
                 <div className="col-lg-6">
                    <p>Monday</p>
                    <p><b>09:00 - 19:00</b></p>
                    <p>Tuesday</p>
                    <p><b>09:00 - 19:00</b></p>
                    <p>Wednesday</p>
                    <p><b>09:00 - 19:00</b></p>
                 
                 </div>
                 <div className="col-lg-6">
                    <p>Friday</p>
                    <p><b>09:00 - 19:00</b></p>
                    <p>Saturday</p>
                    <p><b>10:00 - 18:00</b></p>
                    <p>Sunday</p>
                    <p><b>Emergency</b></p>
                 </div>
             </div>
            </div>
         </div>
            <p><small>@Copyrights2021.com</small></p>
        </div>
    );
};

export default Footer;