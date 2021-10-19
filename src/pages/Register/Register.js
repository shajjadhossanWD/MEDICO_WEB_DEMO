import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {setPassword, setName, setEmail, signInUsingGoogle, signInUsingGithub, error, signUpUsingEmail} = useAuth();


    //name handle.............. 
    const handleName= (e) =>{
      setName(e.target.value);
    }
  //password handle ..............
    const handlePassword =(e)=>{
        setPassword(e.target.value);
   }

   //email handle.................
   const handleEmail =(e)=>{
       setEmail(e.target.value);
   }



    return (
        <div className="registration_div">
        <div className="registerCard">
        <h1 className="text-white">Please register your account</h1>

            <div className="row ">
               <div className="col-lg-6">
                   <img src="https://i.ibb.co/zbBZPp2/Neurology-300x300.png" className="w-75" alt="" />
               </div>
               <div className="col-lg-6 my-auto">
                   <button onClick={signInUsingGoogle} className="mt-3 p-2 googleBtn">Register with Google</button>
                   <button onClick={signInUsingGithub} className="mt-3 p-2 githubBtn">Register with Github</button>
                 <form onSubmit={signUpUsingEmail}>
                   <p className="text-white mt-3">-------or-------</p>
                   <input onBlur={handleName} required type="text" placeholder="your name" className="mt-3 p-2 emailInput"/>
                   <br />
                   <input onBlur={handleEmail} required type="email" placeholder="your email address" className="mt-3 p-2 emailInput"/>
                   <br />
                   <input onBlur={handlePassword} required type="password" placeholder="your password" className="mt-3 p-2 passwordInput" />
                   <p className="text-danger"><b>{error}</b></p>
                   <p className="text-white mt-3">Already Registered? please <Link to="/login" className="togglebtn">Login Now</Link></p>
                   <button className="mt-3 p-2 inputBtn">Register</button>
                 </form>
                    
                  
               </div>
            </div>
        </div>
    </div>
    );
};

export default Register;