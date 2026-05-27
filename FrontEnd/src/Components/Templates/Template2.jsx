import React, {useState, useEffect, useCallback} from 'react'
//import { useFormContext } from "../../context/useFormContext";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const Template2 = () => {

const [invoiceData, setInvoiceData] = useState({
            lineItems: [{
              qty: 0,
              title: "",
              adjust: "",
              price: 0,
              description: ""
            }],
            subTotal: 0,
            GST: 0,
            discount: 0,
            paid: 0,
            totalDue: 0,
            client: "",
            prefix: "",
            suffix: "",
            invoiceNumber: "",
            createdDate: "",
            dueDate: "",
            tax: "",
            taxPriceOption: "",
            termsAndConditions: "",
            currencySymbol: "",
});
    //const { formData } = useFormContext();
const [general, setGeneral] = useState({
      yearStart: "",
      yearEnd: "",
      lineItems: [],
});

const [business, setBusiness] = useState({
    image: "",
    name: "",
    address: "",
    info: "",
    website: ""
});

const [invoices, setInvoices] = useState({
      prefix: "",
      suffix: "",
      autoIncrement: "No",
      nextNumber: "",
      dueDate: "",
      hideAdjustField: "No",
      termsAndConditions: "",
      footer: "",
      notices: [],
      template: "",
      customCSS: "",
      toAddress: ""
});

const [payments, setPayments] = useState({
      currencySymbol: "",
      currencyPosition: "",
      thousandSeperator: "",
      decimalSeperator: "",
      numberOfDecimals: "",
      paymentPage: "",
      paymentPageFooter: "",
      bank: "",
      genericPayment: "",
      discount: "",
      paid: ""
});

const [tax, setTax] = useState({
      price: "",
      percentage: "",
      name: "",
});

