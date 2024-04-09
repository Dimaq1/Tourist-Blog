import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import style from './style.js'

function PrivacyPolicy() {
  return (
    <Container sx={style.containerBg} maxWidth='false'>

      <Container maxWidth='lg'>
        <Box sx={style.wrapp}>
          <Typography sx={style.mainTitle} component={'h2'}>Privacy Policy</Typography>
          <Typography sx={style.text}>Welcome to the mountain tourism blog's privacy policy page. In this document, we provide transparency about how we collect, use and protect your personal information when you use our website.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Information Collection</Typography>
          <Typography sx={style.text}>We collect personal information about you when you contact us through feedback forms, subscribe to our newsletter or leave comments on our website. This information may include your name, email address and other data that you provide voluntarily.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Use of Information</Typography>
          <Typography sx={style.text}>We use the information you provide to provide a better user experience on our site and to provide you with information about our services, promotions and blog updates. We do not sell, trade or share your personal information with third parties without your consent.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Data Protection</Typography>
          <Typography sx={style.text}>We take security measures to protect your personal information from unauthorized access, alteration, disclosure or destruction. We use standard data collection, storage and processing practices and secure communication protocols to protect your personal information.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Children's Privacy</Typography>
          <Typography sx={style.text}>Our website is not intended for use by anyone under the age of 18. We do not knowingly collect personal information about children. If you are a parent or guardian and know that your child has provided us with personal information, please contact us so that we can take appropriate action.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Consent</Typography>
          <Typography sx={style.text}>By using our website, you consent to our privacy policy and agree to our terms of use.</Typography>
        </Box>
        <Box sx={style.wrapp}>
          <Typography sx={style.title} component={'h3'}>Changes to our privacy policy</Typography>
          <Typography sx={style.text}>We reserve the right to make changes to our privacy policy. Any changes will be posted on this page. Once changes are posted, your continued use of the website will constitute your acceptance of those changes.</Typography>
        </Box>
      </Container>

    </Container>
  );
}

export default PrivacyPolicy;