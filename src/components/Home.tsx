import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  ImageListItem,
} from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Portfolio - Raven Van Hove
          </Typography>
          <Stack 
            sx={{ pt: 4 }}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="between">
              <Typography
                variant="h6"
                align= "left"
                color="text.secondary"
                paragraph
              >
                This is a portfolio website built with React, TypeScript,
                Material-UI, and React Router.
                <br />
                It is a work in progress, and will be updated as I learn more about
                React and Material-UI.
                <br />
                I'm happy to show you my skills in different domains of the
                wonderfull world of IT
              </Typography>
              <ImageListItem sx={{ bgcolor: "background.paper", pt: 8, pb: 6,  width: 200, height: 200}}>
                <img
                  src={"https://thispersondoesnotexist.com/image"}
                  alt={"This person doesn't exist"}
                  loading="lazy"
                  style={{borderRadius: "50%"}}
                />
              </ImageListItem>
          </Stack>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;
