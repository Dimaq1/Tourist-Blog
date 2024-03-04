import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Typography } from '@mui/material';
import pathes from '../../../constants/pathes';
import style from './style.js'

function Account() {

  return (
    <Link className='account' to={pathes.account}>
      <Box sx={style.account}>
        <AccountCircleOutlinedIcon />
        <Typography>
          Account
        </Typography>
      </Box>
    </Link>
  );
}

export default Account;