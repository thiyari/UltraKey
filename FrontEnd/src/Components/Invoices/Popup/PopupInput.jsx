import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { TextField } from "@mui/material";

const PopupInput = ({open, onClose, onInput}) => {

  const [input, setInput] = useState("");
  const handleSubmit = async () => {
      onInput(input);
      onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add Input</DialogTitle>

      <DialogContent dividers>
              <TextField
                margin="dense"
                label="input"
                name="input"
                fullWidth
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" onClick={handleSubmit}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PopupInput
