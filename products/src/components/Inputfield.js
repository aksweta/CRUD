import React from "react";

const Inputfield = ({ onchange , type, defaultValue, name, label }) => {
    return (
      <>
        <div className="row mb-3">
          {label && (
            <label htmlFor="input-feild" className="col-sm-2 col-form-label">
              {label}
            </label>
          )}

          <div className="col-sm-10">
            <input
              className="form-control"
              type={type}
              onChange={onchange}
              value={defaultValue}
              name={name}
            />
          </div>
        </div>
      </>
    );
};

export default Inputfield;