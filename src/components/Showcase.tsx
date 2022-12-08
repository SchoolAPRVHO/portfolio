import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { PhotoCamera } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { IShowcase } from '../interfaces';

// const showcases = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const showcases: IShowcase[] = [
    {
        id: 1,
        title: 'Button Counter',
        description: 'This application is desigend to create counters and add or subtract one with a punch of a button',
        path: "/showcase/1"
        },
    {
        id: 2,
        title: 'Color Picker',
        description: 'This application is desigend to get one of the presetcolors to choose the color of the square below',
        path: "/showcase/2"
        },
    {
        id: 3,
        title: 'Quiz Application',
        description: 'This application is desigend to get questions from a QuizAPI and to show you if zou were right or not',
        path: "/showcase/3"
        },
    {
        id: 4,
        title: 'Slot machines',
        description: 'This application is desigend to show you slotmachines and to check if you won',
        path: "/showcase/4"
        },
    {
        id: 5,
        title: 'Tic Tac Toe',
        description: 'This application is desigend to play the game Tic Tac Toe',
        path: "/showcase/5"
        },
]

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
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {showcases.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                    variant="contained" 
                    sx={{ display: 'flex', alignSelf: 'center', margin: '0 auto' }}
                    onClick={(e) => navigate(card.path)}>check it out</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      </>
  );
}

export default Showcase;