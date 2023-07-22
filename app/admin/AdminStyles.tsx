"use client"

import styled from "@emotion/styled"
import { greyColorCustom, greyColorCustomLight } from "app/utils"
import TableRowsIcon from '@mui/icons-material/TableRows';
import EmailIcon from '@mui/icons-material/Email';

export const AdminRoot = styled('div')({
  marginTop: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: greyColorCustomLight,
  overyflowX: 'hidden',
})

export const AdminNavBar = styled('div')({
  width: '100vw',
  height: '15vh',
  backgroundColor: greyColorCustom,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderBottom: '2px solid gainsboro',
  marginBottom: '15px',
})

export const AdminContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})