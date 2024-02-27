import React from "react";


//const Title = "Shahadat hossain";
//const Todo = "number: 01814522037";
 
const date = new Date();
const year = date.getFullYear();


function Card(props){
    return(
        <div>
            
        <div className="card">
            <h3 className="cardTitle">{props.titleText}</h3>
           <p className="cardDese">{props.descText} </p>
           <p className="cardFooter">Copywirte {year}</p>
        </div>
        </div>
    );
}
export default Card;