import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography, Box, Container } from '@mui/material';
import pathes from '../../../constants/pathes';
import thunks from '../../../store/blogPosts/thunks';
import Line from '../Line/Line';
import EastIcon from '@mui/icons-material/East';

function ContentHomeBlogs() {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blogPosts.blogPosts)


  useEffect(() => {
    dispatch(thunks.fetchBlogPosts());
  }, [])

  return (
    blogPosts.length ?
      <Container sx={{
        background: '#0b1d26',
      }} maxWidth='false'>
        <Container maxWidth='lg'>
          <List>
            {blogPosts.map((item, index) =>
              <ListItem sx={{ gap: '50px', p: '30px 0' }} key={index}>
                {console.log(index)}
                <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: '15px 20px', sm: '20px 30px', md: '0', }, border: { xs: '1px solid rgba(251, 215, 132, 1)', borderRadius: '30px', md: 'none', }, gap: { xs: '20px', sm: '30px' }, maxWidth: { xs: 500, md: 630 }, order: index % 2 !== 0 ? 2 : 0, marginLeft: index % 2 !== 0 ? 'auto' : 0 }}>
                  <Typography sx={{
                    color: 'rgba(251, 215, 132, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3.75,
                    fontWeight: 800,
                    letterSpacing: 6,
                    textTransform: 'uppercase',
                    fontSize: { xs: 12, sm: 18 },
                  }}>
                    <Line />
                    {item.name}
                  </Typography>

                  <Typography sx={{ fontSize: { xs: 30, sm: 40, md: 50, lg: 60 }, lineHeight: 1.2, letterSpacing: 0 }} variant="h2" component={'h2'}>{item.title}</Typography>

                  <Typography sx={{ fontSize: { xs: 16, md: 18 }, fontWeight: 700, lineHeight: 1.7, letterSpacing: 0 }}>{item.description}</Typography>

                  <Link style={{ alignItems: 'center', maxWidth: 'fit-content', gap: '10px', textTransform: 'lowercase', color: 'rgba(251, 215, 132, 1)' }} to={pathes.blog}>
                    read more
                    <EastIcon />
                  </Link>
                </Box>
                <Typography component={'img'} sx={{ maxHeight: { md: 500, lg: 720, }, display: { xs: 'none', md: 'block' } }} src={item.image} alt="#" />
              </ListItem>)}
          </List>
        </Container>
      </Container> : null
  )
}

export default ContentHomeBlogs;