import React, {useState} from 'react'
import Dropdowns from './Common/Dropdowns';
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/useFormContext";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const Payments = () => {


  const navigate = useNavigate();
  const { saveFormData, formData } = useFormContext();
  const { formSubmitHandler } = useFormContext();

  const [data, setData] = useState({
      currencySymbol: formData.payments.currencySymbol || "",
      currencyPosition: formData.payments.currencyPosition || "",
      thousandSeperator: formData.payments.thousandSeperator || "",
      decimalSeperator: formData.payments.decimalSeperator || "",
      numberOfDecimals: formData.payments.numberOfDecimals || "",
      paymentPage: formData.payments.paymentPage || "",
      paymentPageFooter: formData.payments.paymentPageFooter || "",
      bank: formData.payments.bank || "",
      genericPayment: formData.payments.genericPayment || "",
      discount: formData.payments.discount || "",
      paid: formData.payments.paid || ""
    });

  const currencyOptions = [
    { value: '', label: 'select currency position'},
    { value: 'left', label: 'Left ($100.00)'},
    { value: 'right', label: 'Right (100.00 €)'},
    { value: 'Option3', label: 'Option3'}
  ];

  const paymentOptions = [
    { value: '', label: 'select payment page'},
    { value: 'Payment', label: 'Payment'},
    { value: 'Option2', label: 'Option2'},
    { value: 'Option3', label: 'Option3'}
  ];

  async function submitHandler(event) {
        event.preventDefault();
  
        const updatedFormData = {
            ...formData,
            payments: data,
          };
        saveFormData("payments", data);
        await formSubmitHandler(updatedFormData);        
        navigate("/tax");
  }



  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Payment Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you find all the payment related settings.</p>
            </div>

            <form onSubmit={submitHandler}>
              <div className="form-group row mt-4" align="left">
                <label htmlFor="currencySymbol" className="col-sm-3 col-form-label"><b>Currency Symbol</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.currencySymbol}
                        onChange={(e)=>{setData({...data, currencySymbol: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="currencyPosition" className="col-sm-3 col-form-label"><b>Currency Position</b></label>
                <div className="col-sm-4">
                    <Dropdowns options={currencyOptions} getOption={(option) => setData({...data,currencyPosition: option})}/>
                </div>
                <div className="col-sm-5"></div>
              </div>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="thousandSeperator" className="col-sm-3 col-form-label"><b>Thousand Seperator</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.thousandSeperator}
                        onChange={(e)=>{setData({...data, thousandSeperator: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="decimalSeperator" className="col-sm-3 col-form-label"><b>Decimal Seperator</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.decimalSeperator}
                        onChange={(e)=>{setData({...data, decimalSeperator: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="numberOfDecimals" className="col-sm-3 col-form-label"><b>Number of Decimals</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.numberOfDecimals}
                        onChange={(e)=>{setData({...data, numberOfDecimals: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="currencyPosition" className="col-sm-3 col-form-label"><b>Payment Page</b></label>
                <div className="col-sm-4">
                    <Dropdowns options={paymentOptions} getOption={(option) => setData({...data, paymentPage: option})}/>
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Choose a page to use for PayPal and other <a href="#">available payment gateway</a> messages and other confirmations.<br></br>A blank page named Payment would be perfect.</i></label>
                </div> 
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="paymentPageFooter" className="col-sm-3 col-form-label"><b>Payment Page Footer</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      rows="4"
                      value={data.paymentPageFooter}
                      onChange={(e)=>{setData({...data, paymentPageFooter: e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>The footer will be displayed at the bottom of the payment page. Basic HTML is allowed.
                    <br></br>Use this to provide additional payment instructions, if desired.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>

              <hr></hr>

              <div className="row">
                  <h5 align="left"><b>Payment Methods</b></h5>
              </div>

              <div className="form-group row mt-2" align="left">
                <div className='col-sm-3'>
                <label htmlFor="bank"><b>Bank</b></label>
                <br></br>
                <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Displayed on the invoice.</i></label>
              </div>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      rows="4"
                      value={data.bank}
                      onChange={(e)=>{setData({...data, bank: e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Add your bank account details if you wish to allow direct bank deposits. HTML is allowed.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>



              <div className="form-group row mt-2" align="left">
                <div className='col-sm-3'>
                <label htmlFor="genericPayment"><b>Generic Payment</b></label>
                <br></br>
                <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Displayed on the invoice.</i></label>
              </div>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      rows="4"
                      value={data.genericPayment}
                      onChange={(e)=>{setData({...data,genericPayment:e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Set a generic message or include further instructions for the user on how to pay. HTML is allowed.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


            <div className="row bg-light border" align="left">
                <p className="m-2">
                PayPal Gateway</p>
            </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="paid" className="col-sm-3 col-form-label"><b>Paid</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder="Paid"
                        value={data.paid}
                        onChange={(e)=>{setData({...data, paid: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="discount" className="col-sm-3 col-form-label"><b>Discount</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Discount'
                        value={data.discount}
                        onChange={(e)=>{setData({...data, discount: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-primary">Save</button>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-3"></div>
              </div>


            </form>
    </div>
  )
}

export default Payments
