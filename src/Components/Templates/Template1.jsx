import React from 'react'
import { useFormContext } from "../../context/FormContext";

const Template1 = () => {
  const { formData } = useFormContext();
    
  return (
    <div className='mt-4 container' 
    style={{
      margin: 0,
      border: "2px solid blue",
      minHeight: "100vh",
      boxSizing: "border-box"
    }}>
        <div className='row mt-4'>
            <div className='col-sm-3'>
                <div style={{ float: "left"}}>
                    <img src={formData.business.image} alt="Preview" width="200" />
                </div>
            </div>
            <div className='col-sm-6'></div>
            <div className='col-sm-3'>
                <div className='row' style={{backgroundColor: 'darkblue'}}>
                    <div style={{float:"right", textAlign: "right"}}>
                        <p style={{fontFamily: "arial", fontSize:"26px", color: "white", padding: "2px", fontWeight: "bold"}}>{formData.translate.invoiceLabel}</p>
                    </div>
                </div>
            </div>
        </div>
            
        <div className='row mt-2'>
            <div className='col-sm-3' style={{backgroundColor: 'darkblue', color: 'white', textAlign:'left'}}>
                Address
            </div>
            <div className='col-sm-9'></div>
        </div>
        </div>
  )
}

export default Template1
