import React, {useState} from 'react'
import RichTextEditor from './Common/Editor/RichTextEditor'
import CheckBoxes from './Common/CheckBoxes';
import './Common/Editor/editor.css'

const Emails = () => {

  const items = [
    "7 days before Due Date",
    "1 day before Due Date",
    "On the Due Date",
    "1 day after Due Date",
    "7 days after Due Date",
    "14 days after Due Date",
    "21 days after Due Date",
    "30 days after Due Date"
  ];
  const [checkedItems, setCheckedItems] = useState([]);
  const [initialContent, setInitialContent] = useState('<p>Hello</p>')
  const [quoteContent, setQuoteContent] = useState('');
  const [invoiceContent, setInvoiceContent] = useState('');
  const [paymentReceivedContent, setpaymentReceivedContent] = useState('');
  const [paymentRemainderContent, setpaymentRemainderContent] = useState('');
  const [footerContent, setFooterContent] = useState('');

  

  return (

    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>Email Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Here you find all of the Email-related settings.<br></br>
                (PRO) The PDF & Email Extension adds a few extra options here for customizing emails.</p>
            </div>

            <form>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="emailAddress" className="col-sm-3 col-form-label"><b>Email Address</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The email address to send and receive notifications (probably your business email).</i></label>
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="emailName" className="col-sm-3 col-form-label"><b>Email Name</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The name on emails to send and receive notifications (probably your business name).</i></label>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="bccClientEmails" className="col-sm-3 col-form-label"><b>BCC on Client Emails</b></label>
                <div className="col-sm-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{fontSize: "16px"}}>
                      Yes. send myself a copy of all client emails (BCC). Recommended.
                    </label>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}} htmlFor="flexCheckDefault">
                      <i>This ensures you have a copy of the email on record</i>
                    </label>
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>


              <hr></hr>


              <div className="row">
                  <h5 align="left"><b>Quote Available</b></h5>
              </div>

              <div className="row" align="left">
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}>
                  <i>Send to the client manually, when you click the email buttons.</i></label>
              </div>





              <div className="form-group row mt-4" align="left">
                <label htmlFor="subject" className="col-sm-3 col-form-label"><b>Subject</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The subject of the email (wild cards are allowed).</i></label>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="content" className="col-sm-3 col-form-label"><b>Content</b></label>
                <div className="col-sm-9">
                      {/* Using Text Editor Component */}
                      <div className="app">
                        <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setQuoteContent(html)}}/>
                      </div>              
                </div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The content of the email (wild cards are allowed).</i></label>
                </div>
              </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="buttonText" className="col-sm-3 col-form-label"><b>Button text</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The "view this quote online" button.</i></label>
                </div>
              </div>


              <hr></hr>



              
              <div className="row">
                  <h5 align="left"><b>Invoice Available</b></h5>
              </div>

              <div className="row" align="left">
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}>
                  <i>Send to the client manually, when you click the email buttons.</i></label>
              </div>





              <div className="form-group row mt-4" align="left">
                <label htmlFor="subject" className="col-sm-3 col-form-label"><b>Subject</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The subject of the email (wild cards are allowed).</i></label>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="content" className="col-sm-3 col-form-label"><b>Content</b></label>
                <div className="col-sm-9">
                      {/* Using Text Editor Component */}
                      <div className="app">
                        <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setInvoiceContent(html)}}/>
                      </div>              
                </div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The content of the email (wild cards are allowed).</i></label>
                </div>
              </div>


              <div className="form-group row mt-4" align="left">
                <label htmlFor="buttonText" className="col-sm-3 col-form-label"><b>Button text</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The "view this invoice online" button.</i></label>
                </div>
              </div>
              




              <hr></hr>



              
              <div className="row">
                  <h5 align="left"><b>Payment Received</b></h5>
              </div>

              <div className="row" align="left">
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}>
                  <i>Send to the client automatically, when they make a payment.</i></label>
              </div>





              <div className="form-group row mt-4" align="left">
                <label htmlFor="subject" className="col-sm-3 col-form-label"><b>Subject</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The subject of the email (wild cards are allowed).</i></label>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="content" className="col-sm-3 col-form-label"><b>Content</b></label>
                <div className="col-sm-9">
                      {/* Using Text Editor Component */}
                      <div className="app">
                        <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setpaymentReceivedContent(html)}}/>
                      </div>              
                </div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The content of the email (wild cards are allowed).</i></label>
                </div>
              </div>



              <hr></hr>



              
              <div className="row">
                  <h5 align="left"><b>Payment Remainder</b></h5>
              </div>

              <div className="row" align="left">
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}>
                  <i>Send to the client automatically on the choosen days.</i></label>
              </div>

              <div className="form-group row mt-2" align="left">
                <label htmlFor="whenToSend" className="col-sm-3 col-form-label"><b>When to Send</b></label>
                <div className="col-sm-6">
                    <CheckBoxes getCheckedItems={(list)=>{setCheckedItems(list)}} items={items}/>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>Check when you would like payment remainders sent out.</i></label>
                </div>
                <div className="col-sm-3"></div>
                {/*<p>Selected: {checkedItems.join(", ")}</p>*/}
              </div>       





              <div className="form-group row mt-4" align="left">
                <label htmlFor="subject" className="col-sm-3 col-form-label"><b>Subject</b></label>
                <div className="col-sm-4">
                    <input 
                        type="email"  
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
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The subject of the email (wild cards are allowed).</i></label>
                </div>
              </div>




              <div className="form-group row mt-4" align="left">
                <label htmlFor="content" className="col-sm-3 col-form-label"><b>Content</b></label>
                <div className="col-sm-9">
                      {/* Using Text Editor Component */}
                      <div className="app">
                        <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setpaymentRemainderContent(html)}}/>
                      </div>              
                </div>
                <div className='col-sm-3'></div>
                <div className='col-sm-9'>
                    <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The content of the email (wild cards and HTML are allowed).</i></label>
                </div>
              </div>




            <div className="row bg-light border" align="left">
                <label className="m-2" style={{fontSize:"18px"}}>
                  <b>Wildcards for Emails</b>
                </label>
                <label className='form-label text-muted m-2' style={{fontSize:"0.6rem"}}><i>
                  The following wild cards can be used in email subjects and email content
                  <br></br>
                  %client_first_name%: Clients first name <br></br>
                  %client_lst_name%: Clients last name <br></br>
                  %client_business%: Clients business <br></br>
                  %client_email%: Clients email address <br></br>
                  %link%: URL to the quote <br></br>
                  %number%: The quote or invoice number <br></br>
                  %total%: The quote or invoice total <br></br>
                  %last_payment%: The amount of the last payment. (return 'N/A' if no payments) <br></br>
                  %balance%: The balance outstanding on the quote or invoice <br></br>
                  %created%: The quote or invoice created date <br></br>
                  %valid_until%: The date the quote is valid until <br></br>
                  %due_date%: The date the invoice is due <br></br>
                  %date%: Todays date. Useful on Payment emails <br></br>
                  %order_number%: The order number of the invoice <br></br>
                  %is_was%: If due date of the invoice is past, displays 'was' otherwise displays 'is'
                  </i></label>
            </div>



              <div className="form-group row mt-4" align="left">
                <label htmlFor="footer" className="col-sm-3 col-form-label"><b>Footer Text</b></label>
                <div className="col-sm-9">
                      {/* Using Text Editor Component */}
                      <div className="app">
                        <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setFooterContent(html)}}/>
                      </div>              
                </div>
              </div>





              <div className="form-group row mt-4" align="left">
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

export default Emails
