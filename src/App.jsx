import Register from "./components/Register"
import Login from "./components/Login"
import AddTodo from "./components/AddTodo"
import { Routes,Route } from "react-router-dom"
function App(){

  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addTodo" element={<AddTodo/>}/>
    </Routes>
  )
}
export default App