import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Typography } from '@mui/material';
import pathes from '../../../constants/pathes';
import style from './style.js'

function Account() {

  return (
    <Link to={pathes.account} style={style.account}>
      <AccountCircleOutlinedIcon />
      <Typography style={style.accountText} className='account__text'>
        Account
      </Typography>
    </Link>
  );
}

export default Account;