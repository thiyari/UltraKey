import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import axios from "axios";
import ClientForm from "./ClientForm";

const apiUrl = import.meta.env.VITE_API_SERVER_URL;

const PopupEditClientForm = ({open,onClose,username,refreshClients}) => {
  const [clientId, setClientId] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    userName: "",
    email: "",
    password: "",
    address: "",
    extraInfo: "",
    firstName: "",
    lastName: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (username) {
      setFormData((prev)=>({...prev, username: username}))
      fetchClient();
    }
  }, [username]);

  const fetchClient = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/clients`
      );

      const data = response.data.data.find((item)=>(item.username === username))
      setClientId(data?._id)
      setFormData({
        businessName: data?.businessOrClientName,
        userName: data?.username,
        email: data?.email,
        password: data?.password,
        address: data?.address,
        extraInfo: data?.extraInfo,
        firstName: data?.firstname,
        lastName: data?.lastname,
        website: data?.website,
      })
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `${apiUrl}/api/clients/${clientId}`,
        {
              businessOrClientName: formData.businessName,
              email: formData.email,
              username: formData.userName,
              password: formData.password,
              address: formData.address,
              extraInfo: formData.extraInfo,
              firstname: formData.firstName,
              lastname: formData.lastName,
              website: formData.website
        }
      );
      refreshClients();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Client</DialogTitle>

      <DialogContent dividers>
        <ClientForm
          formData={formData}
          handleChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>

        <Button type="button" variant="contained" onClick={handleSubmit}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupEditClientForm;