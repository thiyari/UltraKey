import React from 'react'
import { useFormContext } from "../../context/FormContext";

const Template1 = () => {

  const { formData } = useFormContext();
  
  const future_date = (days) => {
    // Today's date
    const today = new Date();
    // Add 14 days
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + days);

    return futureDate.toLocaleDateString('en-GB');
  }

  const invoice_number = (prefix, number, suffix) => {
    if (prefix != "" && suffix == "") {
        return <div>{prefix}-{number}</div>;
    } else if (suffix != "" && prefix == "") {
        return <div>{number}-{suffix}</div>;
    } else {
        return <div></div>
    }
  }

  return (
    <div className='mt-4 container' 
    style={{
      margin: 0,
      border: "2px solid darkblue",
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
        

            <div className='row mt-5'>
                <div className='col-sm-5' style={{padding: "10px 10px 10px 30px", backgroundColor: 'darkblue', color: 'white', textAlign:'left'}}>
                    <b>From:</b><br></br>
                    <p style={{fontFamily: "Calibri", marginRight: "125px"}}>
                        {formData.business.name}
                    </p>
                    <p style={{fontFamily: "Calibri", marginRight: "125px"}}>
                        {formData.business.address}
                    </p>
                    <p style={{fontFamily: "Calibri", marginRight: "125px"}}> 
                        {formData.business.info}
                    </p>
                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-5'>
                    <div className='row' style={{marginRight: "5px"}}>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>Invoice Number</p></div>
                            <div className='col-sm-5' style={{textAlign: "right"}}>
                                <p>{invoice_number(formData.invoices.prefix, formData.invoices.nextNumber, formData.invoices.suffix)}</p>   
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>Invoice Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{new Date().toLocaleDateString('en-GB')}</p></div>
                        </div>
                        <div className='row' >
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>Due Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{future_date(formData.invoices.dueDate)}</p></div>
                        </div>
                        <div className='row' style={{backgroundColor: "darkblue", padding: "10px"}}>
                            <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>TOTAL DUE</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{formData.translate.totalDue}</p></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row mt-5'>
                <div className='col-sm-5' style={{padding: "10px 10px 10px 30px", backgroundColor: 'darkblue', color: 'white', textAlign:'left'}}>
                    <b>To:</b><br></br>
                    <p style={{fontFamily: "Calibri", marginRight: "125px"}}>
                        {formData.business.address}
                    </p>
                    <p>{formData.business.info}</p>
                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-5'></div>
            </div>
        
        </div>
  )
}

export default Template1
