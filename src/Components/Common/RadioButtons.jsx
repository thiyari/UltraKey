import React, {useEffect, useState} from 'react'

const RadioButtons = (props) => {

  const [selectedItem, setSelectedItem] = useState([]);
  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  }

  useEffect(()=>{
    props.getSelectedItem(selectedItem);
  },[selectedItem])

  return (
    <div>
        {
            props.options.map((option)=>(
                    <div className="form-check" key={option}>
                      <input className="form-check-input" 
                      type="radio" 
                      name={props.name} 
                      value={option}
                      checked={selectedItem === option}
                      onChange={handleChange}/>
                      <label className="col-form-label-sm" htmlFor="flexRadioDefault1">
                        {option}
                      </label>
                    </div>
                    ))
        }
    </div>
  )
}

export default RadioButtons
