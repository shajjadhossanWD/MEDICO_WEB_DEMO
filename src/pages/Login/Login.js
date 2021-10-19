import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {setPassword, setEmail, setisLoading, signInUsingGoogle, error, signInUsingEmail} = useAuth();
     const location = useLocation()
     const history = useHistory()
     
     const redirectAuth = location.state?.from || "/home";
     const handleLoginBtn = () =>{
         signInUsingGoogle()
         .then(res =>{
             history.push(redirectAuth);
             console.log(res)
         })
         .finally(()=>setisLoading(false))
     }

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
              <input onBlur={handleEmail} required type="email" placeholder="your email address" className="mt-3 p-2 emailInput"/>
                   <br />
                   <input onBlur={handlePassword} required type="password" placeholder="your password" className="mt-3 p-2 passwordInput" />
                   <p className="text-danger"><b>{error}</b></p>
                   <button className="mt-3 p-2 inputBtn" type="submit">Login</button>
                    <p className="text-white mt-2">-------or-------</p>
              </form>
              <button className="mt-3 p-2  googleBtn" onClick={handleLoginBtn} >Sign in with Google</button>

               </div>
            </div>
        </div>
    </div>
    );
};

export default Login;