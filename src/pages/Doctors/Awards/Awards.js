import React from 'react';
import './Awards.css';

const Awards = () => {
    return (
        <div className="awards">
          <div className="doctor_awards">
          <h1> Our Awards</h1>
          <p className="w-75 mx-auto">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia</p>
              <div className="row">
                  <div className="col-lg-3">
                      <img src="https://i.ibb.co/QDfjvFQ/award-001.png" alt="" />
                  </div>
                  <div className="col-lg-3">
                      <img src="https://i.ibb.co/WfYK7yJ/award-002.png" alt="" />
                  </div>
                  <div className="col-lg-3">
                       <img src="https://i.ibb.co/WnDYGTc/award-003.png" alt="" />
                  </div>
                  <div className="col-lg-3">
                        <img src="https://i.ibb.co/rsg6Rhr/award-004.png" alt="" />
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Awards;