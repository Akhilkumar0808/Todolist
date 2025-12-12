import {useState} from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
 function Login(){
     const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const navigate = useNavigate()
        const handleForm=(event)=>{
            event.preventDefault()
            let fetchData = async ()=>{
try {
    let getUser = await fetch(`http://localhost:3000/users?email=${email}`)
    let jsonRes =await getUser.json()
    if(jsonRes.length==0){
        alert("Invalid Credentials")
    }else{
        if(jsonRes[0].password==password){
            localStorage.setItem("user_details",JSON.stringify(jsonRes[0]))
            navigate("/")
    
        }else{
            alert("Invalid Credintials")
        }
    }

    
} catch (error) {
    console.log(error);
    
}

            }
            fetchData()
        }


    return(
        <form className="login-container" onSubmit={handleForm}>
    <label >Email:</label>
    <input 
    type="text"
     placeholder="Enter your email .."
     onChange={(event)=>setEmail(event.target.value)}
      />
    <label >Password:</label>
    <input
     type="text"
     placeholder="Enter your password.."
    onChange={(event)=>setPassword(event.target.value)} />
    <button type="submit">Login</button>
    <Link to="/register">Create Account?</Link>
        </form>

    )
 }
 export default Login