import "./style.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Rating, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_USER_ID,
} from "../../constants/email.constants";
import emailjs from "@emailjs/browser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxWidth: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 30,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export default function EmailPopup() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    rating: "",
    name: "",
    email: "",
    contact: "",
    description: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!localStorage.getItem("isFeedbackSend")) {
      setTimeout(() => {
        handleOpen();
      }, 60000);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    handleClose();
    localStorage.setItem("isFeedbackSend", true);
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID)
      .then(
        (result) => {
          console.log("Success:", result.text);
          setShowPopup(false);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            I Value Your Feedback! ⏱
          </Typography>
          <p>
            Your thoughts and suggestions are important to me. Please fill out
            the form below to share your feedback.
          </p>
          <TextField
            id="outlined-basic"
            label="Name"
            name="name"
            placeholder="Enter your name"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter your email"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            type="number"
            name="contact"
            label="Contact No."
            placeholder="Enter your mobile no"
            variant="outlined"
            onChange={handleChange}
          />
          <textarea
            name="description"
            id=""
            placeholder="Description"
            className="textarea"
            onChange={handleChange}
          ></textarea>
          <div className="rating-container">
            <span>Ratings : </span>
            <Rating
              name="rating"
              defaultValue={0}
              precision={0.5}
              size="large"
              onChange={handleChange}
            />
          </div>

          <Button onClick={sendEmail} variant="outlined" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
