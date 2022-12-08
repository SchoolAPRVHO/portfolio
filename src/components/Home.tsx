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
              Beste bezoeker,<br/><br/> Ben je op zoek naar een ervaren programmeur die
              werkt met de modernste technologieën, zoals React en Material UI?
              Zoek niet verder! Mijn naam is Raven en ik ben enthousiast om mijn
              vaardigheden en kennis te laten zien op deze portfolio-website.<br/><br/> Op
              deze website zult u enkele van mijn meest trotse projecten zien,
              samen met een beschrijving van de functies en technologieën die ik
              heb gebruikt. Bekijk hoe ik de kracht van React en Material UI heb
              gebruikt om gebruiksvriendelijke en schaalbare front-end
              applicaties te bouwen.<br/><br/> Ik ben er trots op om te laten zien wat ik
              kan doen en ik ben altijd op zoek naar nieuwe uitdagingen. Neem
              contact met mij op als je geïnteresseerd bent in mijn werk of als
              je vragen of opmerkingen hebt.<br/><br/> Bedankt voor het bezoeken van mijn
              portfolio-website. Ik hoop dat je mijn werk zult waarderen!<br/><br/> Met
              vriendelijke groet,<br/><br/> Raven
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
