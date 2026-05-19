import React, {useState} from 'react'
import RadioButtons from './Common/RadioButtons';

const options = ['Existing User', 'Create New Year'];
const Client = () => {
    const [type, setType] = useState('');
  return (
    <div className="container">
            <div className="row">
                <h5 className="mt-4" align="left"><b>Add New Client</b></h5>
            </div>

            <hr></hr>
            <div align="left">
                <label className='form-label text-muted'>To create a new client, choose either an existing WordPress user to associate with the client, or create a new user. For help see our support page about <a href="#">Clients</a></label>
            </div>


            <form>
              <div className="form-group row" align="left">
                <label htmlFor="taxName" className="col-sm-3 col-form-label">Add new client from:</label>
                <RadioButtons
                    selectedOption={type}
                    options={options} 
                    getSelectedItem={(selected)=>setType(selected)}
                    name={'client'}/>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Business/Client Name*</b></label>
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
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Email*</b></label>
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
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>UserName*</b></label>
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
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Passoword*</b></label>
                <div className="col-sm-9">
                    <button className="btn btn-outline-primary mt-2">Show password</button>
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



              <div className="form-group row mt-2" align="left">
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

export default Client
