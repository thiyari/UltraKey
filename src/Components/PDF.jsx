import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { useFormContext } from "../context/FormContext";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";

const PDF = () => {
  const { formData } = useFormContext();
  const contentRef = useRef();

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

  return (
    <div className="mt-4">
      {/* PDF CONTENT */}
      <div ref={contentRef}>
        {formData.invoices.template === "template1" && <Template1 />}
        {formData.invoices.template === "template2" && <Template2 />}
      </div>

      {/* BUTTON OUTSIDE PDF CONTENT */}
      <button className="btn btn-outline-primary mt-2" onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default PDF;