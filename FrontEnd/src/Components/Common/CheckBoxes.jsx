import React, {use, useEffect, useState} from 'react'

const CheckBoxes = ({ items, selectedItems = [], getCheckedItems }) => {
    
  const [checkedItems, setCheckedItems] = useState(selectedItems);

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
    if (checkedItems.length === items.length) {
      setCheckedItems([]); // Uncheck all
    } else {
      setCheckedItems(items); // Check all
    }
  };

  const allChecked = checkedItems.length === items.length;
  
  // Sync checkbox state when API data changes
  useEffect(() => {
    setCheckedItems(selectedItems || []);
  }, [selectedItems]);

  // Send selected values to parent
  useEffect(() => {
    getCheckedItems(checkedItems);
  }, [checkedItems]);

  return (
    <div>
                <button 
                      className="btn btn-outline-primary mb-2"
                      onClick={handleToggleAll}
                      >{allChecked ? "Deselect All" : "Select All"}
                </button>
                      {items.map((item, index) => (
                        <div className="form-check" key={item}>
                          <input className="form-check-input" 
                          type="checkbox"  
                          checked={checkedItems.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          id={`checkbox-${index}`}/>
                          <label className="form-check-label" htmlFor={`checkbox-${index}`} style={{fontSize: "16px"}}>
                            {item}
                          </label>
                        </div>
                        ))}
    </div>
  )
}

export default CheckBoxes
