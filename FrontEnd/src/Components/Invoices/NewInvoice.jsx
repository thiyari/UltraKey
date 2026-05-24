import React, {useState, useEffect, useCallback} from 'react'
import LineItems from './LineItems';
import Payments from './Payments';
import Tabs from '../Common/Tabs/Tabs';
import axios from 'axios';
import PopupEditClientForm from '../Common/Popup/PopupEditClientForm';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const statusOptions = ['Draft','Sent', 'Viewed','Partial','Overdue','Paid','Canceled']
const currencyOptions = ['Select Currency','INR','USD']
const taxPriceOptions = ['Yes. I will enter prices inclusive of tax','No. I will enter prices exclusive of tax']

const NewInvoice = () => {
  
  const [lineItemCards, setLineItemCards] = useState([
    { id: Date.now(), 
      number: 1,
      qty: "",
      title: "",
      adjust: "",
      price: "",
      description: ""
    },
  ]);

  const [paymentCards, setPaymentCards] = useState([
    { 
      id: Date.now(), 
      number: 1, 
      date: "",
      amount: "",
      paymentMethod: "",
      paymentId: "",
      status: "",
      memo: ""
    
    },
  ]);


  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [clientIndex, setClientIndex] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [taxPriceIndex, setTaxPriceIndex] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState("No");
  const [currencySymbol, setCurrencySymbol] = useState("");
  const [tax, setTax] = useState("");
  const [defaultCurrencySymbol, setDefaultCurrencySymbol] = useState("");
  const [defaultTaxPercentage, setDefaultTaxPercentage] = useState("");
  const [taxable, setTaxable] = useState("No");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueDays, setDueDays] = useState("");
  const [clientOptions, setClientOptions] = useState([]);
  const [open, setOpen] = useState(false);

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
      qty: "",
      title: "",
      adjust: "",
      price: "",
      description: ""
    };

    setLineItemCards([...lineItemCards, newLineItemCard]);
  };

  // Add new Payment card
  const addPaymentCard = () => {
    const newPaymentCard = {
      id: Date.now(),
      number: paymentCards.length + 1,
      date: "",
      amount: "",
      paymentMethod: "",
      paymentId: "",
      status: "",
      memo: ""
    };

    setPaymentCards([...paymentCards, newPaymentCard]);
  };

    // Handle input change
  const handleLineItemsChange = (id, fieldName, value) => {
    setLineItemCards(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, [fieldName]: value }
          : item
      )
    );
  };


    // Handle input change
  const handlePaymentItemsChange = (id, fieldName, value) => {
    setPaymentCards(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, [fieldName]: value }
          : item
      )
    );
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

  const handleSelectedIndex = (index) => {
    setSelectedItemIndex(index);
  };

const future_date = (created_date, days) => {
    const date = new Date(created_date);
    date.setDate(date.getDate() + Number(days));
    return  date.toISOString().split('T')[0];
};

  const fetchSettings = useCallback(async () => {
    
  try {
      const response = await axios.get(`${apiUrl}/api/settings`);
      
      const general = response.data.data[0].general;
      const payments = response.data.data[0].payments;
      const tax = response.data.data[0].tax;
      const invoices = response.data.data[0].invoices;

      console.log("Settings Document exists");
      
      if(selectedItemIndex === 1){
      // Convert backend items into frontend card structure
      const formattedItems = general.lineItems.map((item, index) => ({
        id: Date.now() + index,
        number: index + 1,
        qty: item.qty || "",
        title: item.title || "",
        price: item.price || "",
        description: item.description || ""
      }));

        setLineItemCards(formattedItems);
      } else {
        setLineItemCards([
            { 
              id: Date.now(), 
              number: 1,
              qty: "",
              title: "",
              price: "",
              description: ""
            }]
        )
      }
      setDefaultCurrencySymbol(payments.currencySymbol);
      setDefaultTaxPercentage(tax.percentage)
      setTermsAndConditions(invoices.termsAndConditions);
      setPrefix(invoices.prefix);
      setSuffix(invoices.suffix);
      setInvoiceNumber(invoices.nextNumber);
      setDueDays(invoices.dueDate);

    } catch (error) {
      console.log("Settings Document not found");
    } 
    
    try{
      const response = await axios.get(`${apiUrl}/api/clients`);
      
      const usernames = response.data.data.map((item)=>item.username);

      console.log("Clients Document exists");
      setClientOptions(['Select Client', ...usernames]);
    } catch (error) {
      console.log("Clients Document not found")
    }


  },[selectedItemIndex]);


  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);


  useEffect(()=>{
    
    if (taxable === "Yes") {
    const index = taxPriceOptions.indexOf(
      "No. I will enter prices exclusive of tax"
    );
      setTaxPriceIndex(index);
      setTax(defaultTaxPercentage);
    } else {
    const index = taxPriceOptions.indexOf(
      "Yes. I will enter prices inclusive of tax"
    );
      setTaxPriceIndex(index);
      setTax("");      
    }

  },[taxable, defaultTaxPercentage])

useEffect(() => {
  const selectedOption = taxPriceOptions[taxPriceIndex];

  if (selectedOption === "No. I will enter prices exclusive of tax") {
    setTaxable("Yes");
  } else {
    setTaxable("No");
  }
}, [taxPriceIndex]);


