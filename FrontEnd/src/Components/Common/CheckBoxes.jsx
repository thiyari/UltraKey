const CheckBoxes = ({ items, selectedItems = [], getCheckedItems }) => {

  const isChecked = (item) => selectedItems.includes(item);

  /* Individual checkbox change */
  const handleCheckboxChange = (item) => {
    const updated = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    getCheckedItems(updated);
  };

  /* Check all / uncheck all */
  const handleToggleAll = (e) => {
    e.preventDefault();

    const allChecked = selectedItems.length === items.length;

    const updated = allChecked ? [] : items;

    getCheckedItems(updated);
  };

  const allChecked = selectedItems.length === items.length;

  return (
    <div>
      <button
        className="btn btn-outline-primary mb-2"
        onClick={handleToggleAll}
      >
        {allChecked ? "Deselect All" : "Select All"}
      </button>

      {items.map((item, index) => (
        <div className="form-check" key={item}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked(item)}
            onChange={() => handleCheckboxChange(item)}
            id={`checkbox-${index}`}
          />
          <label
            className="form-check-label"
            htmlFor={`checkbox-${index}`}
            style={{ fontSize: "16px" }}
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxes;