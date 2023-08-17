"use client"

import styled from "@emotion/styled"
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Drawer, IconButton, rgbToHex } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { greyColorCustomDark, mainColor } from "app/utils";
//======================================================

export const StyledAppBar = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '7vh',
  '@media (max-width: 3000px)': {
    height: '7vh',
  },
  position: 'fixed',
  top: 0,
  zIndex: 100,
  backgroundColor: greyColorCustomDark,
})

export const StyledAppBarSubContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
  '@media (max-width: 1600px)': {
    width: '90%',
  },
})

export const StyledListItemButton = styled(ListItemButton)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  height: '100%',
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

export const StyledDrawer = styled(Drawer)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
  backgroundColor: 'transparent',
})

export const DrawerBackground = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  gap: "2rem",
  padding: "1rem",
  backgroundColor: 'black',
})

export const HamburgerIconButton = styled(IconButton)({
  width: 75,
})

export const ListTextStyled = styled('h1')({
  color: 'white',
  fontSize: '1.5rem',
  fontFamily: 'sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  '&:hover': {
    color: 'rgb(52,124,245)',
  }
})

export const StyledExitButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  display: "none",
  '@media (max-width: 1022px)': {
    display: "block",
  },
})

export const StyledExitIcon = styled(CloseIcon)({
  color: '#fff',
  fontSize: '4rem',
  cursor: 'pointer',
});

export const AuxDrawerButtons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  position: "absolute",
  top: '0',
  marginTop: '0.5rem',
})