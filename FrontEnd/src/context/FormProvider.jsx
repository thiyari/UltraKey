import { useState } from "react";
import axios from "axios";
import { FormContext } from "./FormContext";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
          general: {
            key: "",
            yearStart: "",
            yearEnd: "",
            lineItems: [],
          },

          business: {
            key: "",
            image: "",
            name: "",
            address: "",
            info: "",
            website: "",
          },

          invoices: {
            key: "",
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
            toAddress: "",
          },

          payments: {
            key: "",
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
            paid: "",
          },

          tax: {
            key: "",
            price: "",
            percentage: "",
            name: "",
          },
          
          translate: {
            key: "",
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
            totalDue: ""  
          }        
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
      await axios.post(
        `${apiUrl}/api/settings`,
        {
          general: {
            key: "general",
            yearStart: updatedFormData.general.yearStart,
            yearEnd: updatedFormData.general.yearEnd,
            lineItems: updatedFormData.general.lineItems,
          },

          business: {
            key: "business",
            image: updatedFormData.business.image,
            name: updatedFormData.business.name,
            address: updatedFormData.business.address,
            info: updatedFormData.business.info,
            website: updatedFormData.business.website,
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
            toAddress: updatedFormData.invoices.toAddress,
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
            paid: updatedFormData.payments.paid,
          },

          tax: {
            key: "tax",
            price: updatedFormData.tax.price,
            percentage: updatedFormData.tax.percentage,
            name: updatedFormData.tax.name,
          },
          
          translate: {
            key: "translate",
            quoteLabel: updatedFormData.translate.quoteLabel,
            qutoeLabelPlural: updatedFormData.translate.qutoeLabelPlural,
            invoiceLabel: updatedFormData.translate.invoiceLabel,
            invoiceLabelPlural: updatedFormData.translate.invoiceLabelPlural,
            hrsQty: updatedFormData.translate.hrsQty,
            service: updatedFormData.translate.service,
            ratePrice: updatedFormData.translate.ratePrice,
            adjust: updatedFormData.translate.adjust,
            subTotal: updatedFormData.translate.subTotal,
            discount: updatedFormData.translate.discount,
            total: updatedFormData.translate.total,
            totalDue: updatedFormData.translate.totalDue  
          }        
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        saveFormData,
        formSubmitHandler,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};