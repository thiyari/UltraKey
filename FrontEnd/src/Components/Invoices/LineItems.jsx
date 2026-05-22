import React, {useState} from 'react'

const LineItems = ({preDefinedItems, cards, deleteCard, handleLineItemsChange}) => {

  let options = ['Add a pre-define line item']  
    preDefinedItems.map((item, index)=>
            {
                options[index+1]=`Line ${index+1}: "${item.qty}|${item.title}|${item.price}|${item.description}"`
            });
  

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleUp = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? options.length - 1 : prev - 1
    );
  };

  const handleDown = () => {
    setSelectedIndex((prev) =>
      prev === options.length - 1 ? 0 : prev + 1
    );
    
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
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"/>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Rate (₹)</label>
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"
                                    value={card.price}
                                    onChange={(e)=>handleLineItemsChange(card.id, "price", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='right'>
                                <label className="form-label small">Amount (₹)</label>
                                <label className="form-label">₹0.00</label>
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
                                <div className="form-check">
                                    <input className="form-check-input" 
                                        type="checkbox" 
                                        id="flexCheckDefault"/>
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
                                        value={options[selectedIndex]}
                                        onChange={(e) =>
                                        setSelectedIndex(options.indexOf(e.target.value))
                                        }
                                    >
                                        {options.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                        ))}
                                    </select>

                            {/* Down button */}
                            <button className="px-3" onClick={handleDown} style={{border: "1px solid blue"}}><i className="fa-solid fa-chevron-down" style={{color: "blue"}}></i></button>


                            {/* Up button */}
                            <button className="px-3" onClick={handleUp} style={{border: "1px solid blue"}}><i className="fa-solid fa-chevron-up" style={{color: "blue"}}></i></button>


                            </div>
                        </div>
                        <div className='col-sm-6' align='right'>
                            <button className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Item</button>
                        </div>
                    </div>
                </div>
            </div>          
        ))}
      </div>      
  )
}

export default LineItems
