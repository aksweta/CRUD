import React from "react";

const Inputfield = ({ onchange , type, defaultValue, name, label }) => {
    return (
        <div>   
            {label && <label htmlFor="input-feild">{label}</label>}
            <input type={type} onChange={onchange} value={defaultValue} name={name} />
        </div>
    )
};

export default Inputfield;