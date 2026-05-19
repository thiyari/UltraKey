import React, {useState} from 'react'
import Dropdowns from '../Common/Dropdowns';

  const userOptions = [
    { value: '', label: 'Choose client'},
  ];

const Existing = () => {
    const [existingUser, setExistingUser] = useState('');
  return (
    <div>
        <form>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="currencyPosition" className="col-sm-3 col-form-label"><b>Select Existing User*</b></label>
                <div className="col-sm-9">
                    <Dropdowns 
                        options={userOptions} 
                        selectedOption={existingUser}
                        getOption={(option) => setExistingUser(option)}
                      />
                </div>
              </div>
            
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

export default Existing
