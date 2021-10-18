import React from 'react';
import Banner from './Banner/Banner';
import ChooseUs from './ChooseUs/ChooseUs';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;