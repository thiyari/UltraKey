import React, {useState} from 'react'
import LineItems from './LineItems';
import Payments from './Payments';
import RichTextEditor from '../Common/Editor/RichTextEditor';
import EditorPreview from '../Common/Editor/EditorPreview';

const clientOptions = ['Choose Client','client1','client2']
const statusOptions = ['Draft','Published']
const currencyOptions = ['Default Currency','USD','INR']
const taxPriceOptions = ['Yes. I will enter prices inclusive of tax','No. I will enter prices exclusive of tax']

const NewInvoice = () => {
  
  const [activeTab, setActiveTab] = useState("editor");
  const [lineItemCards, setLineItemCards] = useState([
    { id: 1, number: 1 },
  ]);
  const [paymentCards, setPaymentCards] = useState([
    { id: 1, number: 1 },
  ]);

  const [description, setDescription] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [clientIndex, setClientIndex] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [taxPriceIndex, setTaxPriceIndex] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState("No");

{/*
  const htmlToText = (html) => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  } */}

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
    <div className='container-fluid'>
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
                          {/* Tabs section starts */}
                            <div className="card text-center">
                              <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "editor" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("editor")}
                                    >
                                      Visual
                                    </button>
                                  </li>

                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "preview" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("preview")}
                                    >
                                      Code
                                    </button>
                                  </li>
                                </ul>
                              </div>

                              <div className="card-body">
                                {activeTab === "editor" && (
                                  <RichTextEditor
                                    value={description}
                                    onChangeHTML={(html) => setDescription(html)}
                                  />
                                )}

                                {activeTab === "preview" && (
                                  <EditorPreview content={description} />
                                )}
                              </div>
                            </div>
                             {/* Tabs section ends */}
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Line Items</strong>
                        </div>
                        <div className="card-body" align="left">
                            <LineItems cards={lineItemCards} deleteCard={deleteLineItemCard}/>
                            <div className="row">
                              <div className="col-sm-6" align="left">
                                <a className='btn btn-outline-primary rounded-0' onClick={addLineItemCard}>Add Another Item</a>
                              </div>
                              <div className="col-sm-6" align="right">
                                  <div className="card rounded-0">
                                      <div className="card-header bg-transparent text-end">
                                        <label className='form-label small'><b>Invoice Totals</b></label>
                                      </div>
                                      <div className="card-body">
                                        <div className='row'>
                                          <div className="col-sm-6 text-start">
                                              <label className='form-label small'>Sub Total</label><br></br>
                                              <label className='form-label small'>GST (18%)</label><br></br>
                                              <label className='form-label small'>Discount<a href='#'> edit</a></label><br></br>
                                              <label className='form-label small'>Paid <a href='#'>edit</a></label><br></br>
                                          </div>
                                          <div className="col-sm-6 text-end">
                                              <label className='form-label small'>₹0.00</label><br></br>
                                              <label className='form-label small'>₹0.00</label><br></br>
                                              <label className='form-label text-danger small'>-₹0.00</label><br></br>
                                              <label className='form-label text-danger small'>-₹0.00</label><br></br>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6 text-start">
                                                <label className='form-label small'><strong>Total Due</strong></label>
                                            </div>
                                            <div className="col-sm-6 text-end">
                                                <label className='form-label small'><strong>₹0.00</strong></label>
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Payments</strong>
                        </div>
                        <div className="card-body" align="left">
                          <Payments cards={paymentCards} deleteCard={deletePaymentCard}/>
                          <a className='btn btn-outline-primary rounded-0' onClick={addPaymentCard}>Add Another Payment</a>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4 mb-4">
                        <div className="card-header" align="left">
                          <strong>Terms and Conditions</strong>
                        </div>
                        <div className="card-body" align="left">
                          {/* Tabs section starts */}
                            <div className="card text-center">
                              <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "editor" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("editor")}
                                    >
                                      Visual
                                    </button>
                                  </li>

                                  <li className="nav-item">
                                    <button
                                      className={`nav-link ${
                                        activeTab === "preview" ? "active" : ""
                                      }`}
                                      onClick={() => setActiveTab("preview")}
                                    >
                                      Code
                                    </button>
                                  </li>
                                </ul>
                              </div>

                              <div className="card-body">
                                {activeTab === "editor" && (
                                  <RichTextEditor
                                    value={termsAndConditions}
                                    onChangeHTML={(html) => setTermsAndConditions(html)}
                                  />
                                )}

                                {activeTab === "preview" && (
                                  <EditorPreview content={termsAndConditions} />
                                )}
                              </div>
                            </div>
                             {/* Tabs section ends */} 
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
              <div className='row'>
                <label className='form-label small'><strong>Client</strong></label>
                <div className='col-sm-5'>
                <button className='btn btn-outline-primary btn-sm rounded-1'>
                  Edit Client</button></div>
                   <div className='col-sm-7'>
                <button className='btn btn-outline-primary btn-sm rounded-1'>
                 Add New Client</button></div>
              </div>
              <div>
                  {/* Select dropdown */}
                  <select className="form-select form-select-sm rounded-0 my-3"
                    value={clientOptions[clientIndex]}
                    onChange={(e) =>
                    setClientIndex(clientOptions.indexOf(e.target.value))
                  }
                  >
                  {clientOptions.map((option, index) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
                  ))}
                  </select>
              </div>
              <label className='form-label small'><strong>Status</strong></label>
              <div>
                  {/* Select dropdown */}
                  <select className="form-select form-select-sm rounded-0"
                    value={statusOptions[statusIndex]}
                    onChange={(e) =>
                    setStatusIndex(statusOptions.indexOf(e.target.value))
                  }
                  >
                  {statusOptions.map((option, index) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
                  ))}
                  </select>
              </div>
              <label className='form-label small mt-3'><strong>Invoice Number</strong></label>
              <div className='row'>
                <div className='col-sm-3'>
                  <label className='ps-3'><i>AKEYI-</i></label>
                </div>
                <div className='col-sm-7'>
                  <input type='text' className='form-control form-control-sm rounded-0'/>
                </div>
                <div className='col-sm-2'></div>
              </div>
              <label className='form-label small mt-3'><strong>Order Number</strong></label>
              <input type='text' className='form-control form-control-sm rounded-0'></input>
              <label className='form-label small mt-3'><strong>Created Date</strong></label>
              <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"/>
              <label className='form-label small mt-3'><strong>Due Date</strong></label>
              <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"/>
              {/* sub parts*/}
                <div className="card mt-4 text rounded-0">
                  <div className="card-header" align="left">
                    <strong>Payment Settings</strong>
                  </div>
                  <div className="card-body" align="left">
                    <label className='form-label small'><strong>Currency</strong></label>
                    <div>
                      {/* Select dropdown */}
                      <select className="form-select form-select-sm rounded-0"
                        value={currencyOptions[currencyIndex]}
                        onChange={(e) =>
                        setCurrencyIndex(currencyOptions.indexOf(e.target.value))
                      }
                      >
                      {currencyOptions.map((option, index) => (
                      <option key={index} value={option}>
                          {option}
                      </option>
                      ))}
                      </select>
                  </div>
                    <label className='form-label small mt-3'><strong>Currency Symbol</strong></label>
                    <input type='text' className='form-control form-control-sm rounded-0' placeholder='₹'/>
                    <label className='form-label small mt-3'><strong>Payment Methods</strong></label>
                    <div className="form-check">
                      <input className="form-check-input" 
                          type="checkbox" 
                          checked={paymentMethods === "Yes"}
                          onChange={(e) => e.target.checked? setPaymentMethods("Yes"): setPaymentMethods("No")}
                          id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexCheckDefault">Generic</label>
                    </div>
                  </div>
                </div>
                <div className="card mt-4 text rounded-0">
                  <div className="card-header" align="left">
                    <strong>Tax Settings</strong>
                  </div>
                  <div className="card-body" align="left">
                    <label className='form-label small'><strong>Prices entered with tax</strong></label>
                    <div>
                        {/* Select dropdown */}
                        <select className="form-select form-select-sm rounded-0"
                          value={taxPriceOptions[taxPriceIndex]}
                          onChange={(e) =>
                          setTaxPriceIndex(taxPriceOptions.indexOf(e.target.value))
                        }
                        >
                        {taxPriceOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                        </select>
                    </div>
                    <label className='form-label mt-3 small'><strong>Tax Rate (%)</strong></label>
                    <input className='form-control form-control-sm rounded-0' placeholder='18'></input>
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
