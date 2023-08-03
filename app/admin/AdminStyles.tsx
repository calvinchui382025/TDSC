"use client"

import styled from "@emotion/styled"
import { greyColorCustom, greyColorCustomDark, greyColorCustomLight } from "app/utils"
import TableRowsIcon from '@mui/icons-material/TableRows';
import EmailIcon from '@mui/icons-material/Email';
import { Card, TextField } from '@mui/material';

export const AdminRoot = styled('div')({
  marginTop: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  backgroundColor: greyColorCustomLight,
})

export const AdminNavBar = styled('div')({
  width: '100%',
  padding: '24px 0px',
  backgroundColor: greyColorCustom,
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
})

export const AdminContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const AdminLoginWrapper = styled(Card)({
  display: 'flex',
  // height: '100%',
  // width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
})

export const LoginTitle = styled('h1')({
  fontFamily: 'sans-serif',
  fontSize: '2rem',
})

export const CustomTextField = styled(TextField)({
  width: '90%',
  backgroundColor: 'gainsboro',
  opacity: '0.8',
})