import { useContext } from "react";
import { AuthContext } from "../Contaxt/AuthProvider";

const useAuth = () =>{
    return useContext(AuthContext);
}
export default useAuth;