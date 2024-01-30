import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Typography } from '@mui/material';
import pathes from '../../../constants/pathes';
import './style.scss'

function Account() {

  return (
    <Link to={pathes.account} className='account'>
      <AccountCircleOutlinedIcon />
      <Typography>
        Account
      </Typography>
    </Link>
  );
}

export default Account;