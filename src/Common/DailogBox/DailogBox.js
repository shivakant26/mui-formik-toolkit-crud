import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import React, { useState } from "react";

const DailogBox = (props) => {
    console.log(props)
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={props.onClose}>
            Cancel
          </Button>
          <Button variant="outlined" color="success" onClick={props.sure} autoFocus>
            Sure
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DailogBox;
