"use client"

import styled from "@emotion/styled"
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Drawer, IconButton } from '@mui/material';
import { mainColor } from 'app/utils';
//======================================================
export const StyledAppBar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: 'fixed',
  top: 0,
  zIndex: 100,
})
export const StyledListItemButton = styled(ListItemButton)({
  backgroundColor: 'transparent',
  // borderRadius: '40px',
  boxShadow: 'none',
  color: 'gainsboro',
  '&:hover': {
    backgroundColor: mainColor,
    color: 'gainsboro',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
  },
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

export const StyledDrawerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  // width: '20vw',
  // backgroundColor: 'red',
  width: '50vw',

  '@media (max-width: 600px)': {
    width: '100vw',
  }
})

export const StyledDrawer = styled(Drawer)({
  // backgroundColor: 'orange',
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiPaper-root': {
    backgroundColor: 'transparent !important',
    backdropFilter: 'blur(20px)',
  },
})

export const HamburgerIconButton = styled(IconButton)({
  height: 75,
  width: 75,
  paddingRight: 14
})