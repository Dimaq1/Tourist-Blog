import React from 'react';
import { GlobalStyles } from '@mui/material';


function CustomGlobalStyles() {

  return (

    <GlobalStyles styles={
      (theme) => ({
        body: {
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.fontSize,
          color: theme.palette.primary.main,
        },
        a: {
          textDecoration: 'none',
          color: theme.palette.primary.main,
          display: 'flex',
        },
        'h1,h2,h3,h4,h5,h6': {
          fontFamily: theme.typography.h1.fontFamily
        }
      })
    } />
  );
}

export default CustomGlobalStyles;
