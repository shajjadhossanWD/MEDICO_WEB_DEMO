import React from 'react';

const Register = () => {
    return (
        <div className="registration_div">
        <div className="registerCard">
        <h1 className="text-white">Please register your account</h1>

            <div className="row">
               <div className="col-lg-6">
                   <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-75" alt="" />
               </div>
               <div className="col-lg-6 my-auto">
                   <button className="mt-3 p-2 w-75 googleBtn">Register with Google</button>
                   <button className="mt-3 p-2 w-75 githubBtn">Register with Github</button>
                   <p className="text-white mt-3">-------or-------</p>
                   <input required type="email" placeholder="your email address" className="mt-3 p-2 w-75"/>
                   <br />
                   <input required type="password" placeholder="your password" className="mt-3 p-2 w-75" />
                   <br />
                   <button className="mt-3 p-2 w-75 inputBtn">Login</button>
                    
                  
               </div>
            </div>
        </div>
    </div>
    );
};

export default Register;