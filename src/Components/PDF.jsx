import React from 'react'
import { useFormContext } from "../context/FormContext";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";

const PDF = () => {
  const { formData } = useFormContext();

  return (
    <div>
      {formData.invoices.template === "template1" && <Template1/>}
      {formData.invoices.template === "template2" && <Template2/>}
    </div>
  )
}

export default PDF
