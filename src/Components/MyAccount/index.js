import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...PaperProps} />
    </Draggable>
  );
}

const MyAccount = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div>
      <Typography sx={{ color: "black" }} onClick={handleClickOpen}>
        My Account
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          <img
            src={user.image}
            alt="user"
            height="65px"
            width="60px"
            style={{ marginRight: "15px", borderRadius: "50%" }}
          />
          {user.firstName + " " + user.lastName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontWeight: "700", color: "blue" }}>
            Email: {user.email}
          </DialogContentText>
          <DialogContentText style={{ fontWeight: "700", color: "green" }}>
            Phone Number: {user.phone}
          </DialogContentText>
          <DialogContentText style={{ fontWeight: "700", color: "red" }}>
            Country: {user.country}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyAccount;
