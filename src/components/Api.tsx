import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { PhotoCamera } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IShowcase } from "../interfaces";

// const showcases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const showcases: IShowcase[] = [
  {
    id: 1,
    title: "Dad Joke",
    description:
      "This application is amazing to get a laugh",
    path: "/api/1",
  },
  {
    id: 2,
    title: "Kittyfetcher",
    description:
      "You want to see something cute? Look at this kitty",
    path: "/api/2",
  }
];

const Api = () => {
  const navigate = useNavigate();
  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
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
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My projects
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="text.secondary"
              paragraph
            >
              On this page, you can find some of the projects that need api's to work
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {showcases.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      sx={{
                        display: "flex",
                        alignSelf: "center",
                        margin: "0 auto",
                      }}
                      onClick={(e) => navigate(card.path)}
                    >
                      check it out
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Api;
