import React from "react";

const Inputfield = ({onchange , type, value, name, label}) => {
    <div>
         {label && <label htmlFor="input-feild">{label}</label>}
    <input type={type} onchange={onchange} value={value} name={name}/>
    </div>
};

export default Inputfield;