useEffect(() => {

})


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
                          <Tabs content={description} onChangeHTML={(html) => setDescription(html)}/>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4">
                        <div className="card-header" align="left">
                          <strong>Line Items</strong>
                        </div>
                        <div className="card-body" align="left">
                            <LineItems
                            onSelectedIndexChange = {handleSelectedIndex} 
                            cards={lineItemCards} 
                            handleLineItemsChange={handleLineItemsChange}
                            deleteCard={deleteLineItemCard}
                            selectedTax={taxable}
                            onTaxable={(selected)=>setTaxable(selected)}/>
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
                          <Payments 
                          cards={paymentCards} 
                          handlePaymentItemsChange={handlePaymentItemsChange}
                          deleteCard={deletePaymentCard}/>
                          <a className='btn btn-outline-primary rounded-0' onClick={addPaymentCard}>Add Another Payment</a>
                        </div>
                    </div>
                    <div className="card text rounded-0 mt-4 mb-4">
                        <div className="card-header" align="left">
                          <strong>Terms and Conditions</strong>
                        </div>
                        <div className="card-body" align="left">
                            <Tabs content={termsAndConditions} onChangeHTML={(html) => setTermsAndConditions(html)}/>
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
                    <button
                      className='btn btn-outline-primary btn-sm rounded-1'
                      onClick={() => setOpen(true)}>
                      Edit Client
                    </button>
                    <PopupEditClientForm 
                    open={open} 
                    onClose={() => setOpen(false)} 
                    username={clientOptions[clientIndex]}
                    />
                  </div>
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
              <div className='row g-0 px-3'>
                <div className='col-sm-4'>
                  <label className='form-label small ms-4 my-1'><i>{prefix?`${prefix}-`:""}</i></label>
                </div>
                <div className='col-sm-4'>
                  <input type='text' className='form-control form-control-sm rounded-0'
                    value={invoiceNumber}
                    onChange={(e)=>setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className='col-sm-4'>
                  <label className='form-label small my-1'><i>{suffix?`-${suffix}`:""}</i></label>
                </div>
              </div>
              <label className='form-label small mt-3'><strong>Order Number</strong></label>
              <input type='text' className='form-control form-control-sm rounded-0'></input>
              <label className='form-label small mt-3'><strong>Created Date</strong></label>
              <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"
                value={createdDate}
                onChange={(e) => {
                  const value = e.target.value;
                  setCreatedDate(value);

                  if (value && dueDays) {
                    const calculatedDue = future_date(value, dueDays);
                    setDueDate(calculatedDue);
                  }
                }}
              />
              
              <label className='form-label small mt-3'><strong>Due Date</strong></label>
              <input type="date" className="form-control form-control-sm rounded-0" aria-label="date" aria-describedby="basic-addon1"
                  value={dueDate}
                  onChange={(e)=> setDueDate(e.target.value)}
              />
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
                        onChange={(e) => {
     
                             const selectedIndex = currencyOptions.indexOf(e.target.value);
                                  setCurrencyIndex(selectedIndex);
                                  // update input value based on selected option
                                  if (e.target.value === 'INR') {
                                    setCurrencySymbol(defaultCurrencySymbol);
                                  } else if (e.target.value === 'USD') {
                                    setCurrencySymbol("$")
                                  } else {
                                    setCurrencySymbol("")
                                  }                       
                      }}
                      >
                      {currencyOptions.map((option, index) => (
                      <option key={index} value={option}>
                          {option}
                      </option>
                      ))}
                      </select>
                  </div>
                    <label className='form-label small mt-3'><strong>Currency Symbol</strong></label>
                    <input type='text' className='form-control form-control-sm rounded-0' placeholder=''
                      value={currencySymbol}
                      onChange={(e)=>setCurrencySymbol(e.target.value)}
                    />
                    <label className='form-label small mt-3'><strong>Payment Methods</strong></label>
                    <div className="form-check">
                      <input className="form-check-input" 
                          type="checkbox" 
                          checked={paymentMethods === "Yes"}
                          onChange={(e) => {
                                  const checked = e.target.checked;
                                  // Update level 1
                                  setPaymentMethods(checked ? "Yes" : "No")

                                  // Update level 2 select values
                                  setPaymentCards((prev) =>
                                    prev.map((card) => ({
                                      ...card,
                                      paymentMethod: checked ? "Generic" : ""
                                    }))
                                  );
                          }}
                        
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
                          onChange={(e) => {
                             const selectedIndex = taxPriceOptions.indexOf(e.target.value);
                                  setTaxPriceIndex(selectedIndex);
                                  // update input value based on selected option
                                  if (e.target.value === 'No. I will enter prices exclusive of tax') {
                                    setTax(defaultTaxPercentage);
                                  } else {
                                    setTax("")
                                  }
                          }}
                        >
                        {taxPriceOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                        </select>
                    </div>
                    <label className='form-label mt-3 small'><strong>Tax Rate (%)</strong></label>
                    <input className='form-control form-control-sm rounded-0' placeholder='0'
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                    />
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
