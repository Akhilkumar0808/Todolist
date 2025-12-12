import react, {useState} from "react"
import "./addtodo.css"
function AddTodo(){
    const [todo,setTodo]=useState("");
    const addBtn= ()=>{
        let date = new Date()
        let getLoginUser=localStorage.getItem("user_details")
      
        const addTodo= async()=>{
            try {
                let res=await fetch("http://localhost:3000/todos",
                    {
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                            todo,
                            created_at:date.toLocaleTimeString(),
                            is_completed:false,
                            user_id:JSON.parse(getLoginUser).id

                        })
                    }
                )
                // if(res.ok){
                //     alert("Your todo added successfully!")
                // }

            } catch (error) {
                console.log(error)
            }
        }
        addTodo()
    }
    
  return(
  <div className="addtodo-container">
 <input className="addtodo-input"
  type="text" 
  placeholder="add Your todos.."
  onChange={(event)=>setTodo(event.target.value)} />
 <button  className="addtodo-btn" onClick={addBtn}>Add</button>
 
  </div>



    )
}
export default AddTodo