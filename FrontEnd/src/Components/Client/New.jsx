import React, {useState} from 'react'

const New = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <form>
              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Business/Client Name*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
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
                        required
                        />
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Password*</b></label>
                <div className="col-sm-7">
                    <input 
                        type={showPassword ? "text" : "password"}  
                        className="form-control mb-2" 
                        placeholder="Enter password"
                        required
                        />
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-outline-primary" 
                    onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"}</button>
                </div>
              </div>




              <div className="form-group row mt-2" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Address</b></label>
                <div className="col-sm-9">
                    <textarea 
                      className="form-control" 
                      rows="2"
                      style={{fontSize: "14px"}}
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
                      ></textarea>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>First Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Last Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Website</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
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
