import { Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <Typography variant="h3" component="h3">Thank you for your message</Typography><br/>
      <Typography variant="body1">
        Dear,
        <br />
        <br />
        Thank you for filling out our contact form. We will contact you as soon
        as possible to answer your questions and discuss any further steps.
        <br />
        <br />
        Best regards,
        <br />
        Raven Van Hove
      </Typography><br/>
      <NavLink to={"/"} style={{textDecoration: "none"}}>
        <Button title="Back to the homepage" variant="contained">
          Back to the homepage
        </Button>
      </NavLink>
    </>
  );
};

export default Confirmation;
