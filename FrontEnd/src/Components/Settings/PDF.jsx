import React, { useState, useEffect, useRef, useCallback } from "react";
import html2pdf from "html2pdf.js";
//import { useFormContext } from "../context/useFormContext";
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import axios from 'axios';
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const PDF = () => {
  const { id } = useParams();
  //const { formData } = useFormContext();
  const contentRef = useRef();
  const [invoicesTemplate, setInvoicesTemplate] = useState();

  const downloadPDF = () => {
    const element = contentRef.current;

    const options = {
      margin:0.1,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();

  };




  const fetchSettings = useCallback(async () => {
    
  try {
      const response = await axios.get(`${apiUrl}/api/settings`);

      const template = response.data.data[0].invoices.template;
      console.log("Document exists");
      setInvoicesTemplate(template);
    } catch (error) {
      console.log("Document not found");
    }  
  },[]);  

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);  



  return (
    <div className="mt-4">
      {/* PDF CONTENT */}
      <div ref={contentRef}>
        {invoicesTemplate === "template1" && <Template1 id={id} />}
        {invoicesTemplate === "template2" && <Template2 id={id} />}
      </div>

      {/* BUTTON OUTSIDE PDF CONTENT */}
      <button className="btn btn-outline-primary mt-2" onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default PDF;