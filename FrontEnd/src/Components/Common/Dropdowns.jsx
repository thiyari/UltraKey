import React, {useEffect, useState} from 'react'

const Dropdowns = (props) => {

  const handleChangeSelect = (event) => {
    props.getOption(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
        <select className="form-select" value={props.selectedOption} onChange={handleChangeSelect}>
            {props.options.map((option, index) => (
                <option value={option.value} key={index}>{option.label}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdowns
