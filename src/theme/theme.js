import { createTheme } from '@mui/material/styles';
import 'normalize.css';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#D3D8D7',
      main: '#fff',
    },
    secondary: {
      main: 'rgba(251, 215, 132, 1)',
    },
    background: {
      fogging: 'linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%)',
    }
  },
  typography: {
    fontFamily: 'Gilroy-Bold, sans-serif',
    fontSize: 18,
    h1: {
      fontFamily: 'Chronicle Display, sans-serif',
    },
    body1: {
      fontSize: 18,
    },
  },
});

export default theme