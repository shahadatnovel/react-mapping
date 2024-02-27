import React from "react";
import Card from "./Components/Card";
import data from "./data.json";


   
 

function App(){
    return(
        <div>
     { data.map((items, index)=><Card key={index} titleText = {items.title} descText ={items.desc}/>)}
           

        </div>
    );
}





export default App;