import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    general: {},
    business: {},
    invoices: {},
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

  return (
    <FormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);