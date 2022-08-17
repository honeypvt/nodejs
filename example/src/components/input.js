import React from "react";

function Inputs(props){
    return <input className="form-control" style={{marginBottom : "5px"}} type={props.type} placeholder={props.placeholder} name={props.name} />
}

export default Inputs;