import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, Typography, Box, Container, Button } from '@mui/material';
import pathes from '../../constants/pathes.js';
import thunks from '../../store/blogPosts/thunks.js';
import Line from '../../components/Line/index.jsx';
import EastIcon from '@mui/icons-material/East';
import style from './style.js';
import './style.scss'

function Blogs() {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blogPosts.blogPosts)
  const location = useLocation();
  const isBlogPath = location.pathname.includes(pathes.blog);

  useEffect(() => {
    dispatch(thunks.fetchBlogPosts());
  }, [])

  return (
    blogPosts.length ?
      <Container sx={style.container} maxWidth='false'>
        <Container maxWidth='lg'>
          <List>
            {blogPosts.map((item, index) =>
              <ListItem sx={style.listItem} key={index}>
                <Box sx={{ ...style.inner, order: index % 2 !== 0 ? 2 : 0, marginLeft: index % 2 !== 0 ? 'auto' : 0 }}>
                  <Typography sx={style.innerName}>
                    <Line />
                    {item.name}
                  </Typography>

                  <Typography sx={style.innerTitle} variant="h2" component={'h2'}>{item.title}</Typography>

                  <Typography sx={style.innerDescription}>{item.description}</Typography>

                  <Link className='blog-button' to={isBlogPath ? `${item.id}` : `${pathes.blog}/${item.id}`}>
                    <Button sx={style.innerButton} variant="text">
                      read more
                      <EastIcon />
                    </Button>
                  </Link>

                </Box>
                <Typography component={'img'} sx={style.innerImage} src={item.imageSecondary} alt="#" />
              </ListItem>)}
          </List>
        </Container>
      </Container> : null
  )
}

export default Blogs;