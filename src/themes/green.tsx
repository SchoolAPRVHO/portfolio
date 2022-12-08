import { createTheme } from "@mui/material";

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // green
    },
    secondary: {
      main: '#8BC34A', // light green
    },
    background: {
      default: '#E0F2F1', // light green
    },
    error: {
      main: '#F44336', // red
    },
  },
});

export default greenTheme;
