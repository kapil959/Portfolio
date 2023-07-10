import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import { Button, Container, createStyles } from "@mui/material";

export const ContactMe = () => {
  const [inValidEmail, setInvalidEmail] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mgee6dp",
        "template_6j3jt9v",
        form.current,
        "AQxDjbsKFZrH6okqR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const validateEmail = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setInvalidEmail("");
    } else {
      setInvalidEmail("Invalid Email");
    }
    if (e.target.value.length === 0) {
      setInvalidEmail("");
    }
  };
  return (
    <section id="contactMe">
      <Container maxWidth="xl">
        <header>
          <h1>Contact Me</h1>
        </header>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
          className="displayFlex"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="user_name"
          />
          <TextField
            error //{inValidEmail}
            id={inValidEmail ? "borderColorRed" : "outlined-basicError"}
            label="Email"
            variant="outlined"
            name="user_email"
            helperText={inValidEmail}
            // className={inValidEmail ? "borderColorRed" : ""}
            onBlur={validateEmail}
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            name="message"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            value="send"
            variant="contained"
            className="btnClass"
          >
            Send Email
          </Button>
        </Box>
      </Container>
    </section>
  );
};
