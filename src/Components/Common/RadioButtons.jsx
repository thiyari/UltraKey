import React, {useEffect, useState} from 'react'

const RadioButtons = (props) => {

  const [selectedItem, setSelectedItem] = useState("");

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
                      onChange={(event)=>setSelectedItem(event.target.value)}/>
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
