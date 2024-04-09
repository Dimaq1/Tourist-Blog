import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import style from './style.js'
import { URL_INSTAGRAM, URL_TWITTER } from '../../constants/social.js';

function Social() {
  return (
    <Box sx={style.socialContainer}>
      <Typography sx={style.socialText}>Follow us</Typography>
      <Link target="_blank" rel="noopener noreferrer" sx={style.socialLink} href={URL_INSTAGRAM} >
        <InstagramIcon sx={style.socialLinkIcon} />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" sx={style.socialLink} href={URL_TWITTER}>
        <TwitterIcon sx={style.socialLinkIcon} />
      </Link>
    </Box>
  );
}

export default Social;