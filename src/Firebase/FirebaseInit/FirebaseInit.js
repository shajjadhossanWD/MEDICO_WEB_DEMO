import firebaseConfig from "../FirebaseConfig/FirebaseConfig"
import { initializeApp } from "firebase/app";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;