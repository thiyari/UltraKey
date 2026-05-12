import React, {useState} from 'react'
import Templates from './Common/Templates';
import CheckBoxes from './Common/CheckBoxes';
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

const Invoices = () => {

    const navigate = useNavigate();
    const { saveFormData, formData } = useFormContext();
  
    const [data, setData] = useState({
      prefix: formData.invoices.prefix || "",
      suffix: formData.invoices.suffix || "",
      autoIncrement: formData.invoices.autoIncrement || "",
      nextNumber: formData.invoices.nextNumber || "",
      dueDate: formData.invoices.dueDate || "",
      hideAdjustField: formData.invoices.hideAdjustField || "",
      termsAndConditions: formData.invoices.termsAndConditions || "",
      footer: formData.invoices.footer || "",
      notices: formData.invoices.notices || "",
      template: formData.invoices.template || "",
      customCSS: formData.invoices.customCSS || "",
      toAddress: formData.invoices.toAddress || ""
    });

    const items = ["Invoice Viewed","Invoice Paid"];

  async function submitHandler(event) {
        event.preventDefault();
          saveFormData("invoices", data);
          navigate("/payments");
  }


  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Invoice Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you find all the settings for Invoices.</p>
            </div>

            <form onSubmit={submitHandler}>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="prefix" className="col-sm-3 col-form-label"><b>Prefix</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.prefix}
                        onChange={(e)=>{setData({...data, prefix: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Prefix before each Invoice number. Can be left blank if you don't need a prefix.</i></label>
                </div>
              </div>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="suffix" className="col-sm-3 col-form-label"><b>Suffix</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.suffix}
                        onChange={(e)=>{setData({...data, suffix: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Suffix before each Invoice number. Can be left blank if you don't need a suffix.</i></label>
                </div>                
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="autoIncrement" className="col-sm-3 col-form-label"><b>Auto Increment</b></label>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input className="form-check-input" 
                        type="checkbox" 
                        checked={data.autoIncrement.includes("Yes")}
                        onChange={(e) => {(e.target.checked) && setData({...data, autoIncrement: "Yes"})}}
                        id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. Increment Invoice numbers by one. Recommended.
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
                        value={data.nextNumber}
                        onChange={(e)=>{setData({...data, nextNumber: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The next number to use for auto incrementing. Can use leading zeros.</i></label>
                </div>                
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="dueDate" className="col-sm-3 col-form-label"><b>Due date</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.dueDate}
                        onChange={(e)=>{setData({...data, dueDate: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Number of days each Invoice is due after the created date. This will automatically set the date in the 'Due Date' field. <br></br>Can be overriden on individual Invoices.</i></label>
                </div>  
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="hideAdjustField" className="col-sm-3 col-form-label"><b>Hide Adjust Field</b></label>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input className="form-check-input" 
                    type="checkbox" 
                    checked={data.hideAdjustField.includes("Yes")}
                    onChange={(e) => {(e.target.checked) && setData({...data, hideAdjustField: "Yes"})}} 
                    id="flexCheckDefault"/>
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
                      rows="4"
                      value={data.termsAndConditions}
                      onChange={(e)=>{setData({...data, termsAndConditions: e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Terms and conditions displayed on the Invoice.<br></br> Can be overriden on individual Invoices.</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="footer" className="col-sm-3 col-form-label"><b>Footer</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      rows="4"
                      value={data.footer}
                      onChange={(e)=>{setData({...data, footer: e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>The footer will be displayed at the bottom of each Invoice. Basic HTML is allowed.</i></label>
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
                <label htmlFor="showMeNoticesWhen" className="col-sm-3 col-form-label"><b>Show me notices when</b></label>
                <div className="col-sm-6">
                    <CheckBoxes 
                        getCheckedItems={(list)=>{setData({...data, notices: JSON.stringify(list)})}} 
                        items={items}
                      />
                </div>
                <div className="col-sm-3"></div>
                {/* <p>Selected: {data.notices.join(", ")}</p> */}
              </div>              


              <hr></hr>

              <div className="row">
                  <h5 align="left"><b>Template Design</b></h5>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}} align="left">
                    <i>For information on customizing your templates, please see our guide <a href='#'>here</a></i>
                    </label>
              </div>



              <div className="form-group row mt-2" align="left">
                <label htmlFor="template" className="col-sm-3 col-form-label"><b>Template</b></label>
                <div className="col-sm-9">
                  <Templates getTemplateId={(selectedOption)=>{setData({...data, template: selectedOption})}}/>
                </div>
              </div>
              
              {/*
              <div className="mt-4">
                Selected ID: {data.template || 'None'}
              </div> */}

              <div className="form-group row mt-4" align="left">
                <label htmlFor="customCSS" className="col-sm-3 col-form-label"><b>Custom CSS</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      rows="4"
                      value={data.customCSS}
                      onChange={(e)=>{setData({...data, customCSS: e.target.value})}}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}><i>Add custom CSS to your Invoices</i></label>
                </div>
                <div className="col-sm-3"></div>
              </div>




              <div className="form-group row mt-2" align="left">
                <label htmlFor="toAddress" className="col-sm-3 col-form-label"><b>To Address</b></label>
                <div className="col-sm-6">
                  <textarea 
                      className="form-control" 
                      placeholder=""
                      rows="4"
                      value={data.toAddress}
                      onChange={(e)=>{
                          setData({...data,toAddress:e.target.value})
                        }}
                      ></textarea>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Add your full address and format it anyway you like. Basic HTML is allowed.</i></label>
                </div>
                <div className="col-sm-3"></div>
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

export default Invoices
