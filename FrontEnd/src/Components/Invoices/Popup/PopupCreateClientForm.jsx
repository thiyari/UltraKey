import React, { useState } from "react";
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

const PopupCreateClientForm = ({ open, onClose, refreshClients }) => {
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

  const handleSubmit = async () => {
  try {
      await axios.post(
        `${apiUrl}/api/clients`,
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
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setFormData({
          businessName: "",
          userName: "",
          email: "",
          password: "",
          address: "",
          extraInfo: "",
          firstName: "",
          lastName: "",
          website: "",        
        })
        refreshClients();
        onClose();
      } catch (err) {
        alert(err);
      }
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Client</DialogTitle>

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
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupCreateClientForm;