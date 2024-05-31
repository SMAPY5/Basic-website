import React from "react";
import './Conta.css';

const Contact =()=>{
    
    return(
        <React.Fragment>
            <h2>Contact Details</h2>
       
            <div className="parent">
           

                <div className="box-1">
               
            
            <i class="fa-solid fa-house"></i>
                <h4>Address</h4>
                <p>KPHB metro</p>
                <p>kukatpally</p>
                <p>Hyderabad</p>
                <br></br>
                <i class="fa-solid fa-mobile"></i>
                <h4>Phone</h4>
                <p>9704974496</p>
                <p>9912945493</p>
                <br></br>
                <i class="fa-solid fa-envelope"></i>
                <h4>EmailId</h4>
                <p>mounikayanakangiri584@gmail.com</p>
               </div>
               
                <div className="box-2">
                      
            <h3>send us a message</h3>
            <p className="p">if you any product from our mall or any types of quaries released to my tutorial.you can send me message from here its my pleasure to help you.</p>
            <input placeholder="Enter your name"></input><br></br>
            <input placeholder="Enter your EmailId"></input><b></b><br></br>
            <textarea placeholder="Enter your message" width="700px" height="200px"></textarea><br></br>
            <button>Send Now</button>

                </div>
            
</div>
    
          

          

        
        </React.Fragment>
    );
};
export default Contact;