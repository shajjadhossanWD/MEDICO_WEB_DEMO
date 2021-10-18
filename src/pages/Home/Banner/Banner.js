import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel fade interval={1500}>
            <Carousel.Item className="carousel_about">
                <img
                className="d-block w-100  carouselImg"
                src="https://i.ibb.co/SVS6ZQ8/unnamed.jpg"
                alt="First slide"
                />  
                <Carousel.Caption>
                <h1 className="text-white"> Welcome to MEDICO Hospital</h1>
                <h1 className=" mx-auto">Your best service provider</h1>
                <p className="mx-auto">This is MEDICO hospital, it's a world class hospital here you can found all of those facilities that's you really wants. And we works for our patient 24 hours for provide our best services.</p>
                </Carousel.Caption>
            </Carousel.Item>   
            <Carousel.Item>
                <img
                className="d-block w-100  carouselImg"
                src="https://i.ibb.co/CtHPjYT/slider-001.jpg"
                alt="Second slide"
                />

                <Carousel.Caption className="carousel_about">
                <h1 className="text-white">Health is Wealth</h1>
                <h1 className="mx-auto">Your Life And Your Health</h1>
                <p className="mx-auto">This is MEDICO hospital, it's a world class hospital here you can found all of those facilities that's you really wants. And we works for our patient 24 hours for provide our best services.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carouselImg"
                src="https://i.ibb.co/3yHTrjY/slider-003.jpg"
                alt="Third slide"
                />

                <Carousel.Caption className="carousel_about">
                <h1 className="text-white">Best Facilities</h1>
                <h1 className=" mx-auto">All needed facilities available here</h1>
                <p  className="mx-auto">Praesent Tasty Shop has some pretty cool and different recipes, that look delicious! Aside from that, you can purchase their products like cookware, bake ware and utensils in vibrant color choices.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
};

export default Banner;