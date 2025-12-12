import react from "react"
import {Navigate} from 'react-router-dom';

function ProtectedRoute(ch){
    let loginUser = JSON.parse(localStorage.getItem("user_details"));
    if(loginUser==null){
     return <Navigate to="/Login"/>

    }else{
      return ch.children;

    }


}
export default ProtectedRoute