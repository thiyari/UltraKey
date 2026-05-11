import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

function Business() {

  const navigate = useNavigate();
  const { saveFormData, formData } = useFormContext();

  const [data, setData] = useState({
    image: formData.business.image || "",
    name: formData.business.name || "",
    address: formData.business.address || "",
    info: formData.business.info || "",
    website: formData.business.website || ""
  });


  async function submitHandler(event) {
        event.preventDefault();
          saveFormData("business", data);
          navigate("/invoices");
  }
  


  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Business Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; All of the Business details will be displayed on the Quotes & invoices.</p>
            </div>

            <form onSubmit={submitHandler}>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="logo" className="col-sm-3 col-form-label"><b>Logo</b></label>
                <div className="col-sm-7">
                  <div className='row'>
                    <div className='col-sm-7'>
                      <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder="https://ultrakey.com/wp-content/uploads/2024"
                        value={data.image}
                        onChange={(e)=>{setData({...data,image:e.target.value})}}
                        style={{fontSize:"14px"}}
                        />
                    </div>
                    <div className='col-sm-5'>
                          <div>
                              <label htmlFor="fileInput" className="btn btn-outline-primary"> Add or Upload File </label>
                              <input className="d-none" type="file" accept="image/*" id="fileInput" 
                              onChange={(e)=>{
                                setData(
                                    {...data,
                                      image:URL.createObjectURL(e.target.files[0])
                                    })
                                  }} />
                          </div>
                    </div>
                            {/* 2. Conditionally render the image if a URL exists */}
                          {data.image && (
                            <div style={{ marginTop: '10px' }}>
                              <img 
                                src={data.image} 
                                alt="Preview from URL" 
                                height="100"
                                width="350"
                                // Handle broken links
                                onError={(e) => { e.target.style.display = 'none'; alert('Invalid image URL'); }}
                              />
                            </div>
                          )}
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Logo of your business, if no logo is added, the name of your business will be used instead.</i></label>
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="businessName" className="col-sm-3 col-form-label"><b>Business Name</b></label>
                <div className="col-sm-5">
                  <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.name}
                        onChange={(e)=>{
                          setData({...data,name:e.target.value})
                        }}
                        />
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="address" className="col-sm-3 col-form-label"><b>Address</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      placeholder=""
                      rows="4"
                      value={data.address}
                      onChange={(e)=>{
                          setData({...data,address:e.target.value})
                        }}
                      ></textarea>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Add your full address and format it anyway you like. Basic HTML is allowed.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="extraBusinessInfo" className="col-sm-3 col-form-label"><b>Extra Business Info</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      value={data.info}
                      onChange={(e)=>{
                          setData({...data,info:e.target.value})
                        }}
                      rows="4"
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Extra business info such as Business number, phone number or email address  and format is anyway you like. Basic HTML is allowed. You can add your VAT number or ABN here.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="website" className="col-sm-3 col-form-label"><b>Website</b></label>
                <div className="col-sm-5">
                  <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.website}
                        onChange={(e)=>{
                          setData({...data,website:e.target.value})
                        }}
                        />
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row mt-2" align="left">
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

export default Business
