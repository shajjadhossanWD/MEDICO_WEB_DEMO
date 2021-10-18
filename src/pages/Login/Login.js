import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {setPassword, setEmail, signInUsingGoogle, error, signInUsingEmail} = useAuth();


    const handlePassword =(e)=>{
         setPassword(e.target.value);
    }

    const handleEmail =(e)=>{
        setEmail(e.target.value);
    }

    return (
        <div className="loginDiv">
        <div className="loginCard">
        <h1 className="text-white">Please Login your account</h1>

            <div className="row">
               <div className="col-lg-6">
                   <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-75" alt="" />
               </div>
               <div className="col-lg-6 my-auto">
              <form onSubmit={signInUsingEmail}>
              <input onBlur={handleEmail} required type="email" placeholder="your email address" className="mt-3 p-2 w-75"/>
                   <br />
                   <input onBlur={handlePassword} required type="password" placeholder="your password" className="mt-3 p-2 w-75" />
                   <p className="text-danger"><b>{error}</b></p>
                   <button className="mt-3 p-2 w-75 inputBtn" type="submit">Login</button>
                    <p className="text-white mt-2">-------or-------</p>
              </form>
              <button className="mt-3 p-2 w-75 googleBtn" onClick={signInUsingGoogle} >Sign in with Google</button>

               </div>
            </div>
        </div>
    </div>
    );
};

export default Login;