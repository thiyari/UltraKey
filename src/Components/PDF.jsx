import React from 'react'
import { useFormContext } from "../context/FormContext";

const PDF = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h1>Summary</h1>

      <h2>Business Info</h2>
      <div style={{ marginTop: '10px' }}>
          <img src={formData.business.image} alt="Preview" width="200" />
      </div>
      <p>Name: {formData.business.name}</p>
      <p>Address: {formData.business.address}</p>
      <p>Info: {formData.business.info}</p>
      <p>Website: {formData.business.website}</p>

      <br></br>
      <h2>Tax Info</h2>
      <p>price: {formData.tax.price}</p>
      <p>percentage: {formData.tax.percentage}</p>
      <p>name: {formData.tax.name}</p>


    </div>
  )
}

export default PDF
