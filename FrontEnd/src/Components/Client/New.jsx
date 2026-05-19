import React, {useState} from 'react'
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const New = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [businessOrClientName, setBusinessOrClientName] = useState('');
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [website, setWebsite] = useState("");

    async function submitHandler(event) {
      event.preventDefault();

    try {
      await axios.post(
        `${apiUrl}/api/clients`,
          {
              businessOrClientName: businessOrClientName,
              email: email,
              username: username,
              password: password,
              address: address,
              extraInfo: extraInfo,
              firstname: firstname,
              lastname: lastname,
              website: website
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        alert(err);
      }
    setBusinessOrClientName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setAddress("");
    setExtraInfo("");
    setFirstname("");
    setLastname("");
    setWebsite("");
  }
     
  return (
    <div>
        <form onSubmit={submitHandler}>
              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Business/Client Name*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={businessOrClientName}
                        onChange={(e)=>setBusinessOrClientName(e.target.value)}
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
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        />
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Username*</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        />
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-outline-primary" 
                    onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide Password" : "Show Password"}</button>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Address</b></label>
                <div className="col-sm-9">
                    <textarea 
                      className="form-control" 
                      rows="2"
                      style={{fontSize: "14px"}}
                      value={address}
                      onChange={(e)=>setAddress(e.target.value)}
                      ></textarea>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Extra Info</b></label>
                <div className="col-sm-9">
                    <textarea 
                      className="form-control" 
                      rows="2"
                      style={{fontSize: "14px"}}
                      value={extraInfo}
                      onChange={(e)=>setExtraInfo(e.target.value)}
                      ></textarea>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>First Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={firstname}
                        onChange={(e)=>setFirstname(e.target.value)}
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Last Name</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={lastname}
                        onChange={(e)=>setLastname(e.target.value)}
                        />
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Website</b></label>
                <div className="col-sm-9">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={website}
                        onChange={(e)=>setWebsite(e.target.value)}
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
