import React, {useState} from 'react'


const items = ["Quote Viewed","Quote Accepted"];

const Quotes = () => {


  const [selected, setSelected] = useState("Convert Quote to Invoice and send to client");
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );


  const handleChangeSelect = (event) => {
    setSelected(event.target.value);
  };

  // Toggle single checkbox
  const handleCheckboxChange = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  // Select all / Unselect all
  const handleToggleAll = (e) => {
    e.preventDefault();
    const allSelected = checkedItems.every((item) => item);

    setCheckedItems(
      new Array(items.length).fill(!allSelected)
    );
  };


  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Quote Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you find all the settings for Quotes.</p>
            </div>

            <form>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="prefix" className="col-sm-3 col-form-label"><b>Prefix</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Prefix before each Quote number. Can be left blank if you don't need a prefix.</i></label>
                </div>
              </div>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="suffix" className="col-sm-3 col-form-label"><b>Suffix</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Suffix before each Quote number. Can be left blank if you don't need a suffix.</i></label>
                </div>                
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="autoIncrement" className="col-sm-3 col-form-label"><b>Auto Increment</b></label>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. Increment Quote numbers by one. Recommended.
                    </label>
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="nextNumber" className="col-sm-3 col-form-label"><b>Next Number</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The next number to use for auto incrementing. Can use leading zeros.</i></label>
                </div>                
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="qutoesValidFor" className="col-sm-3 col-form-label"><b>Quotes Valid For</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        id="" 
                        placeholder=""
                        name=""
                        value=""
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Number of days each Quote is valid for. This will automatically set the date in the 'Valid until' field. <br></br>Can be overriden on individual Quotes.</i></label>
                </div>  
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="hideAdjustField" className="col-sm-3 col-form-label"><b>Hide Adjust Field</b></label>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. Hide the adjust field on the line items, I won't need this field.
                    </label>
                  </div>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="termsAndConditions" className="col-sm-3 col-form-label"><b>Terms & Conditions</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Terms and conditions displayed on the Quote.<br></br> Can be overriden on individual.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="footer" className="col-sm-3 col-form-label"><b>Footer</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>The footer will be displayed at the bottom of each Quote. Basic HTML is allowed.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <hr></hr>

              <div className="row">
                  <h5 align="left"><b>Accepting Quotes</b></h5>
              </div>
           
              <div className="form-group row" align="left">
                <label htmlFor="acceptQuoteButton" className="col-sm-3 col-form-label"><b>Accept Quote Button</b></label>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. show the "Accept Quote" button on Quotes.
                    </label>
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row" align="left">
                <label htmlFor="acceptQuoteButton" className="col-sm-3 col-form-label"><b>Accept Quote Action</b></label>
                <div className="col-sm-5">
                    <div className="d-flex justify-content-center">
                      <select className="form-select" value={selected} onChange={handleChangeSelect}>
                        <option value="Convert Quote to Invoice and send to client">Convert Quote to Invoice and send to client</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                      </select>
                    </div>
                </div>
                <div className="col-sm-4"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Actions to perform automatically when client accepts to Quote.</i></label>
                </div>  
              </div>



              <div className="form-group row mt-2" align="left">
                <label htmlFor="acceptQuoteText" className="col-sm-3 col-form-label"><b>Accept Quote Text</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Text to add on the "Accept Quote" popup. Basic HTML is allowed.
                    <br></br>This should provide some indication to your client of what happens after accepting the Quote.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>



              <div className="form-group row mt-2" align="left">
                <label htmlFor="acceptQuoteMessage" className="col-sm-3 col-form-label"><b>Accept Quote Message</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Message to display if client accepts the Quote. Basic HTML is allowed.
                    <br></br>Leave blank for the default message.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>



              <div className="form-group row" align="left">
                <label htmlFor="declineReason" className="col-sm-3 col-form-label"><b>Decline Reason Required</b></label>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. Make the "Reason for declining" field required.
                    </label>
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>



              <div className="form-group row mt-2" align="left">
                <label htmlFor="declinedQuoteMessage" className="col-sm-3 col-form-label"><b>Declined Quote Message</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      id="" 
                      placeholder=""
                      name=""
                      rows="4"
                      onChange=""
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Message to display if client declines the Quote. Basic HTML is allowed.
                    <br></br>Leave blank for the default message.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>

              <hr></hr>

              <div className="row">
                  <h5 align="left"><b>Admin Notes</b></h5>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}} align="left">
                    <i>These settings allow you to choose which notices may be displayed in your WordPress Admin area. (Note this is different from admin emails, which you can configure on the <a href='/emails'>Emails Settings</a> tab)</i>
                    </label>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="declinedQuoteMessage" className="col-sm-3 col-form-label"><b>Show me notices when</b></label>
                <div className="col-sm-6">
                  <button 
                      className="btn btn-outline-primary mb-2"
                      onClick={handleToggleAll}
                      >{checkedItems.every((item) => item)? "Deselect All": "Select All"}</button>
                      {items.map((item, index) => (
                        <div className="form-check" key={index}>
                          <input className="form-check-input" 
                          type="checkbox"  
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                          id="flexCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                            {item}
                          </label>
                        </div>
                        ))}
                  

                </div>
                <div className="col-sm-3"></div>
              </div>              


              <hr></hr>

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

export default Quotes
