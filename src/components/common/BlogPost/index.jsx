import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import thunks from '../../../store/blogPosts/thunks.js';
import Line from '../Line/Line.jsx';
import style from './style.js';

function BlogPost() {
  const { postId } = useParams();
  const blogPost = useSelector(state => state.blogPosts.blogPost)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchBlogPost(postId));
  }, [])


  return (Object.keys(blogPost).length ?
    <Container sx={style.container} maxWidth='false'>
      <Container maxWidth='lg' sx={style.inner}>
        <Typography sx={style.innerName}>
          <Line />
          {blogPost.name}
        </Typography>
        <Typography sx={style.innerTitle} variant="h2" component={'h2'}>{blogPost.title}</Typography>
        <Typography sx={style.innerImage} component={'img'} src={blogPost.imagePrimary} alt="#" />
        <Typography sx={style.innerText}>{blogPost.text}</Typography>
      </Container >
    </Container >
    : null
  );
}

export default BlogPost;