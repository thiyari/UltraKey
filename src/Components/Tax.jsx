import React, {useState} from 'react'
import RadioButtons from './Common/RadioButtons';
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

const Tax = () => {
    const navigate = useNavigate();
    const { saveFormData, formData } = useFormContext();
  
    const [data, setData] = useState({
      price: formData.tax.price || "",
      percentage: formData.tax.percentage || "",
      name: formData.tax.name || "",
    });
  const options = ['Yes. I will enter prices inclusive of tax', 'No. I will enter prices exclusive of tax'];
  
  async function submitHandler(event) {
        event.preventDefault();
          saveFormData("tax", data);
          navigate("/translate");
  }

  return (
    <div className="container">
            <div className="row">
                <h5 className="mt-4" align="left"><b>Tax Settings</b></h5>
            </div>


            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you find all Tax-related settings.</p>
            </div>


            <form onSubmit={submitHandler}>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxName" className="col-sm-3 col-form-label"><b>Prices entered with tax</b></label>
                <div className="col-sm-4">
                  <RadioButtons
                    getSelectedItem={(item)=>{setData({...data, price: item})}}
                    options={options} 
                    name={'taxPrice'}/>
                </div>
                <div className="col-sm-5"></div>
              </div>

              {/* <p>Selected option: {data.price}</p> */}

              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxPercentage" className="col-sm-3 col-form-label"><b>Tax Percentage</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.percentage}
                        onChange={(e)=>{setData({...data, percentage: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Default tax percentage. Set to 0 or leave blank for no tax.</i></label>
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="taxName" className="col-sm-3 col-form-label"><b>Tax Name</b></label>
                <div className="col-sm-4">
                    <input 
                        type="text"  
                        className="form-control mb-2" 
                        value={data.name}
                        onChange={(e)=>{setData({...data, name: e.target.value})}}
                        />
                </div>
                <div className="col-sm-5"></div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The name of the tax for your country/region. GST, VAT, Tax etc</i></label>
                </div>
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

export default Tax
