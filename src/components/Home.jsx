import React ,{useEffect,useState} from "react"
import AddTodo from "./AddTodo"
import Navbar from "./Navbar"
import "./home.css"

function Home(){
   const [todos,setTodos]=useState([])
   let login_user= JSON.parse(localStorage.getItem("user_details"))
    useEffect(()=>{
        const getAllTodos=async ()=>{
            try {
              let response = await fetch(`http://localhost:3000/todos?user_id=${login_user.id}`);
              let jsonResponse = await response.json();
              setTodos(jsonResponse)  
            } catch (error) {
                console.log(error);
            }
        }
        getAllTodos()
    },[todos])
    const delTodo = (id)=>{
        const deleteTodo =async ()=>{
            try {
                let res = await fetch(`http://localhost:3000/todos/${id}`,{
                    method :"DELETE"
             } )
             if(res.ok){
                console.log("Deleted successfully");
             }
                
            } catch (error) {
                console.log(error);
            }
        }
        deleteTodo()
    }

    const updBtn =(id)=>{
   const getTodo =async ()=>{
  try {
    let getSingleTodo = await fetch(`http://localhost:3000/todos/${id}`);
    let jsonData=await getSingleTodo.json()
    jsonData.is_completed=!jsonData.is_completed;
    console.log(jsonData);
     let response = await fetch(`http://localhost:3000/todos/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(jsonData)
})

   
      } catch (error) {
    console.log(error)
    }


   }
   getTodo()
   


    }
    return (
    
<div className="home-container">
    <Navbar/>
<AddTodo/>
{
 todos.length==0?(<h1>No todos found</h1>):(
 todos.map(item=>(
 <div className="todo-item" key={item.id}>
    <h1 style={{ textDecoration: item.is_completed ? "line-through":"none"}}>
        {item.todo}
        </h1>
        <div className="todo-buttons">
    <button className="delete-btn" onClick={()=>delTodo(item.id)}>
        del
     </button>
    <button className="update-btn"  onClick={()=>updBtn(item.id)}>
    {item.is_completed? "complete":" mark as completed"}
    </button>
</div>
</div>

 )
 )
 )
}

</div>


    )

}
export default Home