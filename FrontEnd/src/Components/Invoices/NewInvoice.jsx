import React, {useState} from 'react'
import LineItems from './LineItems';
import Payments from './Payments';

const NewInvoice = () => {
  
  const [lineItemCards, setLineItemCards] = useState([
    { id: 1, number: 1 },
  ]);
  const [paymentCards, setPaymentCards] = useState([
    { id: 1, number: 1 },
  ]);

  // Add new LineItem card
  const addLineItemCard = () => {
    const newLineItemCard = {
      id: Date.now(),
      number: lineItemCards.length + 1,
    };

    setLineItemCards([...lineItemCards, newLineItemCard]);
  };

  // Add new Payment card
  const addPaymentCard = () => {
    const newPaymentCard = {
      id: Date.now(),
      number: paymentCards.length + 1,
    };

    setPaymentCards([...paymentCards, newPaymentCard]);
  };


  // Delete LineItem card
  const deleteLineItemCard = (id) => {
    const updatedLineItemCards = lineItemCards.filter((card) => card.id !== id);
    setLineItemCards(updatedLineItemCards);
  };

  // Delete Payment card
  const deletePaymentCard = (id) => {
    const updatedPaymentCards = paymentCards.filter((card) => card.id !== id);
    setPaymentCards(updatedPaymentCards);
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
                          <LineItems cards={lineItemCards} deleteCard={deleteLineItemCard}/>
                          <a className='btn btn-outline-primary rounded-0' onClick={addLineItemCard}>Add Another Item</a>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Payments</strong>
                        </div>
                        <div className="card-body" align="left">
                          <Payments cards={paymentCards} deleteCard={deletePaymentCard}/>
                          <a className='btn btn-outline-primary rounded-0' onClick={addPaymentCard}>Add Another Item</a>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4 mb-4">
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
