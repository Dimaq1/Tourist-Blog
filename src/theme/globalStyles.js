import { GlobalStyles } from '@mui/material';

const globalStyles = (
  <GlobalStyles styles={
    (theme) => ({
      body: {
        fontFamily: 'Gilroy, sans-serif',
        fontSize: '18px',
        color: theme.palette.primary.main,
      }
    })
  } />
);


export default globalStyles