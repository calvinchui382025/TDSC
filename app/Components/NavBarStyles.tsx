"use client"

import styled from "@emotion/styled"
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
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
  borderRadius: '40px',
  boxShadow: 'none',
  // color: 'white',
  '&:hover': {
    backgroundColor: 'rgb(52,124,245)',
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

export const StyledDrawer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  width: '20vw',
})

export const HamburgerIconButton = styled(IconButton)({
  height: 75,
  width: 75,
  paddingRight: 14
})