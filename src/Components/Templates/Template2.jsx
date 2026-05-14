import React, {useState} from 'react'
import { useFormContext } from "../../context/FormContext";

const Template2 = () => {

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
          return <p>{prefix}-{number}</p>;
      } else if (suffix != "" && prefix == "") {
          return <p>{number}-{suffix}</p>;
      } else {
          return ""
      }
    }
  
    const grandTotal = () => {
      let subTotal = [];
      let grandTotal = 0;
      formData.general.lineItems.map((item, index) => {
          subTotal[index] = item.price * item.qty;
      })
      subTotal.map((item)=>{
          grandTotal += item 
      })
      return grandTotal;
    }
    
  const thousand_seperator = (num) => {
    return num.toString().replace(/(?<=\d)(?=(\d{2})+\d$)/g, formData.payments.thousandSeperator);
  }
  
  const decimals = () => {
      return "0".repeat(formData.payments.numberOfDecimals);
  }
  

  return (
    <div className='mt-1 container' 
    style={{
      margin: 0,
      border: "5px solid #236ca0",
      boxSizing: "border-box",
      fontSize: "16px"
    }}>
        <div className='row mt-4'>
            <div className='col-sm-3'>
                <div style={{ float: "left"}}>
                    <img src={formData.business.image} alt="Preview" height="100" width="350" />
                </div>
            </div>
            <div className='col-sm-5'></div>
            <div className='col-sm-4'>
                <div className='row' style={{backgroundColor: '#236ca0'}}>
                    <div style={{float:"right", textAlign: "right"}}>
                        <p style={{fontFamily: "arial", fontSize:"26px", color: "white", padding: "4px", fontWeight: "bold"}}>{formData.translate.invoiceLabel}</p>
                    </div>
                </div>
            </div>
        </div>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='row mt-4'>
                  <div className='col-sm-10' style={{padding: "10px 10px 10px 30px", backgroundColor: '#236ca0', color: 'white', textAlign:'left'}}>
                      <b>From:</b><br></br>
                      <p style={{fontFamily: "Calibri"}}>
                          {formData.business.name}
                      </p>               
                      <p style={{fontFamily: "Calibri"}} dangerouslySetInnerHTML={{__html: formData.business.address}}/>
                      <p style={{fontFamily: "Calibri"}} dangerouslySetInnerHTML={{__html: formData.business.info}} /> 
                  </div>   
                  <div className='col-sm-2'></div>
              </div>
              <div className='row mt-4'>
                  <div className='col-sm-10' style={{padding: "10px 10px 10px 30px", backgroundColor: '#236ca0', color: 'white', textAlign:'left'}}>
                      <b>To:</b><br></br>
                      <p style={{fontFamily: "Calibri"}}>
                          {formData.invoices.toAddress}
                      </p>
                  </div>
                  <div className='col-sm-2'></div>
              </div>
            </div>
            <div className='col-sm-6'>
                <div className='row mt-4'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-10'>
                    <div className='row' style={{marginRight: "5px"}}>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p style={{fontWeight: "bold"}}>Invoice Number</p></div>
                            <div className='col-sm-5' style={{textAlign: "right"}}>
                                <p>{invoice_number(formData.invoices.prefix, formData.invoices.nextNumber, formData.invoices.suffix)}</p>   
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p style={{fontWeight: "bold"}}>Invoice Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{new Date().toLocaleDateString('en-GB')}</p></div>
                        </div>
                        <div className='row' >
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p style={{fontWeight: "bold"}}>Due Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{future_date(formData.invoices.dueDate)}</p></div>
                        </div>
                        <div className='row' style={{backgroundColor: "#236ca0", padding: "10px"}}>
                            <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{formData.translate.totalDue}</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>
                                    {
                                        formData.payments.currencyPosition === "left"
                                        && `${formData.payments.currencySymbol}${thousand_seperator(
                                            ((grandTotal() - formData.payments.discount) +
                                            ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))) -
                                            formData.payments.paid
                                        )}${formData.payments.decimalSeperator}${decimals()}`
                                    }
                                    {    
                                        formData.payments.currencyPosition === "right"
                                        && `${thousand_seperator(
                                            ((grandTotal() - formData.payments.discount) +
                                            ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))) -
                                            formData.payments.paid
                                        )}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                    }
                                </p></div>
                        </div>
                    </div>



                    <div>
                        
                            <div className='col-sm-11 mt-4'>
                                <div className='row'>
                                Payment is due within 14 days from date of invoice. Late payment is subject to fees of 5% per month.
                                <br></br>
                                <b className="mt-1" align="left" style={{color: "#236ca0"}}>Payment Methods:</b>
                                <p align="left" style={{marginLeft: "20px"}}>
                                    1. 60% Advance Payment for Commencement<br></br>
                                    2. Remaining 40% Final Settlement
                                </p>
                                </div>
                            </div>
                            <div className='col-sm-1'></div>
                        
                    </div>


                    </div>
                </div>
                
            </div>
          </div>
            <div className='row mt-4' style={{padding: "0px 30px 0px 30px"}}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{formData.translate.hrsQty}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "left"}}>{formData.translate.service}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{formData.translate.ratePrice}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{formData.translate.subTotal}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                              formData.general.lineItems.map((item, index) => (
                                <tr key={index}>
                                <td style={{textAlign: "center"}}>{item.qty}</td>
                                <td style={{textAlign: "left"}}>{item.title}<br></br><label className={"text-muted"}>{item.description}</label></td>
                                <td style={{textAlign: "center"}}>
                                    { 
                                        formData.payments.currencyPosition === "left" && 
                                        `${formData.payments.currencySymbol}${thousand_seperator(item.price).trim()}${formData.payments.decimalSeperator}${decimals()}`
                                    }
                                    {
                                       formData.payments.currencyPosition === "right" && 
                                        `${thousand_seperator(item.price).trim()}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                    }
                                </td>
                                <td style={{textAlign: "center"}}>
                                    {
                                        formData.payments.currencyPosition === "left" && 
                                        `${formData.payments.currencySymbol}${thousand_seperator(item.qty*item.price).trim()}${formData.payments.decimalSeperator}${decimals()}`
                                    }
                                    {
                                        formData.payments.currencyPosition === "right" && 
                                        `${thousand_seperator(item.qty*item.price).trim()}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                    }
                                </td>
                                </tr>
                            )) 
                        }
                    </tbody>
                    </table>
            </div>







            <div className='row'>
                <div className='col-sm-6'>
                    <div className='row bg-body-secondary p-3 m-3'>
                        <div className='col-sm-12' style={{textAlign: "left"}}>
                            <div dangerouslySetInnerHTML={{ __html: formData.payments.genericPayment }} />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='row mt-3'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-10'>
                        <div className='row' style={{marginRight: "5px"}}>
                            <div className='row'>
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p>{formData.translate.total}</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    <p>
                                        {
                                            formData.payments.currencyPosition === "left" && 
                                            `${formData.payments.currencySymbol}${thousand_seperator(grandTotal())}${formData.payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            formData.payments.currencyPosition === "right" && 
                                            `${thousand_seperator(grandTotal())}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                        }
                                    </p>   
                                </div>
                            </div>
                            <hr className='row'></hr>
                                <div className='row'>
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p style={{color: "green"}}>{formData.translate.discount}</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    <p style={{color: "green"}}>
                                        {
                                            formData.payments.currencyPosition === "left" && 
                                            `${formData.payments.currencySymbol}${thousand_seperator(formData.payments.discount)}${formData.payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            formData.payments.currencyPosition === "right" && 
                                            `${thousand_seperator(formData.payments.discount)}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                        }
                                    </p>   
                                </div>
                            </div>
                            <hr className='row'></hr>
                            <div className='row'>
                                <div className='col-sm-7' style={{fontWeight: "bold", textAlign: "right"}}><p>{formData.tax.name}</p></div>
                                <div className='col-sm-5'style={{textAlign: "right"}}>
                                    <p>
                                        {
                                        formData.payments.currencyPosition === "left" && 

                                        (formData.tax.price === 'Yes. I will enter prices inclusive of tax'? 
                                            (
                                                formData.tax.percentage === ""? "₹0.00": `${"₹"}${formData.tax.percentage}${".00"}`
                                            ): 
                                                `${formData.payments.currencySymbol}${thousand_seperator((formData.tax.percentage/100) * (grandTotal() - formData.payments.discount))}${formData.payments.decimalSeperator}${decimals()}`
                                        )}
                                        {
                                        formData.payments.currencyPosition === "right" && 

                                        (formData.tax.price === 'Yes. I will enter prices inclusive of tax'? 
                                            (
                                                formData.tax.percentage === ""? "₹0.00": `${"₹"}${formData.tax.percentage}${".00"}`
                                            ): 
                                                `${thousand_seperator((formData.tax.percentage/100) * (grandTotal() - formData.payments.discount))}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                        )}
                                    </p></div>
                            </div>
                            <hr className='row'></hr>
                            <div className='row' >
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p style={{color: "#236ca0"}}>Paid</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    {
                                    (formData.payments.paid == ((grandTotal() - formData.payments.discount) +
                                                ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount)))?
                                    <p style={{color: "#236ca0"}}>
                                        {
                                            formData.payments.currencyPosition === "left" && 
                                            `${"-"}${formData.payments.currencySymbol}${thousand_seperator(((grandTotal() - formData.payments.discount) +
                                                ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))))}${formData.payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            formData.payments.currencyPosition === "right" && 
                                            `${"-"}${thousand_seperator(((grandTotal() - formData.payments.discount) +
                                                ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))))}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                        }
                                    </p>:
                                    <p style={{color: "#236ca0"}}>

                                        {
                                            formData.payments.currencyPosition === "left" &&
                                            `${formData.payments.currencySymbol}${thousand_seperator(formData.payments.paid)}${formData.payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            formData.payments.currencyPosition === "right" &&
                                            `${thousand_seperator(formData.payments.paid)}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                        }
                                
                                    </p>)
                                    }
                                </div>
                            </div>
                            
                            <div className='row mt-1' style={{backgroundColor: "#236ca0", padding: "10px"}}>
                                <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{formData.translate.totalDue}</p></div>
                                <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>
                                    {
                                        formData.payments.currencyPosition === "left"
                                        && `${formData.payments.currencySymbol}${thousand_seperator(
                                            ((grandTotal() - formData.payments.discount) +
                                            ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))) -
                                            formData.payments.paid
                                        )}${formData.payments.decimalSeperator}${decimals()}`
                                    }
                                    {    
                                        formData.payments.currencyPosition === "right"
                                        && `${thousand_seperator(
                                            ((grandTotal() - formData.payments.discount) +
                                            ((formData.tax.percentage / 100) * (grandTotal() - formData.payments.discount))) -
                                            formData.payments.paid
                                        )}${formData.payments.decimalSeperator}${decimals()}${formData.payments.currencySymbol}`
                                    }
                                    </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div className='mt-2'>                
                <hr className='m-3' style={{border: "2px solid #236ca0"}}></hr>
                <div className='row mb-3 p-1'>
                    <div dangerouslySetInnerHTML={{ __html: formData.invoices.footer }} />
                </div>
            </div>

        </div>

  )
}

export default Template2
