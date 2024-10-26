import React from "react";

const Button = (props)=>{
    const {title} = props;
   
    return(
        <div className="container-buttons">
            <button type="button" className="btn btn-primary  btn-lg  ">{title}</button>
        </div>
    )
}
export default Button;