import React, {useState, useEffect } from "react"
import Navbar from "./Navbar"
import "./Completed.css"

function Completed(){
    const [todos,setTodos] =useState([])
    let user=JSON.parse(localStorage.getItem("user_details"))
useEffect(()=>{
const getCompletedTodos = async ()=>{
try {
    let getTodos = await fetch(`http://localhost:3000/todos?is_completed=${true}&user_id=${user.id}`)
    let jsonData = await getTodos.json()
    setTodos(jsonData)
    
} catch (error) {
    console.log(error);
}

}
getCompletedTodos()

},[])

return(
<div className="completed-container">
{
todos.length==0?(<h1>No completed todos</h1>):(
todos.map(item=>(
<div className="completed-item" key={item.id}>
    <h1>{item.todo}</h1>
</div>

))

)


}
</div>

)

}
export default Completed