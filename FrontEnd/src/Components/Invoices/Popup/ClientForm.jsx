import React from "react";
import { TextField } from "@mui/material";

const ClientForm = ({ formData, handleChange }) => {
  return (
    <>
      <TextField
        margin="dense"
        label="Username"
        name="userName"
        value={formData.userName}
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
    </>
  );
};

export default ClientForm;