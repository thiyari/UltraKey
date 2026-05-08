import React, {useState} from 'react'

const Dropdowns = (props) => {

  const [selected, setSelected] = useState("");

  const handleChangeSelect = (event) => {
    setSelected(event.target.value);
  };

  props.getOption(selected);

  return (
                    <div className="d-flex justify-content-center">
                      <select className="form-select" value={selected} onChange={handleChangeSelect}>
                        {props.options.map((option, index) => (
                            <option value={option.value} key={index}>{option.label}</option>
                          ))}
                      </select>
                    </div>
  )
}

export default Dropdowns
