import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Pagenotfound from "./components/Pagenotfound";
import Nav from "./Nav";



let App=()=> {
  
  
  return (
    <BrowserRouter>
       <Nav/>

     <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="*" element={<Pagenotfound/>}/>
       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
