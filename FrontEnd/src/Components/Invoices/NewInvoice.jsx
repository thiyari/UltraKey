import React from 'react'

const NewInvoice = () => {
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
                    <div class="card text rounded-0 mt-5">
                        <div class="card-header" align="left">
                          <strong>Description</strong>
                        </div>
                        <div class="card-body" align="left">
                        </div>
                    </div>
                    <div class="card text rounded-0 mt-4">
                        <div class="card-header" align="left">
                          <strong>Line Items</strong>
                        </div>
                        <div class="card-body" align="left">
                        </div>
                    </div>
                    <div class="card text rounded-0 mt-4">
                        <div class="card-header" align="left">
                          <strong>Payments</strong>
                        </div>
                        <div class="card-body" align="left">
                        </div>
                    </div>
                    <div class="card text rounded-0 mt-4">
                        <div class="card-header" align="left">
                          <strong>Terms and Conditions</strong>
                        </div>
                        <div class="card-body" align="left">
                        </div>
                    </div>
                </div>
        </div>
        </div>
        <div className='col-sm-3'>
          <div class="card text rounded-0">
            <div class="card-header" align="left">
              <strong>Publish</strong>
            </div>
            <div class="card-body" align="right">
              <a href="#" class="btn btn-primary rounded-0">Publish</a>
            </div>
          </div>
          <div class="card mt-4 text rounded-0">
            <div class="card-header" align="left">
              <strong>Invoice Details</strong>
            </div>
            <div class="card-body" align="left">
              {/* sub parts*/}
                <div class="card mt-4 text rounded-0">
                  <div class="card-header" align="left">
                    <strong>Payment Settings</strong>
                  </div>
                  <div class="card-body" align="left">
                  </div>
                </div>
                <div class="card mt-4 text rounded-0">
                  <div class="card-header" align="left">
                    <strong>Tax Settings</strong>
                  </div>
                  <div class="card-body" align="left">
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
