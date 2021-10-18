import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {setPassword, setEmail, signInUsingGoogle, signInUsingGithub, error, signUpUsingEmail} = useAuth();


    const handlePassword =(e)=>{
        setPassword(e.target.value);
   }

   const handleEmail =(e)=>{
       setEmail(e.target.value);
   }



    return (
        <div className="registration_div">
        <div className="registerCard">
        <h1 className="text-white">Please register your account</h1>

            <div className="row">
               <div className="col-lg-6">
                   <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-75" alt="" />
               </div>
               <div className="col-lg-6 my-auto">
                   <button onClick={signInUsingGoogle} className="mt-3 p-2 w-75 googleBtn">Register with Google</button>
                   <button onClick={signInUsingGithub} className="mt-3 p-2 w-75 githubBtn">Register with Github</button>
                 <form onSubmit={signUpUsingEmail}>
                   <p className="text-white mt-3">-------or-------</p>
                   <input onBlur={handleEmail} required type="email" placeholder="your email address" className="mt-3 p-2 w-75"/>
                   <br />
                   <input onBlur={handlePassword} required type="password" placeholder="your password" className="mt-3 p-2 w-75" />
                   <p className="text-danger"><b>{error}</b></p>
                   <button className="mt-3 p-2 w-75 inputBtn">Register</button>
                 </form>
                    
                  
               </div>
            </div>
        </div>
    </div>
    );
};

export default Register;