import React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Grid, Container } from '@mui/material';
import style from './style.js'

function Team() {
  return (
    <Container sx={style.containerBg} maxWidth='false'>
      <Container maxWidth='md'>
        <Typography sx={style.title} component={'h2'}>Our Team</Typography>
        <Grid container columnSpacing={{ xs: 2.5, sm: 3.75 }} rowSpacing={{ xs: 2.5, sm: 3.75 }} columns={{ xs: 6, sm: 12 }}>
          <Grid display={'flex'} justifyContent={'center'} item xs={6}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="./public/images/editor.jpg"
                  alt="editor"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Jack
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Editor
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid display={'flex'} justifyContent={'center'} item xs={6}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="./public/images/marketer.jpg"
                  alt="marketer"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Omara
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Marketer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'center'}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="./public/images/photographer.jpg"
                  alt="photographer"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sam
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Photographer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'center'}>
            <Card sx={{ width: '100%' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="./public/images/manager.jpg"
                  alt="manager"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Dean
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Manager
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Team;


