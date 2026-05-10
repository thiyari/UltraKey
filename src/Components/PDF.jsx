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
      <h2>Invoice Info</h2>
      <p>prefix: {formData.invoices.prefix}</p>
      <p>suffix: {formData.invoices.suffix}</p>
      <p>nextNumber: {formData.invoices.nextNumber}</p>
      <p>dueDate: {formData.invoices.dueDate}</p>
      <p>termsAndConditions: {formData.invoices.termsAndConditions}</p>
      <p>footer: {formData.invoices.footer}</p>
      <p>template: {formData.invoices.template}</p>
      <p>customCSS: {formData.invoices.customCSS}</p>




      <br></br>
      <h2>Tax Info</h2>
      <p>price: {formData.tax.price}</p>
      <p>percentage: {formData.tax.percentage}</p>
      <p>name: {formData.tax.name}</p>

      <br></br>
      <h2>Translate Info</h2>
      <p>quoteLabel: {formData.translate.quoteLabel}</p>
      <p>qutoeLabelPlural: {formData.translate.qutoeLabelPlural}</p>
      <p>invoiceLabel: {formData.translate.invoiceLabel}</p>
      <p>invoiceLabelPlural: {formData.translate.invoiceLabelPlural}</p>
      <p>hrsQty: {formData.translate.hrsQty}</p>
      <p>service: {formData.translate.service}</p>
      <p>ratePrice: {formData.translate.ratePrice}</p>
      <p>adjust: {formData.translate.adjust}</p>
      <p>subTotal: {formData.translate.subTotal}</p>
      <p>discount: {formData.translate.discount}</p>
      <p>total: {formData.translate.total}</p>
      <p>totalDue: {formData.translate.totalDue}</p>
    </div>
  )
}

export default PDF
