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
  },
  typography: {
    fontFamily: 'Gilroy-Bold, sans-serif',
    fontSize: 18,
    h1: {
      fontSize: '88px',
      fontFamily: 'Chronicle Display, sans-serif',
    },
    body1: {
      fontSize: '18px',
    },
  },
});



export default theme