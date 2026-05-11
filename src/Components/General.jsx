import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../context/FormContext";

function General() {
    
    const navigate = useNavigate();
    const { saveFormData, formData } = useFormContext();

    const [data, setData] = useState({
      yearStart: formData.general.yearStart || "",
      yearEnd: formData.general.yearEnd || "",
      lineItems: formData.general.lineItems || "",
    });
    


    const handleKeyDown = (e) => {
      let value = e.target.value;

      // Handle Enter key
      if (e.key === "Enter") {
        value += "\n";
      }

      // Split textarea into lines
      const extractedLines = value.split("\n");
      const arr = extractedLines.map(item => item.split("|"))

      const keys = ["qty", "title", "price", "description"];
      const result = arr.map(item =>
            Object.fromEntries(
              keys.map((key, index) => [key, item[index]])
            )
          );
      setData({...data, lineItems: result})
        };

    
    async function submitHandler(event) {
        event.preventDefault();
          saveFormData("general", data);
          navigate("/pdf");
    }

  return (
    <div className="container">
          
            <div className="row">
                <h5 className="mt-4" align="left"><b>General Settings</b></h5>
            </div>

            <div className="row bg-light border" align="left">
                <p className="m-2"><i className="fa-solid fa-circle-info fa-lg"></i>
                &nbsp; Just some general options</p>
            </div>


            <form onSubmit={submitHandler}>

              <div className="form-group row mt-4" align="left">
                <label htmlFor="yearStart" className="col-sm-3 col-form-label"><b>Year Start</b></label>
                <div className="col-sm-3">
                  <input type="date" className="form-control" placeholder="Start Year" aria-label="startYear" aria-describedby="basic-addon1"
                  value={data.yearStart}
                  onChange={(e)=>setData({...data, yearStart: e.target.value})}/>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The start date of the fiscal year</i></label>
                </div>
                <div className="col-sm-4"></div>
              </div>

              <div className="form-group row mt-2" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Year End</b></label>
                <div className="col-sm-3">
                  <input type="date" className="form-control" placeholder="End Year" aria-label="endYear" aria-describedby="basic-addon1"
                  value={data.yearEnd}
                  onChange={(e)=>setData({...data, yearEnd: e.target.value})}/>
                  <label className="form-label text-muted" style={{fontSize: "0.6rem"}}><i>The end date of the fiscal year</i></label>
                </div>
                <div className="col-sm-4"></div>
              </div>


              <div className="form-group row mt-2" align="left">
                <label htmlFor="yearEnd" className="col-sm-3 col-form-label"><b>Pre-Defined Line Items</b></label>
                <div className="col-sm-6">
                    <textarea 
                      className="form-control" 
                      rows="3"
                      style={{fontSize: "14px"}}
                      onKeyDown={handleKeyDown}
                      ></textarea>
                  <label className="form-label text-muted mt-2" style={{fontSize: "0.6rem"}}>
                    <i>Add 1 line item per line in this format: Qty | Title | Price | Description. Each field seperated with a | symbol.
                    <br></br>Price should be numbers only, no currency symbol
                    <br></br>If you prefer to have item blank, you still need the | symbol like so: 1 | Web Design | | Designing the Web</i>
                  </label>
                </div>
                <div className="col-sm-4"></div>
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

export default General
