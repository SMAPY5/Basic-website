import React from "react";

const Cards=({title,image,price,rating})=>{
    console.log(title)
    
    return(
        <div className="div">
            <img src={image} alt="" className="pro"/>
            <h1 className="cls">{title}</h1>
            <h1 className="cls">Rs.{price}</h1>
            <h1 className="cls">{rating}</h1>
            <button className="btn">Buy Now</button>

        </div>
    );
};
export default Cards;