import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="loginDiv">
        <div className="loginCard">
        <h1 className="text-white">Please Login your account</h1>

            <div className="row">
               <div className="col-lg-6">
                   <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-75" alt="" />
               </div>
               <div className="col-lg-6 my-auto">
                   <input required type="email" placeholder="your email address" className="mt-3 p-2 w-75"/>
                   <br />
                   <input required type="password" placeholder="your password" className="mt-3 p-2 w-75" />
                   <br />
                   <button className="mt-3 p-2 w-75 inputBtn">Login</button>
                    <p className="text-white mt-2">-------or-------</p>
                    <button className="mt-3 p-2 w-75 googleBtn">Sign in with Google</button>
               </div>
            </div>
        </div>
    </div>
    );
};

export default Login;