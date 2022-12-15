import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Container from "@mui/material/Container";
import { sendEmail } from "../services";
import Confirmation from "./core/Confirmation";

const Contact = () => {
  const [sendedContact, setSendedContact] = React.useState<boolean>(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name =
      data.get("firstName")!.toString() +
      " " +
      data.get("lastName")!.toString();

    sendEmail(
      data.get("email")!.toString(),
      name,
      data.get("question")!.toString()
    );

    console.log({
      email: data.get("email"),
      name: name,
      question: data.get("question"),
    });

    setSendedContact(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {sendedContact ? (
          <Confirmation />
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <ContactMailIcon />
            </Avatar>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    style={{
                      width: "100%",
                      borderColor: "#ccc",
                      borderRadius: "0.3rem",
                      padding: "1rem",
                      fontFamily: "'Roboto','Helvetica','Arial',sans-serif;",
                      fontSize: "1rem",
                      color: "rgba(0, 0, 0, 0.87)",
                      backgroundColor: "rgba(0,0,0,0)",
                    }}
                    name="question"
                    id="question"
                    cols={30}
                    rows={10}
                    placeholder="Your question *"
                    required
                  ></textarea>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send email
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Contact;
