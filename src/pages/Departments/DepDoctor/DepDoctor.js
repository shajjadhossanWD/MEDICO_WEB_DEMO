import React, {Component} from 'react';
import Slider from "react-slick";
import './DepDoctor.css';
class DepDoctor extends Component{
    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
    return (
        <div>
        <h1 className="my-5 titleName">Head of <span>Departments</span></h1>

        <Slider {...settings}>
          <div className="singleDoctor pb-5">
           <img src="https://i.ibb.co/7pz2Z3T/doctor-005.jpg" className="w-75 mx-auto"  alt="" />
           <h3 className="doctorName">Jorge Gavidia</h3>
           <p><b>Odontology</b></p>
          </div>
          <div className="singleDoctor">
          <img src="https://i.ibb.co/gjNrcVy/doctor-002.jpg"  className="w-75 mx-auto" alt="" />
           <h3 className="doctorName">Vanessa Carvajal</h3>
           <p><b>Pediatrician</b></p>
          </div>
          <div className="singleDoctor">
          <img src="https://i.ibb.co/dGyBH5k/doctor-001.jpg"  className="w-75 mx-auto" alt="" />
           <h3 className="doctorName">Alexanser Perez</h3>
           <p><b>Orthopedist</b></p>
          </div>
          <div className="singleDoctor">
          <img src="https://i.ibb.co/jhPdDPV/doctor-006.jpg"  className="w-75 mx-auto" alt="" />
           <h3 className="doctorName">Janna Gimenez</h3>
           <p><b>Laboratory</b></p>
          </div>
          <div className="singleDoctor">
          <img src="https://i.ibb.co/4NVLQFM/doctor-004.jpg"  className="w-75 mx-auto" alt="" />
           <h3 className="doctorName">Delfina Villareal</h3>
           <p><b>Gynecologist</b></p>
          </div>
        </Slider>
      </div>
    );
    }
};

export default DepDoctor;