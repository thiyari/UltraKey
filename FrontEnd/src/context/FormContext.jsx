import { createContext, useContext, useState } from "react";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_SERVER_URL;
const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    general: {},
    business: {},
    invoices: {},
    payments: {},
    tax: {},
    translate: {}
  });

  // Save page data
  const saveFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };
  
  const formSubmitHandler = async (updatedFormData) => {
          try { 
            await axios.post(`${apiUrl}/api/settings`, {
              general: {
                key: "general",
                yearStart: updatedFormData.general.yearStart,
                yearEnd: updatedFormData.general.yearEnd,
                lineItems: updatedFormData.general.lineItems
              },
              business: {
                key: "business",
                image: updatedFormData.business.image,
                name: updatedFormData.business.name,
                address: updatedFormData.business.address,
                info: updatedFormData.business.info,
                website: updatedFormData.business.website
            },
              invoices: {
                key: "invoices",
                prefix: updatedFormData.invoices.prefix,
                suffix: updatedFormData.invoices.suffix,
                autoIncrement: updatedFormData.invoices.autoIncrement,
                nextNumber: updatedFormData.invoices.nextNumber,
                dueDate: updatedFormData.invoices.dueDate,
                hideAdjustField: updatedFormData.invoices.hideAdjustField,
                termsAndConditions: updatedFormData.invoices.termsAndConditions,
                footer: updatedFormData.invoices.footer,
                notices: updatedFormData.invoices.notices,
                template: updatedFormData.invoices.template,
                customCSS: updatedFormData.invoices.customCSS,
                toAddress: updatedFormData.invoices.toAddress
            },
              payments: {
                key: "payments",
                currencySymbol: updatedFormData.payments.currencySymbol,
                currencyPosition: updatedFormData.payments.currencyPosition,
                thousandSeperator: updatedFormData.payments.thousandSeperator,
                decimalSeperator: updatedFormData.payments.decimalSeperator,
                numberOfDecimals: updatedFormData.payments.numberOfDecimals,
                paymentPage: updatedFormData.payments.paymentPage,
                paymentPageFooter: updatedFormData.payments.paymentPageFooter,
                bank: updatedFormData.payments.bank,
                genericPayment: updatedFormData.payments.genericPayment,
                discount: updatedFormData.payments.discount,
                paid: updatedFormData.payments.paid
            }
          },
          {
            headers:{
              "Content-Type":"application/json"
              }
            });
          } catch (err) {
            alert(err);
          }
  }  


  return (
    <FormContext.Provider value={{ formData, saveFormData, formSubmitHandler }}>
      {children}
    </FormContext.Provider>
  );
};


export const useFormContext = () => useContext(FormContext);