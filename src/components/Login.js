import React from "react";
import Cards from "./Cards";
import Data from "./Data";
import './Login.css'

const Login=()=>{
    return(
        <div className="login">
            {Data.map(e=>{
                return(
                    <div key={e.id}>
                        <Cards title={e.title} image={e.image} price={e.price} rating={e.rating}/>

                    </div>
                    
                )
                 

            })}
           

           
        </div>
    );
}
export default Login;