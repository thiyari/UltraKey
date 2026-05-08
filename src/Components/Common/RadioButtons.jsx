import React, {useState} from 'react'

const RadioButtons = (props) => {

  const [selected, setSelected] = useState('');
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  props.getSelected(selected);

  return (
    <div>
        {
            props.options.map((option)=>(
                    <div class="form-check" key={option}>
                      <input class="form-check-input" 
                      type="radio" 
                      name={props.name} 
                      value={option}
                      checked={selected === option}
                      onChange={handleChange}/>
                      <label class="col-form-label-sm" for="flexRadioDefault1">
                        {option}
                      </label>
                    </div>
                    ))
        }
    </div>
  )
}

export default RadioButtons
