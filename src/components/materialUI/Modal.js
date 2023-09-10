import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { API } from "../../api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ dish }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [link,setLink] = useState("")
  const [text, setText] = useState("");
  const handleClose = (e) => {
      setOpen(false);
     if (e.target.textContent === "Watch Video") {
      navigate(`/receipe/view/${dish.idMeal}`); // Navigating to the watch page based on meal ID
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${API}/search.php?s=${text}`)
      .then(({ data }) => console.log(data.strYoutube))
        
      .catch((err) => console.log(err));
  };

  

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Watch Recipe
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle color="black" id="alert-dialog-title">
          {`Instructions to be Followed for ${dish.strMeal}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText component="div" id="alert-dialog-description">
            {/* eslint-disable-next-line */}
            {dish.strInstructions.split(".").map((line, i) => {
              const instruction = line === "" ? null : line.trimStart();
              if (instruction !== null) {
                return (
                  <Typography key={i} gutterBottom variant="h6" component="p">
                    {`${i + 1}: ${instruction} \n`}
                  </Typography>
                );
              }
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Close</Button>
         
          <ToastContainer />
          <Button onClick={handleSubmit} autoFocus>
            Watch Video
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
