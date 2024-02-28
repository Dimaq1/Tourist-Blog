import { AppBar, Box, Container, List, ListItem, Typography, Divider } from '@mui/material';
import React from 'react';
import Logo from '../../common/Logo/Logo';
import style from './style';
import pathes from '../../../constants/pathes';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <Container component={'footer'} sx={style.footer} maxWidth='false'>
      <Divider sx={style.divider} absolute={true} />
      <Container sx={style.container} maxWidth='lg'>
        <Box sx={style.wrappText}>
          <Box>
            <Logo />
            <Typography sx={style.textNotes}>Get out there & discover your next slope, mountain & destination!</Typography>
          </Box>
          <Typography sx={style.textCopyright}>Copyright 2024 MNTN, Inc. Terms & Privacy</Typography>
        </Box>

        <AppBar sx={style.navbar} component={'nav'}>
          <Box>
            <Typography sx={style.navbarTitle} variant="h6" component="h3">More on The Blog</Typography>
            <List>
              <ListItem sx={style.listItem}>
                <Link to={pathes.about}>About MNTN</Link>
              </ListItem>
              <ListItem sx={style.listItem}>
                <Link to="mailto:mntn@gmail.com">Write For Us</Link>
              </ListItem>
              <ListItem sx={style.listItem}>
                <Link to={pathes.contact}>Contact Us</Link>
              </ListItem>
              <ListItem sx={style.listItem}>
                <Link to={pathes.privacyPolicy}>Privacy Policy</Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography sx={style.navbarTitle} variant="h6" component="h3">More on MNTN</Typography>
            <List>
              <ListItem sx={style.listItem}>
                <Link to={pathes.team}>The Team</Link>
              </ListItem>
              <ListItem sx={style.listItem}>
                <Link to={pathes.jobs}>Jobs</Link></ListItem>
            </List>
          </Box>
        </AppBar>

      </Container>
    </Container >
  );
}

export default Footer;