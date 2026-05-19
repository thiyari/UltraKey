import React, {useState} from 'react'
import RadioButtons from '../Common/RadioButtons';
import New from './New';
import Existing from './Existing';

const options = ['Existing User', 'Create New User'];
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


              <div className="form-group row" align="left">
                <label htmlFor="taxName" className="col-sm-3 col-form-label">Add new client from:</label>
                <RadioButtons
                    selectedOption={type}
                    options={options} 
                    getSelectedItem={(selected)=>setType(selected)}
                    name={'client'}/>
              </div>
              {(type === "Create New User") && <New/>}
              {(type === "Existing User") && <Existing/>}
    </div>
  )
}

export default Client
