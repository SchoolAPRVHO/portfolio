import { createTheme } from "@mui/material";

const modernTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
          main: '#3F51B5', // indigo
        },
        secondary: {
          main: '#00BCD4', // teal
        },
        background: {
          default: '#ECEFF1', // blue gray
        },
        error: {
          main: '#F44336', // red
        }
      },
    });

export default modernTheme;
