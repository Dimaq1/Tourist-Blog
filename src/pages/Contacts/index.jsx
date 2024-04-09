import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { URL_INSTAGRAM, URL_TWITTER } from '../../constants/social.js';
import style from './style.js'

function Contacts() {
  return (
    <Container sx={style.containerBg} maxWidth='false'>

      <Container maxWidth='lg'>

        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h2'}>Contacts</Typography>
          <Grid container rowSpacing={{ xs: 2.5, sm: 3.75 }} columns={{ xs: 6, sm: 12 }}>
            <Grid display={'flex'} justifyContent={'center'} item xs={6}>
              <Link href="tel:+1234567890" sx={style.link}>Phone: +1234567890</Link>
            </Grid>
            <Grid display={'flex'} justifyContent={'center'} item xs={6}>
              <Link href="mailto:mntn@gmail.com" sx={style.link}>Email: mntn@gmail.com</Link>
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
              <Typography sx={style.link}>Address: Los-Angeles, 123 Gage Avenue</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography sx={style.title} component={'h2'}>Socials</Typography>
          <Grid container rowSpacing={{ xs: 2.5, sm: 0 }} columns={{ xs: 6, sm: 12 }}>
            <Grid display={'flex'} justifyContent={'center'} item xs={6}>
              <Link target="_blank" rel="noopener noreferrer" sx={style.link} href={URL_INSTAGRAM}>
                <InstagramIcon sx={style.socialLinkIcon} /> - mntn123
              </Link>
            </Grid>
            <Grid display={'flex'} justifyContent={'center'} item xs={6}>
              <Link target="_blank" rel="noopener noreferrer" sx={style.link} href={URL_TWITTER}>
                <TwitterIcon sx={style.socialLinkIcon} /> - mntn321
              </Link>
            </Grid>
          </Grid>
        </Box>

      </Container>

    </Container>
  );
}

export default Contacts;