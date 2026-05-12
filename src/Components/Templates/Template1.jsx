import React, {useState} from 'react'
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
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, formData.payments.thousandSeperator);
}

const decimals = () => {
    return "0".repeat(formData.payments.numberOfDecimals);
}

  return (
    <div className='mt-4 container' 
    style={{
      margin: 0,
      border: "2px solid darkblue",
      boxSizing: "border-box"
    }}>
        <div className='row mt-4'>
            <div className='col-sm-3'>
                <div style={{ float: "left"}}>
                    <img src={formData.business.image} alt="Preview" height="100" width="350" />
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
                            <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{thousand_seperator((grandTotal()+((formData.tax.percentage/100) * grandTotal()))-formData.translate.paid)+formData.payments.decimalSeperator+decimals()}</p></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='row mt-4'>
                <div className='col-sm-5' style={{padding: "10px 10px 10px 30px", backgroundColor: 'darkblue', color: 'white', textAlign:'left'}}>
                    <b>To:</b><br></br>
                    <p style={{fontFamily: "Calibri", marginRight: "125px"}}>
                        {formData.invoices.toAddress}
                    </p>
                </div>
                <div className='col-sm-2'></div>
                <div className='col-sm-5'></div>
            </div>
        
            <div className='row mt-4' style={{padding: "30px"}}>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col" style={{backgroundColor: "darkblue", color: "white", textAlign: "center"}}>HRS/QTY</th>
                        <th scope="col" style={{backgroundColor: "darkblue", color: "white", textAlign: "left"}}>SERVICE</th>
                        <th scope="col" style={{backgroundColor: "darkblue", color: "white", textAlign: "left"}}>RATE/PRICE</th>
                        <th scope="col" style={{backgroundColor: "darkblue", color: "white", textAlign: "left"}}>ADJUST</th>
                        <th scope="col" style={{backgroundColor: "darkblue", color: "white", textAlign: "left"}}>SUB TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(formData.general.lineItems?
                              formData.general.lineItems.map((item, index) => (
                                <tr key={index}>
                                <td style={{textAlign: "center"}}>{item.qty}</td>
                                <td style={{textAlign: "left"}}>{item.title}<br></br><label className={"text-muted"}>{item.description}</label></td>
                                <td style={{textAlign: "center"}}>{thousand_seperator(item.price).trim()+formData.payments.decimalSeperator+decimals()}</td>
                                <td style={{textAlign: "center"}}>0.00%</td>
                                <td style={{textAlign: "center"}}>{thousand_seperator(item.qty*item.price).trim()+formData.payments.decimalSeperator+decimals()}</td>
                                </tr>
                            )) 
                        :
                        <tr>
                        <td style={{textAlign: "center"}}>{formData.translate.hrsQty}</td>
                        <td style={{textAlign: "left"}}>{formData.translate.service}</td>
                        <td style={{textAlign: "center"}}>{thousand_seperator(formData.translate.ratePrice).trim()+formData.payments.decimalSeperator+decimals()}</td>
                        <td style={{textAlign: "center"}}>0.00%</td>
                        <td style={{textAlign: "center"}}>{thousand_seperator(formData.translate.subTotal).trim()+formData.payments.decimalSeperator+decimals()}</td>                        
                        </tr>)}
                    </tbody>
                    </table>
            </div>




            <div className='row mt-5'>
                <div className='col-sm-5'></div>
                <div className='col-sm-2'></div>
                <div className='col-sm-5'>
                    <div className='row' style={{marginRight: "5px"}}>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>Sub Total</p></div>
                            <div className='col-sm-5' style={{textAlign: "right"}}>
                                <p>{thousand_seperator(grandTotal()).toString()+formData.payments.decimalSeperator+decimals()}</p>   
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>{formData.tax.name}</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}>
                                <p>{(formData.tax.price == 'Yes. I will enter prices inclusive of tax')? 
                            ((formData.tax.percentage == "")? "₹0.00": ("₹" +formData.tax.percentage+ ".00")): 
                                thousand_seperator((formData.tax.percentage/100) * grandTotal())+formData.payments.decimalSeperator+decimals()}</p></div>
                        </div>
                        <div className='row' >
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p>Paid</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}>
                                {(formData.translate.paid == grandTotal()?
                                <p style={{color: "red"}}>{thousand_seperator(grandTotal())+formData.payments.decimalSeperator+decimals()}</p>:
                                <p style={{color: "red"}}>{thousand_seperator(formData.translate.paid)+formData.payments.decimalSeperator+decimals()}</p>)}</div>
                        </div>
                        <div className='row' style={{backgroundColor: "darkblue", padding: "10px"}}>
                            <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>TOTAL DUE</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{thousand_seperator((grandTotal()+((formData.tax.percentage/100) * grandTotal()))-formData.translate.paid)+formData.payments.decimalSeperator+decimals()}</p></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-4'>
                <div className='row bg-body-secondary p-3 m-3'>
                <div className='col-sm-7' style={{textAlign: "left"}}>
                    <div dangerouslySetInnerHTML={{ __html: formData.payments.genericPayment }} />
                </div>
                <div className='col-sm-5'></div>
                </div>
                <hr className='m-3'></hr>
                <center>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8' style={{fontSize: "16px"}}>
                        <div className='row'>
                        Payment is due within 14 days from date of invoice. Late payment is subject to fees of 5% per month.
                        <br></br>
                        <b>Payment Methods:</b>
                        <div className='row'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-6'>
                        - 60% Advance Payment for Commencement
                        - Remaining 40% Final Settlement
                            </div>
                            <div className='col-sm-3'></div>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-2'></div>
                </center>
                <hr className='m-3'></hr>
                <div className='row mb-3 p-2'>
                    <div dangerouslySetInnerHTML={{ __html: formData.payments.paymentPageFooter }} />
                </div>
            </div>

        </div>
  )
}

export default Template1
