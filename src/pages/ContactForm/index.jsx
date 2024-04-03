import React from 'react';
import { useFormik } from 'formik';
import { Button, Container, Typography, TextField, Box } from '@mui/material';
import * as Yup from 'yup';
import { postUser } from '../../services/users.js';
import style from './style.js';

function ContactForm() {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z]+$/, 'Only letters are allowed')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[A-Za-z]+$/, 'Only letters are allowed')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email format'
      )
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values,) => {
      postUser(values)
      console.log(values);
    },
  });

  return (

    <Container sx={style.containerBg} maxWidth='false'>
      <Container maxWidth='lg'>
        <Typography sx={style.title} component={'h2'}>Signup</Typography>
        <Box component={'form'} sx={style.form} onSubmit={formik.handleSubmit}>
          <Box sx={style.wrapp}>
            <TextField
              fullWidth
              color="secondary"
              focused
              id="firstName"
              name="firstName"
              label="First name"
              sx={style.textField}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              color="secondary"
              focused
              id="lastName"
              name="lastName"
              label="Last name"
              sx={style.textField}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Box>
          <TextField
            fullWidth
            color="secondary"
            focused
            id="email"
            name="email"
            label="Email"
            sx={style.textField}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button sx={style.button} variant="outlined" size="large" type="submit">Submit</Button>
        </Box>
      </Container>
    </Container>
  );
}

export default ContactForm;



