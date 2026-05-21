import React, {useState} from 'react'
import Dropdowns from '../Common/Dropdowns';

const Payments = ({cards, deleteCard}) => {
const [selectedPayments, setSelectedPayments] = "";
const [selectedStatus, setSelectedStatus] = "";
const paymentOptions = ['select method','generic','others']
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
                    <div className='row mb-4'>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Date</label>
                                <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Amount (₹)</label>
                                <input type="text" className="form-control form-control-sm rounded-0"/>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Payment Method</label>
                                    {/* Select dropdown */}
                                    <select className="form-select form-select-sm rounded-0"
                                        value={selectedPayments}
                                        onChange={(e) =>
                                        setSelectedPayments(e.target.value)
                                        }
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
                                <input type="text" placeholder='0' className="form-control form-control-sm rounded-0"/>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group' align='left'>
                                <label className="form-label small">Status</label>
                                    {/* Select dropdown */}
                                    <select className="form-select form-select-sm rounded-0"
                                        value={selectedStatus}
                                        onChange={(e) =>
                                        setSelectedStatus(e.target.value)
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

                    <button className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Item</button>
                </div>
            </div>          
        ))}
      </div>      
    </div>
  )
}

export default Payments
