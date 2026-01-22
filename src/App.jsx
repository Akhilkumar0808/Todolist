import Register from "./components/Register"
import { BrowserRouter,Routes,Route,HashRouter } from "react-router-dom"
import Login from "./components/Login"
//import AddTodo from "./components/AddTodo"
import Home from "./components/Home"
import Completed from "./components/Completed"
import Pending from "./components/Pending"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"
function App(){

  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<div className="page home-bg">
        <ProtectedRoute><Home/></ProtectedRoute>
        </div>
        }/>
      {/* <Route path="/" element={
          <div className="page login-bg center-page">
            <Login />
          </div>
        }/> */}
      <Route path="/login" element={
          <div className="page login-bg center-page">
            <Login />
          </div>
        }/>
      <Route path="/register" element={
          <div className="page register-bg center-page">
            <Register />
          </div>
        }/>
      <Route path="/Completed" element={
          <div className="page completed-bg">
            <ProtectedRoute>
              <Completed />
            </ProtectedRoute>
          </div>
        }/>
      <Route path="/Pending" element={
          <div className="page pending-bg">
            <ProtectedRoute>
              <Pending />
            </ProtectedRoute>
          </div>
        }/>
      </Routes>
    </HashRouter>
  )
}
export default App