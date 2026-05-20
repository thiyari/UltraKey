import React, {useState} from 'react'
import LineItems from './LineItems';

const NewInvoice = () => {
  const [cards, setCards] = useState([
    { id: 1, number: 1 },
  ]);
  // Add new card
  const addCard = () => {
    const newCard = {
      id: Date.now(),
      number: cards.length + 1,
    };

    setCards([...cards, newCard]);
  };

  // Delete card
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className='container'>
      <div className='row mt-3 p-2 border' style={{backgroundColor: "#f8f9fb"}}>
        <label align="left" className="p-2"><b>&nbsp;Add New Invoice</b></label>
        <div className='col-sm-9'>
                <div className="form-group row" align="left">
                <div className="col-sm-12">
                    <input 
                        type="text"  
                        className="form-control mb-2 rounded-0" 
                        placeholder='Enter Invoice Title'
                        required
                        />
                    <div className="card text rounded-0 mt-5">
                        <div className="card-header" align="left">
                          <strong>Description</strong>
                        </div>
                        <div className="card-body" align="left">
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Line Items</strong>
                        </div>
                        <div className="card-body" align="left">
                          <LineItems cards={cards} deleteCard={deleteCard}/>
                          <a className='btn btn-outline-primary rounded-0' onClick={addCard}>Add Another Item</a>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Payments</strong>
                        </div>
                        <div className="card-body" align="left">
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Terms and Conditions</strong>
                        </div>
                        <div className="card-body" align="left">
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <div className='col-sm-3'>
          <div className="card text rounded-0">
            <div className="card-header" align="left">
              <strong>Publish</strong>
            </div>
            <div className="card-body" align="right">
              <a href="#" className="btn btn-primary rounded-0">Publish</a>
            </div>
          </div>
          <div className="card mt-4 text rounded-0">
            <div className="card-header" align="left">
              <strong>Invoice Details</strong>
            </div>
            <div className="card-body" align="left">
              {/* sub parts*/}
                <div className="card mt-4 text rounded-0">
                  <div className="card-header" align="left">
                    <strong>Payment Settings</strong>
                  </div>
                  <div className="card-body" align="left">
                  </div>
                </div>
                <div className="card mt-4 text rounded-0">
                  <div className="card-header" align="left">
                    <strong>Tax Settings</strong>
                  </div>
                  <div className="card-body" align="left">
                  </div>
                </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default NewInvoice
