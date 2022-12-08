import { createTheme } from "@mui/material";


const orangeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5722',
    },
    secondary: {
      main: '#FF1744',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
    background: {
      default: '#FFF3E0',
    }
  },
});

export default orangeTheme;
