import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider,sendEmailVerification, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/FirebaseInit/FirebaseInit";




initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   
    const auth = getAuth();
   
//    google signin/regestration ..................
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
        }).catch(error =>{
            setError(error.message)
        })
    }
    
    // github signin/regestration ------------------
    const signInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
         .then(result =>{
             const user = result.user
             setUser(user);
         }).catch(error =>{
            setError(error.message)
        })
    }

    //emailPassword Registration method......................
    const signUpUsingEmail = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be contain at last 6 character');
            return;
        }
        if(!/(?=.*?[A-Z])/.test(password)){
            setError('password Must contain 1 upper case');
            return;
        }
        if(!/(?=.*?[0-9])/.test(password)){
            setError('password Must contain 1 digit');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
            veryfyEmail();
            setError('');
            console.log(user)
        }).catch(error =>{
            setError(error.message)
        });
    }
     
    //emailPassword login method.................. 
    const signInUsingEmail = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('password must be contain at last 6 character');
            return;
        }
        if(!/(?=.*?[A-Z])/.test(password)){
            setError('password Must contain 1 upper case');
            return;
        }
        if(!/(?=.*?[0-9])/.test(password)){
            setError('password Must contain 1 digit')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            setError('');
        }).catch(error =>{
            setError(error.message)
        })
    }

    //emailverification ///////.......................
    const veryfyEmail =()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{

        })
    }
    

    //onAuth......................
     useEffect(()=>{
       const  unsubscribed =  onAuthStateChanged(auth, user =>{
             if(user){
                 setUser(user);
             }
             else{
                 setUser({});
             }
         })
         return () => unsubscribed;
     },[])


     //Logout method..................
     const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
             setError(error.message);
          });
     }

return{
    user,
    error,
    password,
    email,
    setPassword,
    setEmail,
    signInUsingGoogle,
    signInUsingGithub,
    signUpUsingEmail,
    signInUsingEmail,
    logOut
}

}

export default useFirebase;