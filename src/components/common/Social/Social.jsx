import React from 'react';
import { Box, Link } from '@mui/material';
import './style.scss'

function Social() {
  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '20px' }}>
      <p style={{ writingMode: 'vertical-rl' }}>Follow us</p>
      <Link className={'link-social'} href={'https://www.instagram.com/'} >
        <img style={{ display: 'block' }} src="../../public/images/instagram.svg" alt="" />
      </Link>
      <Link className={'link-social'} href={'https://twitter.com/'}>
        <img style={{ display: 'block' }} src="../../public/images/twitter.svg" alt="" />
      </Link>
    </Box>
  );
}

export default Social;