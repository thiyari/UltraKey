import React, {useState} from 'react'
import RichTextEditor from './Common/Editor/RichTextEditor'
import './Common/Editor/editor.css'

const Emails = () => {

  const [initialContent, setInitialContent] = useState('<p>Hello</p>')
  const [content, setContent] = useState('');

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

                {/* Using Text Editor Component */}
                <div className="app">
                  <RichTextEditor value={initialContent} onChangeHTML={(html)=>{setContent(html)}}/>
                </div>              

                <div>{content}</div>
              
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

export default Emails
