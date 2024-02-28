import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography, Box, Container } from '@mui/material';
import pathes from '../../../constants/pathes';
import thunks from '../../../store/blogPosts/thunks';
import Line from '../Line/Line';
import EastIcon from '@mui/icons-material/East';
import style from './style.js';
import './style.scss'

function ContentHomeBlogs() {
  const dispatch = useDispatch();
  const blogPosts = useSelector(state => state.blogPosts.blogPosts)

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

                  <Link className='blog-button' to={pathes.blog}>
                    read more
                    <EastIcon />
                  </Link>
                </Box>
                <Typography component={'img'} sx={style.innerImage} src={item.image} alt="#" />
              </ListItem>)}
          </List>
        </Container>
      </Container> : null
  )
}

export default ContentHomeBlogs;