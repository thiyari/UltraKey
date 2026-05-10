import React, {useState} from 'react'

const RadioButtons = (props) => {

  return (
    <div>
        {
            props.options.map((option)=>(
                    <div className="form-check" key={option}>
                      <input className="form-check-input" 
                      type="radio" 
                      name={props.name} 
                      value={option}
                      checked={((props.data.price === option) && (props.name === 'taxPrice'))}
                      onChange={(e) => {
                              if(props.name === 'taxPrice'){
                                  props.setData({...props.data, price: e.target.value})
                              } 
                          }}/>
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
