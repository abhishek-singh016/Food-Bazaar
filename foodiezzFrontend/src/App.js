import Home from "./screens/Home.js";
import Mycart from "./screens/Mycart.js";
import Myorders from "./screens/Myorders.js";
import Login from "./screens/Login.js";
import Signin from "./screens/Signin.js";
import Navbar from "./components/Navbar.js";
import { ContextReducer } from "./components/ContextReducer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   
   <ContextReducer>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/mycart' element={<Mycart/>}/>
       
          <Route exact path='/myorders' element={<Myorders/>}/> 
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signin' element={<Signin/>}/>
        </Routes>
      </Router>
      </ContextReducer>
    </>
  );
}

export default App;
