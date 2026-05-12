import React, {useState} from 'react'
import { useFormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const Translate = () => {

    const navigate = useNavigate();
    const { saveFormData, formData } = useFormContext();
  
    const [data, setData] = useState({
      quoteLabel: formData.translate.quoteLabel || "",
      qutoeLabelPlural: formData.translate.qutoeLabelPlural || "",
      invoiceLabel: formData.translate.invoiceLabel || "",
      invoiceLabelPlural: formData.translate.invoiceLabelPlural || "",
      hrsQty: formData.translate.hrsQty || "",
      service: formData.translate.service || "",
      ratePrice: formData.translate.ratePrice || "",
      adjust: formData.translate.adjust || "",
      subTotal: formData.translate.subTotal || "",
      discount: formData.translate.discount || "",
      total: formData.translate.total || "",
      totalDue: formData.translate.totalDue || "",
      paid: formData.translate.paid || ""
    });

  async function submitHandler(event) {
        event.preventDefault();
          saveFormData("translate", data);
          navigate("/template1");
  }

  return (
    <div className="container">
            <div className="row">
                <h5 className="mt-4" align="left"><b>Translate Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2" style={{fontSize:"14px"}}><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you can translate strings into your own language, or simply change the text to suit your needs.
                <br></br>(PRO) the <a href="#">Easy Translate Extension</a> adds many more fields here, allowing you to translate every piece of text your client sees on your quotes and invoices.</p>
            </div>


            <form onSubmit={submitHandler}>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="quoteLabel" className="col-sm-3 col-form-label"><b>Quote Label</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Quote'
                        value={data.quoteLabel}
                        onChange={(e)=>{setData({...data, quoteLabel: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>You can change this from Quote to Estimate or Proposal (or any other word you like).</i></label>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="quoteLabelPlural" className="col-sm-3 col-form-label"><b>Quote Label Plural</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Quotes'
                        value={data.qutoeLabelPlural}
                        onChange={(e)=>{setData({...data, qutoeLabelPlural: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The plural of the above</i></label>
                </div>
              </div>





              <div className="form-group row mt-4" align="left">
                <label htmlFor="invoiceLabel" className="col-sm-3 col-form-label"><b>Invoice Label</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Invoice'
                        value={data.invoiceLabel}
                        onChange={(e)=>{setData({...data, invoiceLabel: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>You can change this from Invoice to Tax Invoice (or any other word you like).</i></label>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="invoiceLabelPlural" className="col-sm-3 col-form-label"><b>Invoice Label Plural</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Invoices'
                        value={data.invoiceLabelPlural}
                        onChange={(e)=>{setData({...data, invoiceLabelPlural: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The plural of the above</i></label>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="hrsQty" className="col-sm-3 col-form-label"><b>Hrs/Qty</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Hrs/Qty'
                        value={data.hrsQty}
                        onChange={(e)=>{setData({...data, hrsQty: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="service" className="col-sm-3 col-form-label"><b>Service</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Service'
                        value={data.service}
                        onChange={(e)=>{setData({...data, service: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="ratePrice" className="col-sm-3 col-form-label"><b>Rate/Price</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Rate/Price'
                        value={data.ratePrice}
                        onChange={(e)=>{setData({...data, ratePrice: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="adjust" className="col-sm-3 col-form-label"><b>Adjust</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Adjust'
                        value={data.adjust}
                        onChange={(e)=>{setData({...data, adjust: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="subTotal" className="col-sm-3 col-form-label"><b>Sub Total</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Sub Total'
                        value={data.subTotal}
                        onChange={(e)=>{setData({...data, subTotal: e.target.value})}}
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
                <label htmlFor="total" className="col-sm-3 col-form-label"><b>Total</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder='Total'
                        value={data.total}
                        onChange={(e)=>{setData({...data, total: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="totalDue" className="col-sm-3 col-form-label"><b>Total Due</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder="Total Due"
                        value={data.totalDue}
                        onChange={(e)=>{setData({...data, totalDue: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
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

export default Translate
