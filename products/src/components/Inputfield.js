import React from "react";

const Inputfield = ({ onChange , type, value, name, label }) => {
    return (
        <div>   
            {label && <label htmlFor="input-feild">{label}</label>}
            <input type={type} onChange={onChange} value={value} name={name} />
        </div>
    )
};

export default Inputfield;