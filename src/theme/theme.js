import { createTheme } from '@mui/material/styles';
import 'normalize.css';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Chilanka, sans-serif"
        },
        h1: {
          fontSize: "5.5rem",
        },
        p: {
          fontSize: "1.4rem"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "18px"
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 1)',
    },
  },
  typography: {
    h1: {
      fontSize: '88px'
    }
  }
});



export default theme