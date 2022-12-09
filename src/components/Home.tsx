import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  ImageListItem,
  Grid,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
          <Grid container spacing={20}>
            <Grid item xs={12} sm={8}>
              <Typography
                variant="h6"
                align="left"
                color="text.secondary"
                paragraph
              >
                "Dear visitor, <br />
                <br />Are you looking for an experienced programmer who
                works with the latest technologies, such as React and Material
                UI? Look no further! My name is Raven and I am excited to show
                off my skills and knowledge on this portfolio website. <br />
                <br />On this
                website, you will see some of my most proud projects, along with
                a description of the features and technologies I have used. See
                how I have used the power of React and Material UI to build
                user-friendly and scalable front-end applications. <br />
                <br />I am proud to
                show off what I can do and I am always looking for new
                challenges. Please contact me if you are interested in my work
                or if you have any questions or comments. <br />
                <br />Thank you for visiting
                my portfolio website. I hope you will appreciate my work!<br />
                <br />
                Sincerely, <br />
                <br />Raven" 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImageListItem
                sx={{
                  bgcolor: "background.paper",
                  pt: 8,
                  pb: 6,
                  width: 200,
                }}
              >
                <img
                  src={"https://thispersondoesnotexist.com/image"}
                  alt={"This person doesn't exist"}
                  loading="lazy"
                  style={{ borderRadius: "50%" }}
                />
              </ImageListItem>
            </Grid>
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" onClick={() => navigate("/showcase")}>
              Look at all the different schoolproject I have done
            </Button>
            <Button variant="outlined">Go to the API-section</Button>
          </Stack>
        </Container>
      </Box>
    </main>
  );
};

export default Home;
