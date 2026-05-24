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

const PopupEditClientForm = ({
  open,
  onClose,
  clientId,
}) => {
  const [formData, setFormData] = useState({
    clientName: "",
    businessName: "",
    username: "",
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
    if (clientId) {
      fetchClient();
    }
  }, [clientId]);

  const fetchClient = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/clients/${clientId}`
      );

      setFormData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `${apiUrl}/api/clients/${clientId}`,
        formData
      );

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
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupEditClientForm;