import react from "react"
import "./navbar.css"
import {Link,useNavigate} from "react-router-dom"
function Navbar(){
    const navigate=useNavigate()
return(

    <div>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/completed">Completed Tasks</Link>
            <Link to="/pending">Pending Tasks</Link>
            <button onClick={()=>{
                localStorage.removeItem("user_details")
                navigate("/Login")
            }}>Logout</button>
        </nav>
    </div>
)


}
export default Navbar