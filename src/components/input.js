import React from "react";

export default function Input({id, Label, type}){
    return(

        <div className="">
            <label htmlFor={id}>{Label}</label>
            <input type={type} id={id}></input>
        </div>

    )
}