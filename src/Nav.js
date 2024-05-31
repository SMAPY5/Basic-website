import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
const Nav=()=>{
    return(
    
        <div className="Nav">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
           
            <Link to='/login'>Products</Link>
            <Link to='/contact'>Contact</Link>

        </div>
       
    );
};
export default Nav;