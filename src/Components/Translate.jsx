import React from 'react'

const Translate = () => {
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


            <form>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="quoteLabel" className="col-sm-3 col-form-label"><b>Quote Label</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder="Quote"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Quotes"
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>THe plural of the above</i></label>
                </div>
              </div>





              <div className="form-group row mt-4" align="left">
                <label htmlFor="invoiceLabel" className="col-sm-3 col-form-label"><b>Invoice Label</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder="Invoice"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Invoices"
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>THe plural of the above</i></label>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="hrsQty" className="col-sm-3 col-form-label"><b>Hrs/Qty</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder="Hrs/Qty"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Service"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Rate/Price"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Adjust"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Sub Total"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Discount"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Total"
                        name=""
                        value=""
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
                        id="" 
                        placeholder="Total Due"
                        name=""
                        value=""
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
