import React, {useState} from 'react'

function Business() {

  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(null);

  const handleUrlChange = (e) => {
    setPreview(null);
    setUrl(e.target.value);
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUrl('');
      // Generate a preview URL
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Business Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; All of the Business details will be displayed on the Quotes & invoices.</p>
            </div>

            <form>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="logo" className="col-sm-3 col-form-label"><b>Logo</b></label>
                <div className="col-sm-7">
                  <div className='row'>
                    <div className='col-sm-7'>
                      <input 
                        type="text"  
                        className="form-control mb-2" 
                        placeholder="https://ultrakey.com/wp-content/uploads/2024"
                        value={url}
                        onChange={handleUrlChange}
                        style={{fontSize:"14px"}}
                        />
                    </div>
                    <div className='col-sm-5'>
                          <div>
                              <label htmlFor="fileInput" className="btn btn-outline-primary"> Add or Upload File </label>
                              <input className="d-none" type="file" accept="image/*" id="fileInput" onChange={handleImageChange} />
                          </div>
                    </div>
                            {/* 2. Conditionally render the image if a URL exists */}
                          {url && (
                            <div style={{ marginTop: '10px' }}>
                              <img 
                                src={url} 
                                alt="Preview from URL" 
                                height="150"
                                width="200"
                                // Handle broken links
                                onError={(e) => { e.target.style.display = 'none'; alert('Invalid image URL'); }}
                              />
                            </div>
                          )}
                          {preview && (
                              <div style={{ marginTop: '10px' }}>
                                <img src={preview} alt="Preview" width="200" />
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
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="address" className="col-sm-3 col-form-label"><b>Address</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
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
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
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
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        onChange=""
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
