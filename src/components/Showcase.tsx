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
    title: "Button Counter",
    description:
      "This application is desigend to create counters and add or subtract one with a punch of a button",
    path: "/showcase/1",
  },
  {
    id: 2,
    title: "Color Picker",
    description:
      "This application is desigend to get one of the presetcolors to choose the color of the square below",
    path: "/showcase/2",
  },
  {
    id: 3,
    title: "Quiz Application",
    description:
      "This application is desigend to get questions from a QuizAPI and to show you if zou were right or not",
    path: "/showcase/3",
  },
  {
    id: 4,
    title: "Slot machines",
    description:
      "This application is desigend to show you slotmachines and to check if you won",
    path: "/showcase/4",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    description: "This application is desigend to play the game Tic Tac Toe",
    path: "/showcase/5",
  },
];

const theme = createTheme();

const Showcase = () => {
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
              On this page, you can find an overview of the projects that I have
              worked on.
              <br />
              <br />
              One of my projects is the Button Counter. This is a simple
              application that allows users to keep track of the number of times
              a button is clicked. It is a great tool for counting things like
              the number of times a user performs an action on a website.
              <br />
              <br />
              Another project that I have worked on is the Color Picker. This is
              a fun and useful tool that allows users to select a color from a
              range of options. It is great for choosing colors for design
              projects or for experimenting with different color combinations.
              <br />
              <br />
              I have also developed a Quiz Application. This is a versatile tool
              that can be used to train your knowledge on any topic. It allows
              users to answer multiple-choice or true/false questions.
              <br />
              <br />
              In addition to these projects, I have also created Slot machines
              and Tic Tac Toe. The Slot machines are a fun and exciting way to
              pass the time, and the Tic Tac Toe game is a classic that never
              goes out of style.
              <br />
              <br />I am always looking for new challenges and opportunities to
              create interesting and useful applications. Thank you for visiting
              my website and taking the time to learn about my work!
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

export default Showcase;
