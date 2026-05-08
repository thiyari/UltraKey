import React, {useState} from 'react'

const CheckBoxes = (props) => {
    
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChangeSelect = (event) => {
    setSelected(event.target.value);
  };

  // Individual checkbox change
  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  // Check all / Uncheck all
  const handleToggleAll = (e) => {
    e.preventDefault();
    if (checkedItems.length === props.items.length) {
      setCheckedItems([]); // Uncheck all
    } else {
      setCheckedItems(props.items); // Check all
    }
  };

  const allChecked = checkedItems.length === props.items.length;
  props.getCheckedItems(checkedItems);
  
  return (
    <div>
                <button 
                      className="btn btn-outline-primary mb-2"
                      onClick={handleToggleAll}
                      >{allChecked ? "Deselect All" : "Select All"}
                </button>
                      {props.items.map((item) => (
                        <div className="form-check" key={item}>
                          <input className="form-check-input" 
                          type="checkbox"  
                          checked={checkedItems.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          id="flexCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                            {item}
                          </label>
                        </div>
                        ))}
    </div>
  )
}

export default CheckBoxes
