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

const PopupCreateClientForm = ({ open, onClose }) => {
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

  const handleSubmit = async () => {
    try {
      await axios.post(`${apiUrl}/api/clients`, formData);

      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create Client</DialogTitle>

      <DialogContent dividers>
        <ClientForm
          formData={formData}
          handleChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupCreateClientForm;