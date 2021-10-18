import React from 'react';
import './Choose.css';

const ChooseUs = () => {
    return (
        <div className="chooseDiv">
          <div className="chooseCard">
          <h1>Why Choose Us</h1>
              <div className="row">
                  <div className="col-lg-3 single_card">
                      <h1>01</h1>
                      <h2 className="text-center">Qualified Doctors</h2>
                      <p>Find Doctor Jobs Usa. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources.</p>
                  </div>
                  <div className="col-lg-3 single_card">
                      <h1>02</h1>
                      <h2 className="text-center">Emergency 24/7</h2>
                      <p>We provide here best Services, for this reason we are available 24/7. In any time we prepard for our work.</p>
                  </div>
                  <div className="col-lg-3 single_card">
                      <h1>03</h1>
                      <h2 className="text-center">Modern Technology</h2>
                      <p>Modern technology is all about efficiency and speed it is about ensuring face-to-face communication connecting. </p>
                  </div>
                  <div className="col-lg-3 single_card">
                      <h1>04</h1>
                      <h2 className="text-center">Modern Pharmacy</h2>
                      <p>pharmacy, the science and art concerned with the preparation and standardization of drugs.</p>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default ChooseUs;