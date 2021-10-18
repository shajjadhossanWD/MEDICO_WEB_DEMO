import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
        <div className="img_div">
            <h1 className="text-white">About Us.</h1>
        </div>
        <div className="hospital_section container mx-auto">
        <h1 className="my-5">MEDICO HOSPITAL..</h1>
            <div className="row ">
                <div className="col-lg-6">
                    <img src="https://i.ibb.co/r41n4yb/image-001.jpg" className="w-75" alt="" />
                </div>
                <div className="col-lg-6 hospital_details">
                    <h3>We believe and works for best services</h3>
                    <p>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and Find Best Cancer Hospitals In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and ...</p>
                    <button className="btn btn-info">Learn More</button>
                </div>
            </div>
        </div>

        <div className="facilities container">
            <h1 className="my-5">Our Best Facilities</h1>
            <div className="row">
              <div className="col-lg-6 facilities_detail">
                  <h2>We Provide Our best services..</h2>
                  <p>We Take Facilities Management Personally. Providing Full Service Solutions Across The UK. Contact Us Today For More Information About Our Fm Solutions. Award Winning. Fast Response Time. Local Service. Personalised Approach. Over 1000 Sites. Services: Building Maintenance, Mechanical & Electrical, Cleaning Services, Security Services, Reception & Concierge.</p>
                   <br />
                   <p><b> Engineers you can trust. Affordable rates. Available 24/7. Same-day service. Services: Safety checks, Problems fixed, Certificates issued.</b></p>
              </div>
              <div className="col-lg-6">
                  <img src="https://i.ibb.co/pyXpYnc/Hostital-room-background.jpg" className="w-100" alt="" />
              </div>
            </div>
        </div>

        <div className="equipments container">
        <h1 className="my-5">Our Equipments</h1>
        <div className="row">
            <div className="col-lg-6">
                <img src="https://i.ibb.co/Ph6YSQz/image-005.jpg" className="w-100" alt="" />
            </div>
            <div className="col-lg-6 equipment_detail">
                <h2>All modern equipments Available here..</h2>
                <p>Repealing key Medicare protections threatens Americans’ access to medicines. Read more. Medicare "negotiation" will create more problems at a time when we can least afford them. Protect Patients. Medicines for Seniors. U.S. Health Care. Medicare Part D.Business. 7-Day Phone Support. Highlights: BBB Accredited Business, Chat Support Available, Newsletter Available.</p>
            </div>
        </div>

        </div>

        <div className="Stafs container my-5 ">
            <h1 className="my-5">About Our Staf</h1>
             <div className="row">
                 <div className="col-lg-6 staff_detail">
                     <h2>Best Qualified Staff</h2>
                     <p>The organised body of licensed physicians and other healthcare providers who are permitted by law and by a hospital (through admitting privileges) to provide medical care within that hospital or facility. ... The body of doctors and other health professionals who practice in a particular institution</p>
                    <div className="row staff_facilities">
                        <div className="col-lg-4">
                           <img src="https://i.ibb.co/pXG3MgB/198-1985166-transparent-doctor-cartoon-png-icon-doctor-cartoon-png.jpg" className="w-25" alt="" />
                            <h3>Experience</h3>
                            <p>Here you can found most Experienced Doctors and staffs, they are available 24/7.</p>
                       </div>
                       <div className="col-lg-4">
                           <img src="https://i.ibb.co/MSRZjzj/heart-296983-640.png" className="w-25" alt="" />
                           <h3>Amiability</h3>
                           <p> provide medical care within that hospital or facility. ... The body of doctors.</p>
                       </div>
                       <div className="col-lg-4">
                           <img src="https://i.ibb.co/cyK8dgd/download-1.jpg" className="w-25" alt="" />
                           <h3>Reliability</h3>
                           <p>In statistics and psychometrics, reliability is the overall consistency .</p>
                       </div>
                    </div>
                 </div>
                 <div className="col-lg-6">
                     <img src="https://i.ibb.co/fQygvJg/doctor-001.jpg" className="w-75" alt="" />
                 </div>
             </div>
        </div>
        </div>
    );
};

export default AboutUs;