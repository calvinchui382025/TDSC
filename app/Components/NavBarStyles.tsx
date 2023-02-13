"use client"

import styled from "@emotion/styled"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export const StyledListItemButton = styled(ListItemButton)({
  color: 'red',
})

export const StyledButton = styled(Button)({
  backgroundColor: 'transparent',
  borderRadius: '40px',
  boxShadow: 'none',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(52,124,245)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  },
})

export const StyledAppBar = styled(AppBar)({
  alignItems: 'center',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
  '@media (max-width: 600px)': {
    alignItems: 'flex-start',
  },
})