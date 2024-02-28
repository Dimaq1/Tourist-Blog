import React from 'react';
import { Box, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import style from './style';

function Email() {

  return (
    <Box sx={style.email}>
      <Link sx={style.emailLink} href="mailto:mntn@gmail.com">mntn@gmail.com</Link>
      <EmailIcon sx={style.emailLinkIcon} />
    </Box>
  );
}

export default Email;