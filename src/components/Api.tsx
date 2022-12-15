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

// const api = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const api: IShowcase[] = [
  {
    id: 1,
    title: "Dad Joke",
    description: "This application is amazing to get a laugh",
    path: "/api/1",
  },
  {
    id: 2,
    title: "Kittyfetcher",
    description: "You want to see something cute? Look at this kitty",
    path: "/api/2",
  },
  {
    id: 3,
    title: "QR-code generator",
    description: "When you need a QR-code, this is the place to be",
    path: "/api/3",
  }
];

const Api = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
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
              Welcome to our page showcasing different APIs in action! APIs, or
              application programming interfaces, are tools that allow different
              software programs to communicate and exchange data with each
              other. On this page, we will demonstrate three different APIs: the
              dad joke API, the kitty fetcher API, and the QR code API.
              <br />
              <br />
              The dad joke API allows users to access a database of cheesy and
              corny jokes that are perfect for groan-inducing fun. The kitty
              fetcher API allows users to search for and retrieve pictures of
              adorable cats. And finally, the QR code API allows users to
              generate QR codes for a variety of purposes, such as sharing
              contact information or linking to a website.
              <br />
              <br />
              We hope you enjoy exploring these APIs and seeing how they can be
              used in creative and interesting ways.
            </Typography>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "background.main",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md" style={{textAlign:"center"}}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={8}>
            <input
              type={"text"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{
                width: "100%",
                height: "50px",
                fontSize: "20px",
                padding: "10px",
              }}
            ></input>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInputValue("")}
            >Delete Searchparameters
            </Button>
            </Grid>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {api.filter((card)=> {
              if(inputValue === ""){
                return card;
              } else if(card.title.toLowerCase().includes(inputValue.toLowerCase())){
                return card;
              }
            }).map((card, index) => (
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
