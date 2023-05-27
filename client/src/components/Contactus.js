import React from "react";
import Hello from "./Hello";

export default function Contactus(props){
    console.log(props)
    return(
        <div>
            {props.salutation} Name: {props.name}<br></br>
            Phone no.: {props.phone} <br></br>
            Email: {props.email}<br></br>
            
        </div>
    )
}