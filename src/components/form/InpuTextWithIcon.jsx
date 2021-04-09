import React from 'react';
import "./InpuTextWithIcon.css";



export default function InpuTextWithIcon(props) {
    return (
        <div className="inpuTextWithIcon">
            <input id   = {props.id} 
                   type = {props.type} 
                   name ="nombre"                    
                   autoComplete="off"
                   placeholder ={props.title} 
                   required                 
            />
            <span className = {props.cursorPointer ? "icon barcode" : "icon" } 
                  onClick   = {props.scanCode}
                  required >
                {props.icon}
            </span>
        </div>
    )
}