const [translate, setTranslate] = useState({
      quoteLabel: "",
      qutoeLabelPlural: "",
      invoiceLabel: "",
      invoiceLabelPlural: "",
      hrsQty: "",
      service: "",
      ratePrice: "",
      adjust: "",
      subTotal: "",
      discount: "",
      total: "",
      totalDue: "",
});
  
  const invoice_number = (prefix, number, suffix) => {
    if (prefix != "" && suffix == "") {
        return `${prefix}-${number}`;
    } else if (suffix != "" && prefix == "") {
        return `${number}-${suffix}`;
    } else {
        return ""
    }
  }
  
    
  const thousand_seperator = (num) => {
    return num.toString().replace(/(?<=\d)(?=(\d{2})+\d$)/g, payments.thousandSeperator);
  }
  
  const decimals = () => {
      return "0".repeat(payments.numberOfDecimals);
  }



  const fetchSettings = useCallback(async () => {
    
  try {
      const response = await axios.get(`${apiUrl}/api/settings`);

      const general = response.data.data[0].general;
      const business = response.data.data[0].business;
      const invoices = response.data.data[0].invoices;
      const payments = response.data.data[0].payments;
      const tax = response.data.data[0].tax;
      const translate = response.data.data[0].translate;

      setGeneral(general);
      setBusiness(business);
      setInvoices(invoices);
      setPayments(payments);
      setTax(tax);
      setTranslate(translate);

    } catch (error) {
      console.log("Document not found");
    }  
  },[]);  



  const fetchInvoices = useCallback(async () => {   
    try {
        const response = await axios.get(`${apiUrl}/api/invoices`);
        const result = response.data.data[0];
        setInvoiceData({
            lineItems: result.lineItems.map((item, index) => ({
                qty: item.qty || 0,
                title: item.title || "",  
                adjust: item.adjust || "",
                price: item.price || 0,
                description: item.description || ""
            })),
            subTotal: result.subTotal || 0,
            GST: result.GST || 0,
            discount: result.discount || 0,
            paid: result.paid || 0,
            totalDue: result.totalDue || 0,
            client: result.client || "",
            prefix: result.prefix || "",
            suffix: result.suffix || "",
            invoiceNumber: result.invoiceNumber || "",
            createdDate: result.createdDate || "",
            dueDate: result.dueDate || "",
            tax: result.tax || "",
            taxPriceOption: result.taxPriceOption || "",
            termsAndConditions: result.termsAndConditions || "",
            currencySymbol: result.currencySymbol || "",
        });
      } catch (error) {
        console.log("Document not found");
      }
  },[]);


  useEffect(() => {
    fetchSettings();
    fetchInvoices();
  }, [fetchSettings, fetchInvoices]);  
  


  return (
    <div className='mt-1 container-fluid' 
    style={{
      margin: 0,
      border: "5px solid #236ca0",
      boxSizing: "border-box",
      fontSize: "16px"
    }}>
        <div className='row mt-4'>
            <div className='col-sm-3'>
                <div style={{ float: "left"}}>
                        {business.image ? (
                        <img
                            src={business.image}
                            alt="Preview"
                            height="100"
                            width="350"
                        />
                        ) : null}
                </div>
            </div>
            <div className='col-sm-5'></div>
            <div className='col-sm-4'>
                <div className='row' style={{backgroundColor: '#236ca0'}}>
                    <div style={{float:"right", textAlign: "right"}}>
                        <p style={{fontFamily: "arial", fontSize:"26px", color: "white", padding: "4px", fontWeight: "bold"}}>{translate.invoiceLabel}</p>
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
                          {business.name}
                      </p>               
                      <p style={{fontFamily: "Calibri"}} dangerouslySetInnerHTML={{__html: business.address}}/>
                      <p style={{fontFamily: "Calibri"}} dangerouslySetInnerHTML={{__html: business.info}} /> 
                      <p style={{fontFamily: "Calibri"}} dangerouslySetInnerHTML={{__html: business.website}} /> 
                  </div>   
                  <div className='col-sm-2'></div>
              </div>
              <div className='row mt-4'>
                  <div className='col-sm-10' style={{padding: "10px 10px 10px 30px", backgroundColor: '#236ca0', color: 'white', textAlign:'left'}}>
                      <b>To:</b><br></br>
                      <p style={{fontFamily: "Calibri"}}>{`${invoiceData.client.firstname} ${invoiceData.client.lastname}`}</p>
                      <p style={{fontFamily: "Calibri"}}>{invoiceData.client.address}</p>
                      <p style={{fontFamily: "Calibri"}}>{invoiceData.client.extraInfo}</p>
                      <p style={{fontFamily: "Calibri"}}>{invoiceData.client.website}</p>
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
                                <p>{invoice_number(invoiceData.prefix, invoiceData.invoiceNumber, invoiceData.suffix)}</p>   
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p style={{fontWeight: "bold"}}>Invoice Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{invoiceData.createdDate ? new Date(invoiceData.createdDate).toLocaleDateString('en-GB') : ''}</p></div>
                        </div>
                        <div className='row' >
                            <div className='col-sm-7' style={{textAlign: "right", padding: "3px 10px 3px 0px"}}><p style={{fontWeight: "bold"}}>Due Date</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p>{invoiceData.dueDate ? new Date(invoiceData.dueDate).toLocaleDateString('en-GB') : ''}</p></div>
                        </div>
                        <div className='row' style={{backgroundColor: "#236ca0", padding: "10px"}}>
                            <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{translate.totalDue}</p></div>
                            <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>
                                    {
                                        payments.currencyPosition === "left"
                                        && `${invoiceData.currencySymbol}${thousand_seperator(
                                            invoiceData.totalDue
                                        )}${payments.decimalSeperator}${decimals()}`
                                    }
                                    {    
                                        payments.currencyPosition === "right"
                                        && `${thousand_seperator(
                                            invoiceData.totalDue
                                        )}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                    }
                                </p></div>
                        </div>
                    </div>



                    <div>
                        
                            <div className='col-sm-11 mt-4'>
                                <div className='row'>
                                    <div dangerouslySetInnerHTML={{__html: invoiceData.termsAndConditions }} />
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
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{translate.hrsQty}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "left"}}>{translate.service}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{translate.ratePrice}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "center"}}>{translate.adjust}</th>
                        <th scope="col" style={{backgroundColor: "#236ca0", color: "white", textAlign: "right", paddingRight: "30px"}}>{translate.subTotal}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                              invoiceData.lineItems.map((item, index) => (
                                <tr key={index}>
                                <td style={{textAlign: "center"}}>{item.qty}</td>
                                <td style={{textAlign: "left"}}>{item.title}<br></br><label className={"text-muted"}>{item.description}</label></td>
                                <td style={{textAlign: "center"}}>
                                    { 
                                        payments.currencyPosition === "left" && 
                                        `${invoiceData.currencySymbol}${thousand_seperator(item.price).trim()}${payments.decimalSeperator}${decimals()}`
                                    }
                                    {
                                       payments.currencyPosition === "right" && 
                                        `${thousand_seperator(item.price).trim()}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                    }
                                </td>
                                <td style={{textAlign: "center"}}>0.00%</td>
                                <td style={{textAlign: "right", paddingRight: "30px"}}>
                                    {
                                        payments.currencyPosition === "left" && 
                                        `${invoiceData.currencySymbol}${thousand_seperator(item.qty*item.price).trim()}${payments.decimalSeperator}${decimals()}`
                                    }
                                    {
                                        payments.currencyPosition === "right" && 
                                        `${thousand_seperator(item.qty*item.price).trim()}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
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
                            <div dangerouslySetInnerHTML={{ __html: payments.genericPayment }} />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='row mt-3'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-10'>
                        <div className='row' style={{marginRight: "5px"}}>
                            <div className='row'>
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p>{translate.total}</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    <p>
                                        {
                                            payments.currencyPosition === "left" && 
                                            `${invoiceData.currencySymbol}${thousand_seperator(invoiceData.subTotal)}${payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            payments.currencyPosition === "right" && 
                                            `${thousand_seperator(invoiceData.subTotal)}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                        }
                                    </p>   
                                </div>
                            </div>
                            <hr className='row'></hr>
                                <div className='row'>
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p style={{color: "green"}}>Discount</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    <p style={{color: "green"}}>
                                        {
                                            payments.currencyPosition === "left" && 
                                            `${invoiceData.currencySymbol}${thousand_seperator(invoiceData.discount)}${payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            payments.currencyPosition === "right" && 
                                            `${thousand_seperator(invoiceData.discount)}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                        }
                                    </p>   
                                </div>
                            </div>
                            <hr className='row'></hr>
                            <div className='row'>
                                <div className='col-sm-7' style={{fontWeight: "bold", textAlign: "right"}}><p>GST ({invoiceData.tax}%)</p></div>
                                <div className='col-sm-5'style={{textAlign: "right"}}>
                                    <p>
                                        {
                                        payments.currencyPosition === "left" && 

                                        (invoiceData.taxPriceOption === 'Yes. I will enter prices inclusive of tax'? 
                                            (
                                                invoiceData.tax === ""? `${invoiceData.currencySymbol}0.00`: `${invoiceData.currencySymbol}${invoiceData.tax}${".00"}`
                                            ): 
                                                `${invoiceData.currencySymbol}${thousand_seperator(invoiceData.GST)}${payments.decimalSeperator}${decimals()}`
                                        )}
                                        {
                                        payments.currencyPosition === "right" && 

                                        (invoiceData.taxPriceOption === 'Yes. I will enter prices inclusive of tax'? 
                                            (
                                                invoiceData.tax === ""? `0.00${invoiceData.currencySymbol}`: `${invoiceData.tax}${".00"}${invoiceData.currencySymbol}`
                                            ): 
                                                `${thousand_seperator(invoiceData.GST)}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                        )}
                                    </p></div>
                            </div>
                            <hr className='row'></hr>
                            <div className='row' >
                                <div className='col-sm-7' style={{fontWeight:"bold", textAlign: "right"}}><p style={{color: "#236ca0"}}>Paid</p></div>
                                <div className='col-sm-5' style={{textAlign: "right"}}>
                                    {
                                    (invoiceData.paid == ((invoiceData.subTotal - invoiceData.discount) + invoiceData.GST)?
                                    <p style={{color: "#236ca0"}}>
                                        {
                                            payments.currencyPosition === "left" && 
                                            `${"-"}${invoiceData.currencySymbol}${thousand_seperator(invoiceData.paid)}${payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            payments.currencyPosition === "right" && 
                                            `${"-"}${thousand_seperator(invoiceData.paid)}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                        }
                                    </p>:
                                    <p style={{color: "#236ca0"}}>

                                        {
                                            payments.currencyPosition === "left" &&
                                            `${invoiceData.currencySymbol}${thousand_seperator(invoiceData.paid)}${payments.decimalSeperator}${decimals()}`
                                        }
                                        {
                                            payments.currencyPosition === "right" &&
                                            `${thousand_seperator(invoiceData.paid)}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
                                        }
                                
                                    </p>)
                                    }
                                </div>
                            </div>
                            
                            <div className='row mt-1' style={{backgroundColor: "#236ca0", padding: "10px"}}>
                                <div className='col-sm-7' style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>{translate.totalDue}</p></div>
                                <div className='col-sm-5'style={{textAlign: "right"}}><p style={{color: "white", fontWeight: "bold"}}>
                                    {
                                        payments.currencyPosition === "left"
                                        && `${invoiceData.currencySymbol}${thousand_seperator(
                                            invoiceData.totalDue
                                        )}${payments.decimalSeperator}${decimals()}`
                                    }
                                    {    
                                        payments.currencyPosition === "right"
                                        && `${thousand_seperator(
                                            invoiceData.totalDue
                                        )}${payments.decimalSeperator}${decimals()}${invoiceData.currencySymbol}`
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
                    <div dangerouslySetInnerHTML={{ __html: invoices.footer }} />
                </div>
            </div>

        </div>

  )
}

export default Template2
