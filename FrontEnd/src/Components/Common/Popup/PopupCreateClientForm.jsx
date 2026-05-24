import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import axios from 'axios';

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





  const handleSubmit = () => {
    console.log("Submitted data:", formData);

    // 👉 You can send API request here
    // axios.post("/api/client", formData)

    onClose(); // close dialog after submit
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Client</DialogTitle>

      <DialogContent dividers>
        <TextField
          margin="dense"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Client Name"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Business/Client Name"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          fullWidth
        />


        <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
        />

        <TextField
          margin="dense"
          label="Extra Info"
          name="extraInfo"
          value={formData.extraInfo}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
        />

        <TextField
          margin="dense"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          margin="dense"
          label="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupCreateClientForm;