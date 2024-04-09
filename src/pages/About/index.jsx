import React from 'react';
import { Box, Container, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import ContentTitle from '../../components/ContentTitle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import style from './style';

function About() {
  return (
    <>
      <ContentTitle
        title={'About MNTN: Your Ultimate Destination for Mountain Adventure'}
      />
      <Container maxWidth='false' sx={style.container}>
        <Container maxWidth='lg'>
          <Typography sx={style.subTitle}>Welcome to MNTN, your premier online hub for all things mountain adventure! Whether you're an experienced mountaineer seeking new challenges or a novice looking to embark on your first high-altitude expedition, MNTN is here to guide and inspire you every step of the way.</Typography>
          <Box sx={style.wrapp}>
            <Typography sx={style.wrappTitle} variant="h3" component={'h3'}>Our Mission</Typography>
            <Typography sx={style.image} component={'img'} src='./images/about-mission.jpg'></Typography>
            <Typography sx={style.text}>At MNTN, our mission is simple: to connect mountain enthusiasts with the resources, gear, and information they need to explore the world's most breathtaking peaks safely and responsibly. We believe that the mountains are not just a destination, but a way of life, and we're passionate about helping you make the most of your alpine adventures.</Typography>
          </Box>
          <Box sx={style.wrapp}>
            <Typography sx={style.wrappTitle} variant="h3" component={'h3'}>What We Offer</Typography>
            <List>
              <ListItem sx={style.listItem}>
                <ListItemIcon sx={style.listItemIcon}>
                  <FiberManualRecordIcon sx={style.icon} />
                </ListItemIcon>
                <Typography sx={style.text}>Expert Guidance: Our team of experienced mountaineers and outdoor enthusiasts is here to provide you with expert advice, tips, and recommendations to help you plan the perfect mountain getaway.</Typography>
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon sx={style.listItemIcon}>
                  <FiberManualRecordIcon sx={style.icon} />
                </ListItemIcon>
                <Typography sx={style.text}>Comprehensive Resources: From trail maps and route guides to gear reviews and safety tips, we've got everything you need to prepare for your next expedition.</Typography>
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon sx={style.listItemIcon}>
                  <FiberManualRecordIcon sx={style.icon} />
                </ListItemIcon>
                <Typography sx={style.text}>Community Support: Join our vibrant community of fellow mountain lovers to share stories, ask questions, and connect with like-minded adventurers from around the globe.</Typography>
              </ListItem>
              <ListItem sx={style.listItem}>
                <ListItemIcon sx={style.listItemIcon}>
                  <FiberManualRecordIcon sx={style.icon} />
                </ListItemIcon>
                <Typography sx={style.text}>Environmental Stewardship: We're committed to preserving and protecting the fragile ecosystems of the world's mountain regions. Through education, advocacy, and responsible tourism practices, we're working to ensure that future generations can enjoy these majestic landscapes for years to come.</Typography>
              </ListItem>
            </List>
          </Box>
          <Box sx={style.wrapp}>
            <Typography sx={style.wrappTitle} variant="h3" component={'h3'}>Get Started Today</Typography>
            <Typography component={'img'} src='./images/about-start.jpg' sx={style.image}></Typography>
            <Typography sx={style.text}>Ready to start your mountain adventure? Explore our website to discover the endless possibilities that await you in the world's most spectacular mountain ranges. Whether you're dreaming of scaling towering peaks, trekking through pristine wilderness, or simply soaking in the stunning scenery, MNTN is your ultimate companion for all things mountain-related.</Typography>
            <Typography sx={style.text}>Join us as we embark on this incredible journey together. The mountains are calling – are you ready to answer?</Typography>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default About;