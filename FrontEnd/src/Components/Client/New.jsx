import React from 'react'

const New = () => {
  return (
    <div>
        <form>
              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Business/Client Name*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        required
                        />
                </div>
              </div>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Email*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        required
                        />
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>UserName*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        required
                        />
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Password*</b></label>
                <div className="col-sm-9">
                    <button className="btn btn-outline-primary mt-2">Show password</button>
                </div>
              </div>




              <div className="form-group row mt-2" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Address</b></label>
                <div className="col-sm-9">
                    <textarea 
                      className="form-control" 
                      rows="2"
                      style={{fontSize: "14px"}}
                      value=""
                      onChange=""
                      ></textarea>
                </div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Extra Info</b></label>
                <div className="col-sm-9">
                    <textarea 
                      className="form-control" 
                      rows="2"
                      style={{fontSize: "14px"}}
                      value=""
                      onChange=""
                      ></textarea>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>First Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Last Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Website</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value=""
                        onChange=""
                        />
                </div>
              </div>      


              <div className="form-group row mt-3" align="left">
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-primary">Add New Client</button>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-3"></div>
              </div>

        </form>

    </div>
  )
}

export default New
