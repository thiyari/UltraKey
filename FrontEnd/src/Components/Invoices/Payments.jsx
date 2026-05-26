import React, {useState} from 'react'
import Dropdowns from '../Common/Dropdowns';

const Payments = ({cards, handlePaymentItemsChange, deleteCard}) => {
const [selectedPayments, setSelectedPayments] = "";
const [selectedStatus, setSelectedStatus] = "";
const paymentOptions = ["select method","Generic", "Cash", "Card"]
const statusOptions = ['select status','paid','overdue']


  return (
    <div>
      <div>
        {cards.map((card) => (
            <div className="card text rounded-0 mb-3" key={card.id}>
                <div className="card-header" align="left">
                    <b>Payment {card.number}</b>
                </div>
                <div className="card-body" align="right">
                    <div className='row mb-1'>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Date</label>
                                <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"
                                    value={card.date ? card.date.toISOString().split('T')[0] : ''}
                                    onChange={(e)=>handlePaymentItemsChange(card.id, "date", new Date(e.target.value))}                                
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Amount (₹)</label>
                                <input type="text" className="form-control form-control-sm rounded-0"
                                    value={card.amount}
                                    onChange={(e)=>handlePaymentItemsChange(card.id, "amount", e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Payment Method</label>
                                    {/* Select dropdown */}
                                    <select
                                    className="form-select form-select-sm rounded-0"
                                    value={card.paymentMethod || ""}
                                    onChange={(e) => {
                                                const value = e.target.value;
                                                // Update select
                                                handlePaymentItemsChange(
                                                card.id,
                                                "paymentMethod",
                                                value
                                                );

                                                // Reflect back to checkbox
                                                setPaymentMethods(
                                                value === "Generic" ? "Yes" : "No"
                                                );
                                            }}
                                    >
                                    {paymentOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                        {option}
                                        </option>
                                    ))}
                                    </select>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Payment ID</label>
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"
                                    value={card.paymentId}
                                    onChange={(e)=>handlePaymentItemsChange(card.id, "paymentId", e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Status</label>
                                    {/* Select dropdown */}
                                    <select
                                    className="form-select form-select-sm rounded-0"
                                    value={card.status || ""}
                                    onChange={(e) =>
                                        handlePaymentItemsChange(card.id, "status", e.target.value)
                                    }
                                    >
                                    {statusOptions.map((option, index) => (
                                        <option key={index} value={option}>
                                        {option}
                                        </option>
                                    ))}
                                    </select>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Memo</label>
                                <input type="text" className="form-control mb-3 rounded-0"
                                    value={card.memo}
                                    onChange={(e)=>handlePaymentItemsChange(card.id, "memo", e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Payment</button>
                </div>
            </div>          
        ))}
      </div>      
    </div>
  )
}

export default Payments
