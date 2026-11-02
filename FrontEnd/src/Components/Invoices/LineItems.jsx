import React, {useState} from 'react'

const LineItems = ({
    onSelectedIndexChange, 
    cards, 
    deleteCard, 
    handleLineItemsChange, 
    onTaxable, 
    selectedTax,
    currencySymbol,
    thousandSeperator,
    decimalSeperator,
    numberOfDecimals,
    availableItems
}) => {

  /*
  let options = ['Add new items manually', 'Add pre-define line items']  

  const [selectedIndex, setSelectedIndex] = useState(0);

    const handleUp = () => {
    const newIndex =
      selectedIndex === 0
        ? options.length - 1
        : selectedIndex - 1;

    setSelectedIndex(newIndex);

    // send to parent
    onSelectedIndexChange(newIndex);
    };

    const handleDown = () => {
    const newIndex =
      selectedIndex === options.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(newIndex);

    // send to parent
    onSelectedIndexChange(newIndex);
    };
    
   const handleSelect = (event) => {

    const index = options.indexOf(event.target.value);

    setSelectedIndex(index);

    // send to parent
    onSelectedIndexChange(index);

   } 

*/
const handlePredefinedItemSelect = (cardId, itemId) => {

    const selectedItem = availableItems.find(
        (item) => item._id === itemId
    );

    if (!selectedItem) return;

    handleLineItemsChange(cardId, "title", selectedItem.title);
    handleLineItemsChange(cardId, "price", selectedItem.price);
    handleLineItemsChange(cardId, "description", selectedItem.description || "");
    handleLineItemsChange(cardId, "qty", selectedItem.qty || "");
};


  return (
      <div>
        {cards.map((card) => (
            <div className="card text rounded-0 mb-3" key={card.id}>
                <div className="card-header" align="left">
                    <b>Item {card.number}</b>
                </div>
                <div className="card-body">
                    <div className='row mb-4'>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Qty</label>
                                <input type="text" className="form-control form-control-sm rounded-0" placeholder='1'
                                    value={card.qty}
                                    onChange={(e)=>handleLineItemsChange(card.id, "qty", e.target.value)}
                                    />
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Item Title</label>
                                <input type="text" className="form-control form-control-sm rounded-0"
                                    value={card.title}
                                    onChange={(e)=>handleLineItemsChange(card.id, "title", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Adjust (%)</label>
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"
                                    value={card.adjust}
                                    onChange={(e)=>handleLineItemsChange(card.id, "adjust", e.target.value)}                                
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Rate ({currencySymbol})</label>
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"
                                    value={card.price}
                                    onChange={(e)=>handleLineItemsChange(card.id, "price", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='right'>
                                <label className="form-label small">Amount ({currencySymbol})</label><br></br>
                                <label className="form-label">{currencySymbol}{thousandSeperator(card.qty*card.price)}{decimalSeperator}{numberOfDecimals}</label>
                            </div>
                        </div>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-sm-6'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Description</label>
                                <input type="text" 
                                    placeholder='Brief description of the work carried out for this line item (optional)' 
                                    className="form-control form-control-sm rounded-0"
                                    value={card.description}
                                    onChange={(e)=>handleLineItemsChange(card.id, "description", e.target.value)}
                                    />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label form-control-sm small">Taxable</label>
                                <div className="form-check" style={{marginLeft: "10px"}}>
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        id="flexCheckDefault"
                                        checked={selectedTax === "Yes"}
                                        onChange={(e) => {(e.target.checked)? onTaxable("Yes"): onTaxable("No")}}
                                        />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-2'></div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-6' align='left'>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>

                                    {/* Select dropdown */}
                                    <select className="form-select form-select-sm rounded-0"
                                        defaultValue=""
                                        onChange={(e) =>
                                            handlePredefinedItemSelect(card.id, e.target.value)
                                        }
                                    >
                                        <option value="">Select the pre-defined item</option>

                                        {availableItems.map((item) => (
                                            <option key={item._id} value={item._id}>
                                                {item.title} - {currencySymbol}{item.price}
                                            </option>
                                        ))}
                                    </select>

                             {/*   
                            <button type="button" className="px-3" onClick={handleDown} style={{border: "1px solid blue"}}><i className="fa-solid fa-chevron-down" style={{color: "blue"}}></i></button>

                            <button type="button" className="px-3" onClick={handleUp} style={{border: "1px solid blue"}}><i className="fa-solid fa-chevron-up" style={{color: "blue"}}></i></button>

                                */}
                            </div>
                        </div>
                        <div className='col-sm-6' align='right'>
                            <button type="button" className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>          
        ))}
      </div>      
  )
}

export default LineItems
